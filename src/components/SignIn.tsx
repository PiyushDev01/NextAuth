"use client"; // This must be the very first line

import { signIn } from 'next-auth/react';
import React from 'react';
import { FaGoogle } from "react-icons/fa";

export default function SignIn() {
  return (
    <div 
      onClick={() => signIn("google")}
      className="flex items-center justify-center p-3 rounded-lg bg-slate-300 gap-3 cursor-pointer"
    >
      <FaGoogle /> Sign In with Google
    </div>
  );
}
