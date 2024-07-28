import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'

const AppAuthLayout = async({children}:{children:React.ReactNode}) => {

    const user=await currentUser();
    if(!user){
        redirect("/");
    }

    const dbUser=await fetch(
        `https://database.rajanj448.workers.dev/api/user?id=124`
    )

    const res=await dbUser.json();

    console.log(dbUser);



  return (
    <>
    <h1>{res.name}</h1>
    
    {children}</>
  )
}

export default AppAuthLayout