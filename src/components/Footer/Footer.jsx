import React from 'react';

const Footer = () => {
    return (
        
            
            <footer className="bg-base-300  px-40 py-10 text-center">
            <div className='flex flex-col items-center gap-2 my-12'>
                <h1 className='text-xl font-bold'>Gadget Heaven</h1>
                <p className='text-sm text-gray-600'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className='border-b border-gray-300'></div>
         <div className='flex justify-around items-center mt-12'>
         <nav className='flex flex-col items-center gap-1'>
               <h6 className="footer-title">Product Support</h6>
               <a className="link link-hover">Order Tracking</a>
               <a className="link link-hover">Shiping & Delivary</a>
               <a className="link link-hover">Returns</a>
           </nav>
           <nav className='flex flex-col items-center gap-1'>
               <h6 className="footer-title">About Us</h6>
               <a className="link link-hover">Careear</a>
               <a className="link link-hover">Contact</a>
           </nav>
           <nav className='flex flex-col items-center gap-1'>
               <h6 className="footer-title">Terms Of Services</h6>
               <a className="link link-hover">Privacy Policy</a>
               <a className="link link-hover">Coockie Policy</a>
           </nav>
         </div>
           
       </footer>
        
    );
};

export default Footer;