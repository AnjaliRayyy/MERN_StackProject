import React from 'react'
import { useState } from 'react'
import ContactImage from '../assets/ContactPage_img.png'


function Contact() {
  const [user,setUser]=useState({
    username : "",
    email : "",
    message : ""
  })
  
  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(user);
  }
  return (
    <div className='h-[36rem] text-slate-50 flex justify-evenly items-center bg-slate-950'>
        <div  className="w-[30%] flex-col justify-around items-center">
            <h1 className='text-4xl text-slate-50'>Contact Us</h1>
            <div className='h-[4px] w-40 rounded-md bg-violet-600 z-10 mb-10'></div>
              <img   src={ContactImage} alt="error" />
        </div>

        <div className=''>     
           <form className="space-y-4 " onSubmit={handleSubmit}>

              {/* <!-- Username --> */}
              <div>
                  <label className="mb-2 block text-slate-50 ">Username</label>
                  <input type="text" placeholder=""
                    className="w-80 h-10 p-3 border border-gray-300 rounded-sm bg-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500" name='username' id='username' value={user.username} onChange={handleChange} required/>
                </div>

              {/* <!-- Email --> */}
              <div>
                <label className="mb-2 block text-slate-50 ">Email</label>
                <input type="email" placeholder=""
                  className="w-80 h-10 p-3 border border-gray-300 rounded-sm bg-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500" name='email' id='email' value={user.email} onChange={handleChange} required/>
              </div>

            {/* <!-------Message--------> */}
            <div>
              <label htmlFor="" className='mb-2 block text-slate-50'>Message</label>
              <textarea  className="w-80 h-50 p-3 border border-gray-300 rounded-sm bg-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500" name="message" id="message" value={user.message} onChange={handleChange} required></textarea>
            </div>

              {/* <!-- Register Button --> */}
              <button type="submit"
                className="w-40 bg-violet-600 text-white font-semibold py-2 mt-10 rounded-lg hover:bg-violet-700 transition duration-300 cursor-pointer">
                Submit
              </button>
          </form>
        </div>
  </div>
  )
}

export default Contact
