import React from 'react'


export default function Content() {
  return (
    <div className='container_company_content mt-36 m-auto mb-14'>
        <div className='company_content_row grid m-auto items-center gap-9'>

            <div className='company_content_item m-auto '>
                <h1 className='italic'>The Home of Pc Products</h1>
                <p className='w-5/6 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>

                <div className='btn_company_content mt-5'>
                    <a className=' text-white italic' href="">Learn about us</a>
                </div>
            </div>

            <div className='company_content_item m-auto'>
                <img src="https://raw.githubusercontent.com/gjayz099/node-api-react/main/frontend/src/assets/img/pic_company.png" alt="" />
            </div>
        </div>
    </div>
  )
}
