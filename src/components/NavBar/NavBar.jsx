import React from 'react';
import { NavLink, useLocation} from 'react-router-dom';
import { getPreviousData } from '../utility';


const NavBar = () => {
     const {pathname} = useLocation();
     const cartData = getPreviousData();
    return (
        <div className={`${pathname === '/' && 'flex items-center justify-between text-white bg-[#9538E2] p-4 mt-4 rounded-t-md'} flex items-center justify-between text-black  mt-4 rounded-t-md px-10`}>
            <h1 className='text-lg font-bold'>Gadget Heaven</h1>
            <div className='flex items-center gap-5'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to='/dashboard'>Dashboard</NavLink>
            </div>
            <div className='flex items-center gap-3'>
                <button className='btn rounded-full'> <i className="fa-solid fa-cart-shopping"></i><span>{cartData.length}</span></button>
                <button className='btn rounded-full'><i className="fa-regular fa-heart"></i></button>

            </div>
        </div>
    );
};

export default NavBar;