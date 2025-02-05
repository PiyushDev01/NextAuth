"use client";

import { useSession, signOut } from "next-auth/react"
import React from 'react'
import SignIn from './SignIn';
import Image from "next/image";

export default function UserInfo() {

    const { status, data: session } = useSession()
    console.log(session);

  return (
    <>
    {
        status==='authenticated'? (
        <div className=" bg-slate-300 shadow-lg text-slate-800  p-4 rounded-lg " >
            <Image src={session?.user?.image} className=" rounded-full"  width={40} height={40} alt="image here" />
            <h1 className=" text-3xl my-2" >{session?.user?.name} </h1>
            <h1>{session?.user?.email} </h1>
            <button 
            onClick={()=>signOut()}
            className=" bg-slate-700 text-white w-full my-4 p-3 rounded-lg " >Sign Out</button>
        </div>
    
    ):(
            <SignIn />
        )
    }
    </>
  )
}
