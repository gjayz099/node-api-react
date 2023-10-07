import React, {useState, useEffect} from 'react'

export default function Product() {

    // Initialize state variables
  const [menuProduct, setMenuProduct] = useState([]);
  const [productData, setProductData] = useState([]);
  const [productcollection, setProductcollection] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api/products', {
          method: 'GET',
          headers: {
            // "X-Api-Key" : "5325325yygdfgg7532578ghtrhtr782532",
            "X-Powered-By": "Express",
            "Content-Type": "application/json; charset=utf-8"
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setMenuProduct(result);
      } catch (error) {
        console.log('Error: ', error);
      }
    }

    fetchData();

  }, [])

  useEffect(() => {
    // Update productData when menuProduct changes
    setProductData(menuProduct);
  }, [menuProduct])

  useEffect(() => {
    // Calculate productcollection based on menuProduct
    const categories = [...new Set(menuProduct.map((item) => item.catogoryname))];
    setProductcollection(categories);
  }, [menuProduct]);

  // click function li
  const menuProductFilter = (itemDataPC) => {
    const filterDataProduct = menuProduct.filter((item) => item.catogoryname === itemDataPC);
    setProductData(filterDataProduct);
  }

  return (
    <>
    <div className='product_menu_container m-auto py-5'>
        <div className='product_menu_tittle m-auto pt-6 pb-3'>
            <h1 className='text-center'>Pc Ginz Product</h1>
        </div>
        <div className='link_click_pc_part m-auto flex justify-center flex-wrap my-10 gap-5'>
            <li className='me-10  cursor-pointer'>
                <a className='mt-6' onClick={ () => setProductData(menuProduct)}>All Product</a>
            </li>
            {
                productcollection.map((item) => <li className='me-10 cursor-pointer'><a onClick={() => {menuProductFilter(item)}}>{item}</a></li>)
            }
        </div>

        <div className='product_pc_row grid m-auto'>
            {
            productData.map((item, id) => 
            <div className='product_menu_item m-auto mb-5'>
                <div key={id} className='Product_Item_img'>
                    <img src={item.Image} alt="" />
                </div>
                <div className='name-product'>
                <h3 className='text-center m-auto italic pt-1'>{item.name}</h3>
                <h5 className='text-center m-auto pt-1'>{item.productname}</h5>
                </div>
                <div className='price_qty flex justify-between px-3 py-2'>
                <h4 className='text-center'>Quantity <br />{item.quantity}</h4>
                <h4 className='text-center'>Price <br />{item.price}</h4>
                </div>
                <div className='btn_add_cart m-auto text-center'>
                <a className='text-center rounded-sm' href="">ADD CART</a>
                </div>
            </div>
            )}
        </div>
    </div>
    </>
  )
}
