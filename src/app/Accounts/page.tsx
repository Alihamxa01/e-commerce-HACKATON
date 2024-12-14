import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
    <div>
<div className="bg-[#F6F5FF] max-w-screen-2xl h-[286px]  justify-start items-center flex ">
<h1 className="text-4xl text-[#101750] font-extrabold justify-start items-center flex ml-5 sm:ml-32 ">About Us</h1>
<br/>
<div>
<p className="text-gray-600">
              Home &gt; Pages &gt; <span className="text-blue-600">Contact Us</span>
            </p>
            </div>
</div>




    <div className="flex items-center justify-center h-screen flex-col">
        
      <div className="bg-white shadow-xl w-[400px] sm:w-[544px] h-[450px] sm:h-[474px] flex flex-col border p-7 mt-10 mb-10">
        {/* Login Heading */}
        <h1 className="text-3xl font-black text-center pb-2">Login</h1>
        <p className="text-[#9096B2] text-[17px] text-center mb-10">Please login using account detail bellow.</p>
     
      <div className="space-y-5 flex flex-col"> 
    <input 
    type="text"
    placeholder="Email Address"
    className="text-[#9096B2] text-base border rounded-sm outline-none h-[52px] p-2 "
    >
    </input>

    <input 
    type="password"
    placeholder="Password"
    className="text-[#9096B2] text-base border rounded-sm outline-none h-[52px] p-2 "
    
    >
    </input>
    {/* forgot password */}
    <a href="#" className="text-[17px] text-[#9096B2] hover:underline  ">Forgot your password?</a>
    
    </div>
    <br/>
    <button className="bg-[#FB2E86] hover:bg-[#FB2E90] text-white font-bold h-[47px]">
        Sign Up
    </button>

    <p className="text-[#9096B2] text-[17px] text-center mt-6">Don’t have an Account? <a href="#" className=" hover:underline ">Create account</a></p>

      </div>

<div className="">
<Image
src="/27.png"
width={904}
height={93}
alt="images"

/>
</div>


    </div>
    </div>
  );
}
