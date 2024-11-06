import React from 'react';

const DashBoardProduct = ({ product, handleRemove}) => {
    const { product_image, product_title, price, description } = product;
   

    return (
        <div className="flex items-center p-12 mx-20 gap-6  bg-white rounded-md shadow-md">
            <div>
                <img className='w-96' src={product_image} alt="" />
            </div>
            <div>
                <h1 className='text-xl font-bold mt-4'>{product_title}</h1>
                <p className='text-md text-gray-500 mt-4'>{description}</p>
                <p className='text-md font-bold mt-4'>Price: {price}$</p>
            </div>
            <div className="ml-96"><button onClick={() => { handleRemove(product.product_id) }}><i className="text-red-600 text-2xl fa-regular fa-circle-xmark"></i></button></div>
        </div>
    );
};

export default DashBoardProduct;