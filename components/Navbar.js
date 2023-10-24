import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='w-full'>
      <nav className='flex justify-between items-center px-6 md:px-20 py-4'>
        <p className='text-2xl font-bold'>
          <Link href="/">
          SaaS<span className='text-indigo-700'>Me</span>
          </Link>
        </p>
        <p>Blog</p>
        <button className="rounded-[3px] bg-violet-800 px-5 py-3 shadow-lg shadow-indigo-500/50 text-white">Signup for the Newsletter</button>

      </nav>
    </header>
  )
}

export default Navbar