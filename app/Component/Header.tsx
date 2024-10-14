import React from 'react'
import Link from 'next/link'


const Header = () => {
  return (
    <div className='nav'>
        <div className='logo'> 
            <h4>K<span>S</span></h4>
        </div>
    <Link href="/" target='_blank'>Home </Link>
    <Link href="/about" target='_blank'>About</Link>
    <Link href="/services" target='_blank'>Services</Link>
    <Link href="/contact" target='_blank'>Contact</Link>
    </div>
  ) 
}

export default Header
