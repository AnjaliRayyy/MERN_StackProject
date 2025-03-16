import React from 'react'
import { useAuth } from '../store/auth'
import ServicesPage_img from '../assets/ServicesPage_img.png'
export default function Services() {
const {services}=useAuth();
  return (
    <div className='px-60 bg-slate-950 p-8'>
      <h1 className='text-4xl text-slate-50'>Our Services</h1>
      <div className='h-[4px] w-40 rounded-md bg-violet-600 z-10 mb-10'></div>
      <div className='container grid grid-cols-3'>
      {services.map((currentValue, index)=>{
        const {service,description,price,provider}=currentValue;

        return(
          <div className='my-4 relative p-4 w-80 h-[28rem] bg-slate-950 text-slate-50 rounded-md hover:scale-105 transition-transform duration-300'>
            <div className='h-[26rem] p-4 ring-2 ring-purple-500 rounded-md border border-slate-50 flex flex-col space-y-4'>
              <div className='flex justify-center'>
                <img className='w-[90%] h-48 object-cover rounded-lg' src={ServicesPage_img} alt="service" />
              </div>
              <div className="provider-price flex justify-between items-center text-sm">
                <div className="provider text-slate-300">{provider}</div>
                <div className="price text-slate-300">${price}</div>
              </div>
              <div className="service font-bold text-2xl line-clamp-2"><h1>{service}</h1></div>
              <div className="description text-slate-300 line-clamp-4 flex-grow">{description}</div>
              
            </div>
          </div>
        )     
      })
      }
      </div>
      
    </div>
  )
}
