import React from 'react'
import { useState } from 'react'
import ContactImage from '../assets/ContactPage_img.png'
import { useAuth } from '../store/auth'

function Contact() {
  const [contact,setContact]=useState({
    username : "",
    email : "",
    message : ""
  })
  const [userData,setUserData]=useState(true);
  const {user}=useAuth();

  if(userData && user){
    setContact({
      username : user.username,
      email : user.email,
      message : "",
    }); 
    setUserData(false);
    }

  const handleChange=(e)=>{
    setContact({...user,[e.target.name]:e.target.value})
  }
  
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      const response= await fetch ("http://localhost:5000/api/form/contact",{
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
        },
        body : JSON.stringify(contact),
      });
      if(response.ok){
        alert("Message was sent successfully!");
        setContact({...contact,message:""})
      }
    }
    catch(err){
      alert("Failed to send message");
      console.log("Error : ",err);
    }
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
                    className="w-80 h-10 p-3 border border-gray-300 rounded-sm bg-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500" name='username' id='username' value={contact.username} onChange={handleChange} required/>
                </div>

              {/* <!-- Email --> */}
              <div>
                <label className="mb-2 block text-slate-50 ">Email</label>
                <input type="email" placeholder=""
                  className="w-80 h-10 p-3 border border-gray-300 rounded-sm bg-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500" name='email' id='email' value={contact.email} onChange={handleChange} required/>
              </div>

            {/* <!-------Message--------> */}
            <div>
              <label htmlFor="" className='mb-2 block text-slate-50'>Message</label>
              <textarea  className="w-80 h-50 p-3 border border-gray-300 rounded-sm bg-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500" name="message" id="message" value={contact.message} onChange={handleChange} required></textarea>
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
