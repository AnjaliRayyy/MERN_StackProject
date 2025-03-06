import React from 'react'
import AboutImage from '../assets/AboutPage_img.png'
import { Link } from 'react-router-dom'

function About() {
  return (
      <div className='h-auto p-10 bg-slate-950'>

            {/* ----------------------Hero Section--------------------------- */}
            <section className="herosection flex justify-around items-center">

                  {/* ---------------------------------Text Section------------------------ */}
                      <div className='herosection-text flex-col justify-around items-center' >
                          <h3 className='text-slate-400'>Welcome, user</h3>
                          <h1 className='text-slate-50 text-4xl font-bold my-4'>Why Choose Us?</h1>

                          <p className=' text-slate-100 my-4'>Expertise : Our team consists of experienced IT professionals who are <br /> passionate about staying up-to-date with the latest technologies and trends.</p>

                          <p className=' text-slate-100 my-4'>Customization : We understand that every business is unique. That's why <br />we create solutions that are tailored to uour specific needs and goals.</p>

                          <p className=' text-slate-100 my-4'>Customer-Centric Approach : We prioritize your satisfaction and provide <br /> top-notch support to address your IT concerns.</p>

                          <p className=' text-slate-100 my-4'></p>
                          <p className=' text-slate-100 my-4'>Affordability : We offer competitive pricing without compromising on the <br />quality of our services.</p>
                          
                          <p className=' text-slate-100 my-4'>Reliability : Count on us to be there when you need us. We;re commited <br />to ensuring your IT environment is realiable and available 24/7.</p>
                          
                          {/* ----------------------Buttons-------------------------- */}
                              <div className='w-[50%] flex justify-between items-center mt-10'>
                                <Link to="/contact"><button className='bg-violet-500 text-slate-50 font-semibold rounded-md hover:bg-violet-600 p-2 px-4'>Connect Now</button></Link>
                                <Link to="/about"><button className='bg-slate-950 border border-violet-600 text-slate-50 font-semibold rounded-md hover:bg-violet-600 p-2 px-4'>Learn More</button></Link>
                              </div>


                      </div>
                  {/* -------------------------------End of Text Section------------------------------- */}

                  {/* ---------------------------------Image Section------------------------ */}
                      <div className='w-[35%]' ><img src={AboutImage} alt="error" /></div>
                  {/* -------------------------End of Image Section---------------------------------     */}
            </section>
            {/* --------------------------------End of Hero Section---------------------------------- */}

            {/* ---------------------------------Analytics Section--------------------------------- */}
                  <section className="analytics my-10">
                    <div className="mx-22 bg-slate-100 flex justify-evenly items-center rounded-md">
                      <div className='my-5 px-6 border-r-3 border-gray-500'>
                          <h1 className='text-slate-950 text-4xl font-bold text-center '>50+</h1>
                          <p className='text-slate-600'>Company Registers</p>
                      </div>
                      <div className='my-5 px-6 border-r-3 border-gray-500'>
                          <h1 className='text-slate-950 text-4xl font-bold text-center '>150+</h1>
                          <p className='text-slate-600'>Project Done</p>
                      </div>
                      <div className='my-5 px-6 border-r-3 border-gray-500'>
                          <h1 className='text-slate-950 text-4xl font-bold text-center '>250+</h1>
                          <p className='text-slate-600'>Happy Clients</p>
                      </div>
                      <div className='my-5 px-6 '>
                          <h1 className='text-slate-950 text-4xl font-bold text-center '>650K+</h1>
                          <p className='text-slate-600'>Youtube Subscribers</p>
                      </div>
                    </div>
                  </section>
              {/* ---------------------------End of Analytics Section------------------------------ */}
    </div>
  )
}

export default About
