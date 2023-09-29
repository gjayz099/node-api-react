import React from 'react'
import { BiUser, BiEnvelope, BiMessageDetail, BiSolidEditLocation, BiSolidPhone, BiSolidPurchaseTag } from 'react-icons/bi'


export default function Content() {
  return (
    <>
      <div className='contact_container m-auto grid my-5'>
      <div className='logo'>
        <h1 className='text-white m-auto text-center'>GINZ</h1>
      </div>

      <form className='contact_form'>
        <div className="heading text-center">
          <h2 className='py-1'>CONTACT US</h2>
          <p className='py-1 italic'>feel free to reach out to us, we'd love to hear from you!</p>
        </div>
        <div className="input text-center m-auto">
          <BiUser className='icon-contact w-3/12 sm:w-4/12 ps-4 mt-4'/>
          <input  className='w-9/12 sm:w-4/6'  name="username" type="text" placeholder="Username" />
        </div>
        <div className="input text-center m-auto">
          <BiEnvelope className='icon-contact w-3/12 sm:w-4/12 ps-4 mt-4'/>
          <input className='w-9/12 sm:w-4/6'  name="email" type="email" placeholder="Email" />
        </div>
        <div className="input text-center m-auto">
          <BiMessageDetail className='icon-contact w-3/12 sm:w-4/12 ps-4 mt-4'/>
          <textarea
            className='w-9/12 sm:w-4/6' 
            name="message"
            cols="30"
            rows="5"
            placeholder="Message"
          ></textarea>
        </div>
        <div className='w-4/6 m-auto my-3 button-contact'>
          <input className='button  m-auto cursor-pointer py-1 px-9 text-white italic' type="button" value="Submit" />
        </div>
      </form>


      <div className='contact_info grid items-center m-auto px-5'>
        <h3 className="heading text-center text-white italic pt-3">OUR INFORMATIONS</h3>
          <div className="contacts-ul">
            <li className='flex items-center'>
              <BiSolidEditLocation className='mx-1 text-white'/>
              <h5 className='text-white italic'>8881 Davao city, Davao Del Sure, Philipines</h5>
            </li>
            <li className='flex items-center'>
              <BiEnvelope className='mx-1 text-white'/>
              <h5 className='text-white italic'>info@compartsginz.com</h5>
            </li>
            <li className='flex items-center'>
              <BiSolidPhone className='mx-1 text-white'/>
              <h5 className='text-white italic'>+639-62-52-985</h5>
            </li>
            <li className='flex items-center'>
              <BiSolidPurchaseTag className='mx-1 text-white'/>
              <h5 className='text-white italic'>+639-62-52-975</h5>
            </li>
          </div>
        <div class="social-links"></div>
      </div>
    </div>
    </>

  )
}
