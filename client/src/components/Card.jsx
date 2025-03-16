import React from 'react'
import LoginPage_img from '../assets/LoginPage_img.png'
export default function Card() {
  return (
    <div className='p-4 w-80 h-[28rem] bg-slate-900 text-slate-50 rounded-md'>
      <div className='h-[26rem] p-4 ring-2 ring-purple-500 rounded-md border border-slate-50 flex-col justify-center items-center'>
        <div className='flex justify-between'><img className='w-[90%]' src={LoginPage_img} alt="error" /></div>
        <div className="mt-2 provider-price flex justify-between items-center text-sm">
            <div className="provider text-slate-300">Tech Solutions inc.</div>
            <div className="price text-slate-300">$1.500-$7.000</div>
        </div>
        <div className="mt-2 service font-bold text-2xl"><h1>Web Development</h1></div>
        <div className="mt-4 description text-slate-300">Crafting tailor-made websites and web appications</div>
      </div>
    </div>
  )
}
