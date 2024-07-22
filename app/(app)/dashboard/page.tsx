import Dashboard from '@/components/dashboard';
import Navbar from '@/components/navbar'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'

const page = async() => {

    const user=await currentUser();
    if(!user){
        redirect("/");
    }

  return (
    <div>
        <Navbar />
        <Dashboard />
    </div>
  )
}

export default page