import { useEffect, useState } from "react";
import { addGadget, getPreviousData, removeGadget } from "../utility";
import DashBoardProduct from "../DashBoardProduct/DashBoardProduct";
import paymentImage from '../../assets/Group.png'

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
                    <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn px-6 py-2 rounded-full  border border-purple-800">Purchase</button>
                </div>
            </div>
            <div className="space-y-4">
                {
                    gadget.map((product, index) => <DashBoardProduct key={index} product={product} handleRemove={handleRemove}></DashBoardProduct>)
                }
            </div>
            {/* modal */}
            <div>

                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box flex flex-col items-center space-y-4">
                        <img src={paymentImage} alt="" />
                        <h3 className="font-bold text-lg">Payment Succesfull</h3>
                        <p className="py-4">Thanks for Purchasing</p>
                        <div className="text-lg font-bold gap-4">
                            Total: 
                            {
                                gadget.reduce((acc, curr) => acc + curr.price, 0)
                            }
                            $
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn px-52 text-lg font-bold">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>

            </div>

        </div>
    );
};

export default Cart;

