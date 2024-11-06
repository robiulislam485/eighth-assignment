import { Link } from "react-router-dom";


const Card = ({ gadget }) => {
    const { product_image, product_title, price,product_id } = gadget;
    return (
        <div className="card bg-base-100 shadow-xl p-6 w-[322px] space-y-6 transition hover:scale-105">
            <figure className=" p-4">
                <img
                    className="w-40 bg-base-200"
                    src={product_image}
                    alt={product_image}/>
            </figure>
            <div className="space-y-4">
                <h2 className="text-xl font-bold">{product_title}</h2>
                <p className="text-sm font-semibold text-gray-600">Price: {price}$</p>
                <div className="justify-start">
                    <Link to={`/gadget/${product_id}`}><button className="btn btn-outline border-[#9538E2] rounded-full hover:bg-[#9538E2]">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;