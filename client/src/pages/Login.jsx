import React from 'react'
import { useState } from 'react'
import LoginImage from "../assets/LoginPage_img.png"; 
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

function Login() {
  const [user, setUser] = useState({
      email : "",
      password : "",
  })

const navigate = useNavigate();
const {storeTokenInLs}=useAuth();

  const handleChange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setUser({
      ...user,
      [name]:value,
    });
  }

  const handleSubmit=async (e)=>{
    e.preventDefault();
    console.log(user);
    try{
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method : "POST",
        headers:{
          'Content-Type': 'application/json',
        },
        body : JSON.stringify(user),
      })

      if(response.ok){
        alert("Login Successful!")

        const res_data=await response.json();
        console.log("res from server", res_data)

        //stored the token in localhost
        storeTokenInLs(res_data.token);

        setUser({
          email : "",
          password : "",
        })
        navigate("/");
      }
      else
      alert("Invalid Credentials")
      console.log(response)
    }
    catch(err){
      console.log("login",err)
    }
  }
  return (
     <div className='h-[36rem] text-slate-50 flex justify-evenly items-center bg-slate-950'>
          <div  className="w-[35%]">
            <img   src={LoginImage} alt="error" />
          </div>
          <div className='flex-col justify-center items-center'>
            <h1 className='text-4xl text-slate-50'>Login Form</h1>
            <div className='h-[4px] w-40 rounded-md bg-violet-600 z-10 mb-10'></div>
            <form className="space-y-4 " onSubmit={handleSubmit}>
          
    
          {/* <!-- Email --> */}
          <div>
            <label className="mb-2 block text-slate-50 ">Email</label>
            <input type="email" placeholder=""
              className="w-80 h-10 p-3 border border-gray-300 rounded-sm bg-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500" name='email' id='email' value={user.email} onChange={handleChange} required/>
          </div>
    
    
          {/* <!-- Password --> */}
          <div>
            <label className="mb-2 block text-slate-50 ">Password</label>
            <input type="password" placeholder=""
              className="w-80 h-10 p-3 border border-gray-300 rounded-sm bg-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500" name='password' id='password' value={user.password} onChange={handleChange} required/>
          </div>
    
         
          {/* <!-- Register Button --> */}
          <button type="submit"
            className="w-40 bg-violet-600 text-white font-semibold py-2 mt-10 rounded-lg hover:bg-violet-700 transition duration-300 cursor-pointer">
            Login Now
          </button>
        </form>
          </div>
        </div>
  )
}

export default Login
