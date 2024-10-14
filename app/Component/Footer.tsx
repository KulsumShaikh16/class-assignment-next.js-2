import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    
       <footer className="bg-gray-800 text-white p-4">
      <div className="f-container mx-auto">
        <div className="flex justify-between items-center">
          <p>&copy; KS agency. All rights reserved.</p>
          <nav>
            <div className="flex space-x-4">
            <Link href="/about" target='_blank'>About</Link>
            <Link href="/contact" target='_blank'>Contact</Link>
            <Link href="/services" target='_blank'>Terms of Service</Link>
              
            </div>
          </nav>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer
