import React from 'react'
import pic_gallery from './index.json'


export default function Gallery() {
  return (
    <div className='container_gallery'>
        <div className='gallery_row grid'>
            {
                pic_gallery.picture_gallery.map((item, id) =>
                <div className='item_gallery' key={id}>
                    <img src={item.pic_gallery} alt="" />
                </div>
                )
            }
        </div>
    </div>
  )
}
