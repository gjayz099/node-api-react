import React from 'react'

export default function Footer() {
  return (
    <footer className=' border-t-2  border-violet-200'>
        <div className="top-footer px-12">
            <div className="row-footer-item">
                <div className="foot_left px-2 py-5">
                    <div className='logo-footer '>
                        <a href="" className='uppercase italic'>Lo<span>go</span></a>
                    </div>
                    <p>GINZ, COMPUTER SHOP <br />ALL COMPUTER PARTS AND COMPUTER SET</p>
                </div>
                <div className="foot_rt px-2 py-5">
                    <h3>CONTACTS</h3>
                    <p>
                        <span>Address: </span>
                        DAVAO CITY, BUHANGIN STEERT PHILIPINES 80187
                    </p>
                    <p>
                        <span>Phone: </span>
                        <a href="tel:#">(+63)9653878056</a>
                    </p>
                </div>
            </div>
        </div>
        <div className='bot-footer'>
            <h5 className=' text-center py-0 m-auto text-white'>Design By: <a href="#">Gerald Glen Dangcalana</a></h5>
        </div>
    </footer>
  )
}
