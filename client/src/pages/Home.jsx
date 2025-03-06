import React from 'react'
import HeroSectionImage from '../assets/HeroSection_img.png'
import HomeSectionImage from '../assets/HomeCenter_img.webp'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='h-auto -mb-10 bg-slate-950'>

      {/* ----------------------Hero Section--------------------------- */}
      <section className="herosection flex justify-around items-center">

            {/* ---------------------------------Text Section------------------------ */}
                <div className='herosection-text flex-col justify-around items-center' >
                    <h3 className='text-slate-400'>We are the World's Best IT Company</h3>
                    <h1 className='text-slate-50 text-4xl font-semibold my-4'>Welcome to Ray Technical</h1>
                    <p className='herosection-img text-slate-300 my-4'>Are you ready to take your bussiness to the next level with cutting-edge <br /> IT solutions? Look no further! At Ray Technical, we specialize in <br />providing innovative IT services and solutions tailored to meet your unique needs.</p>
                    
                    {/* ----------------------Buttons-------------------------- */}
                        <div className='w-[50%] flex justify-between items-center'>
                          <Link to="/contact"><button className='bg-violet-500 text-slate-50 font-semibold rounded-md hover:bg-violet-600 p-2 px-4'>Connect Now</button></Link>
                          <Link to="/about"><button className='bg-slate-950 border border-violet-600 text-slate-50 font-semibold rounded-md hover:bg-violet-600 p-2 px-4'>Learn More</button></Link>
                        </div>


                </div>
            {/* -------------------------------End of Text Section------------------------------- */}

            {/* ---------------------------------Image Section------------------------ */}
                <div className='w-[35%]' ><img src={HeroSectionImage} alt="error" /></div>
            {/* -------------------------End of Image Section---------------------------------     */}
      </section>
    {/* --------------------------------End of Hero Section---------------------------------- */}

{/* ---------------------------------Analytics Section--------------------------------- */}
    <section className="analytics my-10">
      <div className="mx-22 bg-slate-100 flex justify-evenly items-center rounded-md">
        <div className='my-5 px-6 border-r-3 border-gray-500'>
            <h1 className='text-slate-950 text-4xl font-bold text-center '>50+</h1>
            <p className='text-slate-600'>Registered Companies</p>
        </div>
        <div className='my-5 px-6 border-r-3 border-gray-500'>
            <h1 className='text-slate-950 text-4xl font-bold text-center '>10,000+</h1>
            <p className='text-slate-600'>Happy Clients</p>
        </div>
        <div className='my-5 px-6 border-r-3 border-gray-500'>
            <h1 className='text-slate-950 text-4xl font-bold text-center '>500+</h1>
            <p className='text-slate-600'>Well Known Developers</p>
        </div>
        <div className='my-5 px-6 '>
            <h1 className='text-slate-950 text-4xl font-bold text-center '>24/7</h1>
            <p className='text-slate-600'>Services</p>
        </div>
      </div>
    </section>
{/* ---------------------------End of Analytics Section------------------------------ */}


{/* ----------------------------- Third Section of Home Page------------------------ */}
    <section className='flex justify-evenly items-center my-10'>
      <div><img src={HomeSectionImage} alt="error" /></div>
      <div>
         {/* ---------------------------------Text Section------------------------ */}
         <div className='herosection-text flex-col justify-around items-center' >
                    <h3 className='text-slate-400'>We are here to help you</h3>
                    <h1 className='text-slate-50 text-4xl font-semibold my-4'>Get Started Today</h1>
                    <p className='herosection-img text-slate-300 my-4'>Ready to take the first step towards a more efficient and secure IT <br /> infrastructure? Contact us today for a free consultation and let's discuss <br /> how Ray Technical can help your business thrive in the digital age.</p>
                    
                    {/* ----------------------Buttons-------------------------- */}
                        <div className='w-[60%] flex justify-between items-center'>
                          <Link to="/contact"><button className='bg-violet-500 text-slate-50 font-semibold rounded-md hover:bg-violet-600 p-2 px-4'>Connect Now</button></Link>
                          <Link to="/about"><button className='bg-slate-950 border border-violet-600 text-slate-50 font-semibold rounded-md hover:bg-violet-600 p-2 px-4'>Learn More</button></Link>
                        </div>


                </div>
            {/* -------------------------------End of Text Section------------------------------- */}
      </div>
    </section>
 {/* ----------------------------- End of Third Section of Home Page------------------------ */}   
    </div>
  )
}
