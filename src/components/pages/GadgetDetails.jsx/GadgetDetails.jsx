import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Heading from '../../Heading/Heading';
import { addGadget } from '../../utility';
import { getWishProduct, wishlistProduct } from '../../utility/utility';




const GadgetDetails = () => {
    const { product_id } = useParams();
    const allGadget = useLoaderData()
    const [gadget, setGadget] = useState([]);
    const [enable, setEnable] = useState(false)
    useEffect(() => {
        const findGadget = allGadget.find(gadget => gadget.product_id === parseInt(product_id));
        setGadget(findGadget);
        const wishProduct = getWishProduct()
        const isExist = wishProduct.find(item => item.product_id == findGadget.product_id)
        if (isExist) {
            setEnable(true)
        }

    }, [allGadget, product_id])
    const { product_image, product_title, price, availability, description, rating,specification } = gadget;

    const handleGadget = (gadget) => {
        addGadget(gadget)

    }
    const handleWishList = (product) => {
        wishlistProduct(product)
        setEnable(true)
    }
    return (
        <div className='pb-4 mb-5'>
            <div className='bg-[#9538E2] p-6'>
                <Heading title={'Product Details'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Heading>
            </div>

            <div className='flex gap-10 items-center justify-center p-20 shadow-2xl rounded-md my-24 mx-40 '>
                <div>
                    <img className='w-[400px]' src={product_image} alt="" />
                </div>
                <div className='space-y-4'>
                    <h1 className='text-3xl font-bold'>{product_title}</h1>
                    <p className='text-lg font-semibold'>Price: {price}$</p>
                    <p className="w-24 px-4 py-2  border border-purple-900 rounded-full">{`${availability ? 'In Stock' : 'Out Of Stock'}`}</p>
                    <p className='text-lg text-gray-600'>{description}</p>
                    <p className='text-lg font-bold'>Specification:</p>
                    <p className='text-lg font-bold'>Rating: {rating}</p>
                    <div className='flex items-center gap-4'>
                    <button onClick={() => handleGadget(gadget)} className='btn rounded-full bg-purple-800 text-white'>Add to Cart <i class="fa-solid fa-cart-shopping"></i></button>
                    <button disabled={enable} onClick={() => handleWishList(gadget)} className='btn rounded-full border border-purple-800'><i class="fa-solid fa-heart"></i></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GadgetDetails;


// {
//     "product_id": 11,
//     "product_title": "Sony WF-1000XM4",
//     "product_image": "https://i.ibb.co/vZWf3tX/download-8.jpg",
//     "category": "Earbuds",
//     "price": 279,
//     "description": "High-quality noise-cancelling earbuds with exceptional sound.",
//     "specification": [
//         "Battery Life: 8 hours listening time",
//         "Connectivity: Bluetooth 5.2",
//         "Water Resistance: IPX4",
//         "Charging Case: Wireless charging case"
//     ],
//     "availability": true,
//     "rating": 4.8
// },