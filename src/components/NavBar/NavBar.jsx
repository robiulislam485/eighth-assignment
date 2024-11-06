import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className='flex items-center justify-between'>
            <h1 className='text-lg font-bold text-white'>Gadget Heaven</h1>
            <div className='flex items-center gap-5'>
                <NavLink  className={`text-sm font-bold text-white`} to='/'>Home</NavLink>
                <NavLink  className={`text-sm font-bold text-white`} to='/statistics'>Statistics</NavLink>
                <NavLink  className={`text-sm font-bold text-white`} to='/dashboard'>Dashboard</NavLink>
            </div>
            <div className='flex items-center gap-3'>
                <button className='btn rounded-full'> <i class="fa-solid fa-cart-shopping"></i></button>
                <button className='btn rounded-full'><i class="fa-regular fa-heart"></i></button>

            </div>
        </div>
    );
};

export default NavBar;