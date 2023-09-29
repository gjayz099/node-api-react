import React from 'react'
import { Link } from 'react-router-dom'


export default function Content() {
  return (
    <div className='build_own_pc_container m-auto grid'>
      <div className='build_own_pc_content grid self-center m-auto'>
        <h1 className='text-center mb-11 text-white'>CUSTOM SETUPS</h1>
        <h4 className='text-white'>Let’s Build Your Dream <br /> Computer Set</h4>
        <div className='build_own_pc_button mt-6'>
          <Link className='button text-white italic py-2 px-7' to='/shop'>Shop Now</Link>
        </div>
      </div>
    </div>

  )
}
