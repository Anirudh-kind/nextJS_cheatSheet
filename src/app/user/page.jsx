'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

const user = () => {
  const router=useRouter();
  console.log('router',router);
  return (
    <h1>this is user page</h1>
  )
}

export default user