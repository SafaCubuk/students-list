import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='site-header d-flex flex-column flex-md-row align-items-center'>
      <span className='site-brand'>Students List</span>
      <nav className='site-nav ms-auto'>
        <Link href="/" className='nav-link'>Home</Link>
        <Link href="/form/add" className='nav-link'>Add Students</Link>
      </nav>
    </div>
  )
}
