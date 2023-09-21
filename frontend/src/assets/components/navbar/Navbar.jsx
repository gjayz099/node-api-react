import React from 'react'
import { Link } from 'react-router-dom'
import { BiCart, BiMenu } from 'react-icons/bi'

export default function Navbar() {
  return (
    <>
      {/* top navbar */}
      <div className='top-nav bg-blue-400'>
        <h1 className='text-center py-2 text-white'>We're open and available for takeaway & delivery. Order Now</h1>
      </div>

      {/* top navbar */}
      <nav className='botton_nav items-center'>
        <div className='right-nav'>
          <a href="" className='logo'>Lo<span>go</span></a>
        </div>
        <div className='left-nav items-center '>
        <ul>
          <li>
            <Link className='uppercase mx-5' to='./'>Home</Link>
          </li>
          <li>
            <Link className='uppercase mx-5' to='./shop'>Shop</Link>
          </li>
          <li>
            <Link className='uppercase mx-5' to='./company'>Company</Link>
          </li>
          <li>
            <Link className='uppercase mx-5' to='./contact'>Contact</Link>
          </li>
        </ul>
          <div className='cart-icon'>
            <BiCart className=' text-white cursor-pointer'/>
          </div>
          <div className='icon-bar'>
            <BiMenu />
            {/* {?<BiMenu /> : <BiMenuAltRight/>} */}
          </div>
        </div>
      </nav>
    </>
  
  )
}
