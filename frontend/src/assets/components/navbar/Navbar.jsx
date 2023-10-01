import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { BiCart, BiMenu, BiMenuAltRight } from 'react-icons/bi'


export default function Navbar() {

  // use state
  const [ navclick, setNavclick] = useState(true)

  // click function
  const menuToggle = () =>{
    setNavclick(!navclick);
  }

  return (
    <>
      {/* top navbar */}
      <div className='top-nav bg-blue-400'>
        <h1 className='text-center py-2 text-white'>We're open and available for takeaway & delivery. Order Now</h1>
      </div>
      {/* top navbar */}
      <nav className='botton_nav items-center absolute'>
        <div className='right-nav'>
          <a href="" className='logo uppercase italic'>GI<span>NZ</span></a>
        </div>
        <div className='left-nav items-center '>
        <ul  className={navclick?' overflow-hidden': 'overflow-hidden clicknav'}>
          <li>
            <Link onClick={menuToggle} className='uppercase mx-5' to='./'>Home</Link>
          </li>
          <li>
            <Link onClick={menuToggle} className='uppercase mx-5' to='./shop'>Shop</Link>
          </li>
          <li>
            <Link onClick={menuToggle} className='uppercase mx-5' to='./company'>Company</Link>
          </li>
          <li>
            <Link onClick={menuToggle} className='uppercase mx-5'  to='./contact'>Contact</Link>
          </li>
          <li>
              <Link onClick={menuToggle} className='uppercase mx-5'  to='./login'>Login</Link>
          </li>
        </ul>
          <div className='cart-icon'>
            <BiCart className=' text-white cursor-pointer'/>
          </div>
          <div className={navclick?'icon-bar' : 'icon-bar'} onClick={menuToggle} >
            {navclick?<BiMenu /> : <BiMenuAltRight/>}
          </div>
        </div>
      </nav>
    </>
  
  )
}
