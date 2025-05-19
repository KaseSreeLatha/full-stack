import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-10 bg-[red] flex justify-evenly'>
        <div>
            Website logo
        </div>

        <div>
            items
            items
            items
            items
            items
        </div>

        <div className='flex justify-evenly items-center'>
          <Link to='/login'>  <button>Log In</button></Link>
        </div>
    </div>
  )
}

export default Navbar