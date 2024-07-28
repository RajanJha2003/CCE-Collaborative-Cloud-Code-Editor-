/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { eq } from 'drizzle-orm';
import { user } from './schema';
import { json } from 'itty-router-extras';
import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';
import { z } from 'zod';

export interface Env {
	DB: D1Database;
	STORAGE: any;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);
		const path = url.pathname;
		const method = request.method;
		const db = drizzle(env.DB, { schema });

		if (path == '/api/user') {
			if (method == 'GET') {
				const params = url.searchParams;
				if (params.has('id')) {
					const id = params.get('id') as string;
					const res = await db.select().from(user).where(eq(user.id, id)).get();
					return json(res ?? {});
				} else {
					const res = await db.select().from(user).all();
					return new Response(JSON.stringify(res));
				}
			} else if (method == 'POST') {
				const userSchema = z.object({
					id: z.string(),
					name: z.string(),
					email: z.string().email(),
				});

				const body = await request.json();

				const { id, name, email } = userSchema.parse(body);

				const res = await db.insert(user).values({ id, name, email }).returning().get();

				return json({ res });
			} else return new Response('Method Not Found', { status: 405 });
		} else return new Response('Not Found', { status: 404 });
	},
};
