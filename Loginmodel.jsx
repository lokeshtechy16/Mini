import React, { useState } from 'react'
import {RxCross2} from 'react-icons/rx'
// import supabase from '../supabase'
import {useAuth} from './AuthContext'

const Loginmodel = ({isOpen, setIsOpen}) => {

  const [email,setEmail]= useState("")
  const [password,setPassword] = useState("")
  const [loginType, setLoginType] = useState(true)

  const [error, setError] = useState("");

  const { login, signup } = useAuth();

  const handleSubmit = () => {
    if (loginType) {
      const result = login(email, password);
      if (!result.success) setError(result.message);
      else setIsOpen(false); // close modal on success
    } else {
      const result = signup(email, password);
      if (!result.success) setError(result.message);
      else setIsOpen(false);
    }
  };

 return isOpen ? (
    <div className="fixed inset-0 bg-black/50 w-full h-screen z-50">
      <div className="relative flex h-[500px] w-[700px] bg-white shadow-lg rounded-lg overflow-hidden translate-x-1/2 translate-y-1/4 ">
        {/* Left Side */}
        <div className="w-[40%] bg-[#2874f0] h-full text-white px-[30px] py-4">
          <div className='bg-[url("https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png")] bg-no-repeat bg-[center_85%] h-full'>

            <p className="text-3xl py-5">{loginType ? "Login" : "Sign Up"}</p>
            <p className="text-lg font-light text-gray-300">
              Get access to your Orders, Wishlist and Recommendations
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="h-full w-[60%] py-[50px] px-[25px]">
          <input
            type="email"
            className="w-[95%] outline-none border-b border-gray-400 text-[15px] p-[5px] font-medium h-[30px] mt-[10px] bg-transparent"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-[95%] outline-none border-b border-gray-400 text-[15px] p-[5px] font-medium h-[30px] mt-[10px] bg-transparent"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <p className="py-[20px] px-0 text-xs text-black/50 font-light">
            By continuing you agree to Flipkart's{" "}
            <span className="text-blue-600 cursor-pointer">Terms of Use</span>{" "}
            and
            <span className="text-blue-600 cursor-pointer"> Privacy Policy</span>
          </p>

          <button
            onClick={handleSubmit}
            className="bg-orange-400 w-full mt-2 border-none outline-none font-[15px] h-[48px] cursor-pointer text-white"
          >
            {loginType ? "Login" : "Sign Up"}
          </button>

          {loginType ? (
            <p className="text-center text-base mt-[50%] cursor-pointer text-[#2874f0]" onClick={() => {setLoginType(false); setError("");}}>
              New to Flipkart? Create an account
            </p>
          ) : (
            <p className="text-center text-base mt-[50%] cursor-pointer text-[#2874f0]" onClick={() => {setLoginType(true);setError("");}}>
              Already a user? Login to account
            </p>
          )}
        </div>

        {/* Close Button */}
        <div
          className="absolute top-2 right-2 text-xl cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <RxCross2 />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Loginmodel;






  // const signup = async() => {
  //   console.log('signing')
  //   const {data, error} =await supabase.auth.signUp({
  //     email,
  //     password,
  //   })
  //   console.log(data,error)
  // }

  // const login = async() => { 
  //   console.log("calling")
  //   const {data,error} = await supabase.auth.signInWithPassword({
  //     email,
  //     password,
  //   })
  //   console.log(data,error)
  // }
  

//   return (
//     isOpen ? (
//       <div className='fixed inset-0 bg-black/50 w-full h-screen z-50'>        
//         <div className='relative flex h-[500px] w-[700px] bg-white shadow-lg rounded-lg overflow-hidden translate-x-1/2 translate-y-1/4 '>

//           <div className='w-[40%] bg-[#2874f0] h-full text-white px-[30px] py-4'>
//             <div className='bg-[url("https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png")] bg-no-repeat bg-[center_85%] h-full'>
//               <p className='text-3xl py-5'>Login</p>
//               <p className='text-lg font-light text-gray-300'> Get access to your Orders, Wishlist and Recommendations </p>
//             </div>
//           </div>
          
//           <div className='h-full w-[60%] py-[50px] px-[25px]'>
//             <input 
//             type="email"
//             className='w-[95%] outline-none border-b border-gray-400 text-[15px] p-[5px] font-medium h-[30px] mt-[10px] bg-transparent'
//             placeholder='Email'
//             required value={email}
//             onChange={(e)=> setEmail(e.target.value)}
//              /> 
//               <input 
//              type="password"
//              className='w-[95%] outline-none border-b border-gray-400 text-[15px] p-[5px] font-medium h-[30px] mt-[10px] bg-transparent'
//              placeholder='Enter Password'
//              required value={password}
//              onChange={(e)=> setPassword(e.target.value)} 
//              />
//              <p className='py-[20px] px-0 text-xs text-black/50 font-light'>
//               By continuing you agree to Flipkart's{" "}
//               <span className='text-blue-600 cursor-pointer'>Terms of Use</span> and 
//               <span className='text-blue-600 cursor-pointer'>{" "}Privacy Policy</span>
//              </p>
//              {/* "bg-orange-400 w-full mt-2 border-none outline-none font-[15px] h-[48px] cursor-pointer text-white */}
//              {
//               loginType? (
//                 <button className='bg-orange-400 w-full mt-10px border-none outline-none font-[15px] h-[48px] cursor-pointer text-white' >
//                   Login</button>
//               ):(
//                 <button className='bg-orange-400 w-full mt-10px border-none outline-none font-[15px] h-[48px] cursor-pointer text-white' >
//                   SignUp</button>
//               )
//              }
//              {
//               loginType? (
//                 <p className="text-center text-base mt-[50%] cursor-pointer text-[#2874f0]" onClick={() => setLoginType(false)}>New to Flipcart? Create an account</p>
//               ):(
//                 <p className='text-center text-base mt-[50%] cursor-pointer text-[#2874f0]' onClick={() => setLoginType(true)}>Already an user? Login to account</p>
//               )
//              }
//           </div>

//           <div className='absolute top-2 right-2 text-xl cursor-pointer' onClick={() => setIsOpen(false)} >
//             <RxCross2 />
//           </div>

//         </div>
//       </div>
//     ) : (<></>)
//   )
// }

// export default Loginmodel
