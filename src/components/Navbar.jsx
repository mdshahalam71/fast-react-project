import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-amber-900 text-white py-4 md:py-8 px-5'>
         <div className='flex justify-between items-center'>
            <h2>SHAH ALAM</h2>
            <ul className='flex space-x-4 md:space-x-6'>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
            </ul>
            <button>Loing</button>
        </div>
    </nav>   
  )
}

export default Navbar