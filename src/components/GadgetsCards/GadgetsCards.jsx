import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../Card/Card';


const GadgetsCards = () => {
    const { category } = useParams();
    const gadgets = useLoaderData();
    const [gadget, setGadget] = useState([]);
    useEffect(() => {
        if (category) {
            const filteredByCategory = [...gadgets].filter(gadget => gadget.category === category);
            setGadget(filteredByCategory)
        }
        else{
            setGadget(gadgets)
        }
    }, [gadgets, category]);
   

    return (
       
         <div className='grid grid-cols-3 gap-4 mx-10'>
            {
                gadget.map(gadget => <Card key={gadget.product_id} gadget={gadget}></Card>)
            }
        </div>
       
    );
};

export default GadgetsCards;