import React from 'react';
import { FaPlay } from 'react-icons/fa';
import img from '../../assets/images/img.avif'
const Hero = () => {
    return (
        <>
        <section>
         
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[650px]'>
               {/* Brand info */}
               <div className='flex flex-col justify-center py-10 md:py-0 font-playfair'>
               <div className='text-center items-center md:text-left space-x-6'>

               <h1 className='text-5xl mx-auto font-bold'>Gym Gives you the perfact <span className='text-primary'>Health</span> </h1>
                <p className='text-gray-600 text-2xl py-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>

                {/* btn section */}
                <div className='flex justify-center gap-8 md:justify-start'>
                    <button className='primary-btn flex items-center gap-2 mt-4'>
                    {" "}
                    Order Now</button>
                    <button className='flex justify-center items-center gap-2 mt-4'>
                    <FaPlay />
                    Watch Now</button>
                </div>
               </div>

               </div>



            {/* images */}

                 <div className='flex justify-center items-center gap-10'>
                <img src={img} alt="" className='w-[350px] md:w-[550px] xl:w-[700px] drop-shadow' />
            </div>

            </div>
           
            
        </section>
            
        </>
    );
};

export default Hero;