import React, { useEffect, useState } from 'react';
import { getWishProduct, removeProduct } from '../utility/utility';
import WishProduct from '../WishProduct/WishProduct';

const Wishlist = () => {


    const [product, setProduct] = useState([])
    useEffect(() => {
        const products = getWishProduct();
        setProduct(products)

    }, [])



    const handleRemove = (id) => {
        removeProduct(id)
        const item = getWishProduct();
        setProduct(item)
    }
    return (
        <div className="bg-base-200 p-10 rounded-sm">
         
                <h3 className="text-xl text-black font-bold">Wishlist</h3>
              <div className='space-y-5 mt-10'>
              {
                    product.map((item, index)=><WishProduct item={item} key={index} handleRemove={handleRemove}></WishProduct>)
                }
              </div>
            
           

        </div>
    );
};

export default Wishlist;