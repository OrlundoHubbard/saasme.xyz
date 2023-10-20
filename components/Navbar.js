import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='w-full'>
      <nav className='flex justify-between items-center px-6 md:px-20 py-4'>
        <p className='text-2xl font-bold'>
          SaaS<span className='text-indigo-700'>Me</span>
        </p>

      </nav>
    </header>
  )
}

export default Navbar