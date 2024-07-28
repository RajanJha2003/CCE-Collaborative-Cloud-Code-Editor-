import Dashboard from '@/components/dashboard';
import Navbar from '@/components/navbar'
import { Virtualbox } from '@/lib/types';
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'

const page = async() => {

    const user=await currentUser();
    if(!user){
        redirect("/");
    }

    const res=await fetch(`https://database.rajanj448.workers.dev/api/user/virtualbox?id=${user.id}`);

    const data=(await res.json()).virtualbox as Virtualbox[];


  return (
    <div>
        <Navbar />
        <Dashboard virtualboxes={data}  />
    </div>
  )
}

export default page