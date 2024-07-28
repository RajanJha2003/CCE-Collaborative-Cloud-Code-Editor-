import { createId } from '@paralleldrive/cuid2';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';

export const user = sqliteTable('user', {
	id: text('id')
		.$defaultFn(() => createId())
		.primaryKey()
		.unique(),
	name: text('name').notNull(),
	email: text('email').notNull(),
	image: text('image'),
	generations: integer('generations').default(0),
});


export type User=typeof user.$inferSelect;


export const userRelations=relations(user,({many})=>({
	virtualbox:many(virtualbox)
}))

export const virtualbox = sqliteTable('virtualbox', {
	id: text('id')
		.$defaultFn(() => createId())
		.primaryKey()
		.unique(),
	name: text('name').notNull(),
	type: text('type', { enum: ['react', 'node'] }).notNull(),
	bucket: text('bucket'),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
});

export type Virtualbox = typeof virtualbox.$inferSelect;


export const virtualBoxRelations=relations(virtualbox,({one,many})=>({
	author: one(user, {
		fields: [virtualbox.userId],
		references: [user.id],
		
	}),

}))
