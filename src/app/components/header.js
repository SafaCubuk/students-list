import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom'>
      <span>Students List</span>
      <nav className='ms-auto'>
      
          <Link href="/" className='text-black text-decoration-none me-3 py-2'>Home</Link>
          <Link href="/form/add" className='text-black text-decoration-none me-3 py-2'>Add Students</Link>
       
      </nav>
    </div>
  )
}
