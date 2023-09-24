import React from 'react'
import { Link } from 'react-router-dom'
import { BiSolidWindowAlt, BiTab, BiPackage } from 'react-icons/bi'

export default function Content() {
  return (
    <>

      <div className='offer-content-home m-auto py-10'>
        <div className='title-offer-content m-auto'>
          <h1 className='text-center'>How it works.</h1>
        </div>
         <div className='row-offer-content grid gap-10 m-auto pt-10'>

            <div className='item-offer-content m-auto'>
              <div className='icon-offer-content m-auto'>
                <BiSolidWindowAlt className='text-white m-auto rounded-xl p-3 bg-violet-950'/>
              </div>
              <div className='text-offer-content'>
                <h3 className='text-center py-3'>Adapt your product items</h3>
                <p className='md:indent-6 sm:indent-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum facere labore esse nulla hic sed fugiat id dolor sequi.</p>
              </div>
            </div>

            <div className='item-offer-content m-auto'>
              <div className='icon-offer-content m-auto'>
                <BiTab className='text-white m-auto rounded-xl p-3 bg-violet-950'/>
              </div>
              <div className='text-offer-content'>
                <h3 className='text-center py-3'>Accept online buy & store buy</h3>
                <p className='md:indent-6 sm:indent-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum facere labore esse nulla hic sed fugiat id dolor sequi.</p>
              </div>
            </div>

            <div className='item-offer-content m-auto'>
              <div div className='icon-offer-content m-auto'>
                <BiPackage className='text-white m-auto rounded-xl p-3 bg-violet-950'/>
              </div>
              <div className='text-offer-content'>
                <h3 className='text-center py-3'>Manage delivery items</h3>
                <p className='md:indent-6 sm:indent-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum facere labore esse nulla hic sed fugiat id dolor sequi.</p>
              </div>
            </div>
         </div>
      </div>


      <div className='container-content-home'>
        <div className='row-content-home justify-center m-auto items-center grid self-center gap-3'>
            <div className='item-contet-home m-auto'>
                <h1>The Computer Set Product</h1>
              <p className='md:w-full italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quod officia reprehenderit eum quam, cum veniam velit quibusdam, magni incidunt excepturi maiores, odit necessitatibus facere?.</p>
            </div>
            <div className='item-contet-home m-auto pb-5'>
              <img src='https://raw.githubusercontent.com/gjayz099/node-api-react/main/frontend/src/assets/img/pic_content_home.png' alt="" />
            </div>
        </div>
      </div>

      <div className='container-content-home'>
        <div className='row-content-home justify-center m-auto items-center grid self-center gap-3'>
            <div className='item-contet-home m-auto pt-5'>
              <img src='https://raw.githubusercontent.com/gjayz099/node-api-react/main/frontend/src/assets/img/pic_content_laptop.png' alt="" />
            </div>
            <div className='item-contet-home m-auto'>
              <h1>The Laptop Product</h1>
              <p className='md:w-full italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quod officia reprehenderit eum quam, cum veniam velit quibusdam, magni incidunt excepturi maiores, odit necessitatibus facere?.</p>
            </div>
        </div>
      </div>



      <div className="container-cta-content-home py-10 m-auto">
        <div className="row-cta-content m-auto gap-9 grid items-center self-center">
          <div className="item-cta-content-img">

          </div>
          <div className="item-cta-content p-5 m-auto grid">
            <div className='item-grid grid items-center self-center '>
              <h1 className=' text-white'><span >Support</span> good food<br/>and local business.
              </h1>
              <Link className='uppercase bg-violet-950 w-24 text-white rounded-lg italic py-3 text-center' to='./shop'>Shop</Link>
            </div>
         
          </div>
      </div>
    </div>

    </>
  
  )
}

