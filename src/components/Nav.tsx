"use client";

import { useSession, signIn, signOut } from 'next-auth/react';
import React from 'react'
import Link from 'next/link'
import { TbBrandAuth0 } from "react-icons/tb";


function Nav() {

    const { status} = useSession();

  return (
    <div className=' flex  items-center justify-between rounded-md  bg-blue-500 text-white p-4 ' >
        <h1 className=' text-3xl font-mono font-semibold' >
            <Link href='/'> <TbBrandAuth0 /> NextAuth</Link>
        </h1>
        <ul className=' flex flex-col md:flex-row items-center gap-3 ' >
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
            {
                status==='authenticated'?(<button 
                    onClick={()=>signOut()}
                    className=' bg-blue-800 px-4 p-2 rounded-lg  ' >SignOut</button>):
                (<button 
                    onClick={()=>signIn('google')}
                    className=' bg-blue-800 px-4 p-2 rounded-lg  ' >SignIn</button>
             ) }
        </ul>
    </div>
  )
}

export default Nav