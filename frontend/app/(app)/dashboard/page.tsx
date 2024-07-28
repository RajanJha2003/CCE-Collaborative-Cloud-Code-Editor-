import Dashboard from '@/components/dashboard';
import Navbar from '@/components/navbar'
import { User, Virtualbox } from '@/lib/types';
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'

const page = async() => {

    const user=await currentUser();
    if(!user){
        redirect("/");
    }

    const userRes = await fetch(
      `https://database.rajanj448.workers.dev/api/user?id=${user.id}`
    );

    const userData=(await userRes.json()) as User;


  return (
    <div>
        <Navbar userData={userData} />
        <Dashboard virtualboxes={userData.virtualbox}  />
    </div>
  )
}

export default page