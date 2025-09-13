// import React from 'react'
// import { Link } from 'react-router-dom'
// import FlipkartLogo from "../assets/Flipkart.svg"
// import {IoSearch} from 'react-icons/io5'
// import {MdKeyboardArrowDown} from 'react-icons/md'
// import {FaShoppingCart} from 'react-icons/fa'

// const Navbar = () => {
//   return (
//     <>
//     <div className='h-14 bg-[var(--flipkart-lightBlue)] text-[var(--flipkart-white)] fixed w-full z-20'>
//         <div className='max-w-[1248px] w-full flex justify-between items-center mx-auto py-[10px] px-[124px]'>
//             <Link to='/'>
//                 <img src={FlipkartLogo} alt="flipkart logo" className="h-10 w-auto m-5"/>
//             </Link>
//         </div>
//         <div>
//             <input type="text" placeholder='Search for Products brands and more' className='flex justify-between text-gray-700 bg-[var(--flipkart-white)] max-w-[444px] w-[calc(100%-540px)] rounded-[2px]'/>
            
//             <button className='h-9 w-11 border-none bg-[var(--flipkart-white)] text-[20px] px-3 pt-1 text-[var(--flipkart-lightBlue)] cursor-pointer'>
//                 <IoSearch />
//             </button>

//             <button className=''>
//                 Login
//             </button>
//             <div className=''>
//                 <h3>Become a Seller</h3>
//             </div>
//             <div className=''>
//                 <h3 className="flex items-center gap-1">More
//                     <i className=''>
//                         <MdKeyboardArrowDown />
//                     </i>
//                 </h3>     
//             </div>
//             <div>
//                 <div>
//                     <FaShoppingCart />
//                 </div>
//                 <Link to={'/cart'}>Cart</Link>
//             </div>

//         </div>
//     </div>
//     </>
//   )
// }

// export default Navbar


import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import Loginmodel from "./Login/Loginmodel";
import { useState } from "react";
import {useAuth} from './Login/AuthContext'

const Navbar = () => {

    const[isOpen,setIsOpen] = useState(false);
    const{user,logout} = useAuth()

  return (
    <>
      {/* Fixed navbar */}
      <div className="fixed top-0 inset-x-0 w-full bg-blue-500 text-white z-20">
        <div className="h-14 max-w-[1248px] w-full flex justify-between items-center mx-auto  p-2">
          {/* Logo */}
          <Link to={"/"}>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="Flipkart logo"
              className="w-20"
            />
          </Link>

          {/* Search Box*/}
          <div className="flex max-w-[444px] w-[calc(100%-540px)] bg-white rounded-sm ">
            <input
              type="text"
              placeholder="Search for Products, brands and more"
              className="p-2 w-full border-none outline-none text-black"
            />
            <button className="h-9 w-11 flex items-center justify-center text-blue-500 text-xl cursor-pointer ">
              <IoSearch />
            </button>
          </div>

          {/* Login Button */}
          {/* <button className="px-10 h-8 bg-white text-blue-500 border border-gray-300 font-bold rounded-sm cursor-pointer" onClick={() => setIsOpen(true)}>
            Login
          </button> */}

          {user?(
             <div className="flex items-center gap-4 cursor-pointer" onClick={logout}  >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-700 text-sm font-bold border-2 border-blue-700">{user.email.slice(0,1).toUpperCase()}</span>
              {/* <button
                onClick={logout}
                className="px-4 h-8 bg-white text-blue-500 border border-gray-300 font-bold rounded-sm cursor-pointer"
              >
                Logout
              </button> */}
            </div>
          ):(
             <button
              className="px-8 h-8  bg-white text-blue-500 border border-gray-300 font-bold rounded-sm cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              Login
            </button>
          )}

          {/* Become a Seller-- text-xs cursor-pointer */}
          <div className="text-xs cursor-pointer">Become a Seller</div>

          {/* More-- text-xs flex items-center gap-1 cursor-pointer-- text-lg */}
          <div className="text-xs flex items-center gap-1 cursor-pointer ">
            <h3>More</h3>
            <MdKeyboardArrowDown className="text-lg" />
          </div>

          {/* Cart */}
          <div className="flex items-center ml-5 cursor-pointer">
            <FaShoppingCart className="text-lg" />
            <Link to={"/cart"} className="text-sm px-1 text-white">
              Cart
            </Link>
          </div>
        </div>
      </div>

      {/*Which makes the content start from below the navbar. Spacer to prevent content from sitting under the fixed navbar */}
      <div className="h-14" aria-hidden="true" />
      < Loginmodel isOpen={isOpen} setIsOpen = {setIsOpen}/>
    </>
  );
};

export default Navbar;
