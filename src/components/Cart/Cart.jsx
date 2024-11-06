import { useEffect, useState } from "react";
import { addGadget, getPreviousData, removeGadget } from "../utility";
import DashBoardProduct from "../DashBoardProduct/DashBoardProduct";

const Cart = () => {


    const [gadget, setGadget] = useState([])
    useEffect(() => {
        const gadgets = getPreviousData();
        setGadget(gadgets)

    }, [])


    const handleSort = sort => {

        const sorted = [...gadget].sort((a, b) => b.price - a.price);
        setGadget(sorted)
    }

    const handleRemove = (id) => {
        removeGadget(id)
        const gadgets = getPreviousData();
        setGadget(gadgets)
    }

    return (
        <div className="bg-base-200 p-10 rounded-sm">
            <div className="flex justify-between items-center max-w-7xl mx-auto my-6 ">
                <h3 className="text-xl text-black font-bold">Cart</h3>
                <div className="flex gap-4">
                    <button onClick={() => { handleSort('price') }} className="btn px-6 py-2 rounded-full bg-purple-800 text-white">Sort By Price <i class="fa-solid fa-sort"></i></button>
                    <button className="btn px-6 py-2 rounded-full  border border-purple-800">Purchase</button>
                </div>
            </div>
            <div className="space-y-4">
                {
                    gadget.map((product, index) => <DashBoardProduct key={index} product={product} handleRemove={handleRemove}></DashBoardProduct>)
                }
            </div>

        </div>
    );
};

export default Cart;

// {
//     "product_id": 1,
//     "product_title": "Acer Aspire 5",
//     "product_image": "https://i.ibb.co.com/sW6dFbM/download-2.jpg",
//     "category": "Laptop",
//     "price": 549,
//     "description": "Budget-friendly laptop with decent specifications for everyday use.",
//     "specification": [
//         "Display: 15.6-inch FHD",
//         "Processor: Intel Core i5",
//         "RAM: 8GB",
//         "Storage: 256GB SSD",
//         "Battery : Up to 8 hours"
//     ],
//     "availability": true,
//     "rating": 4.3
// }