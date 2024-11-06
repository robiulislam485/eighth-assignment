import React from 'react';
import Heading from '../../Heading/Heading';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <>
        <div className='bg-[#9538E2] py-6'>
            <Heading title={'Dashboard'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Heading>

            <div className='flex justify-center items-center gap-4 '>
                <NavLink to={'/dashboard/cart'} className={({isActive})=> `border border-white px-6 py-2 shadow-lg rounded-full  ${isActive ? 'bg-white text-purple-700' : ''}`}>Cart</NavLink>
                <NavLink to={'/dashboard/wishlist'} className={({isActive})=> `border border-white px-6 py-2 shadow-lg rounded-full  ${isActive ? 'bg-white text-purple-700' : ''}`}>Wishlist</NavLink>
            </div>
            
        </div>
        <Outlet></Outlet>
        </>
    );
};

export default Dashboard;