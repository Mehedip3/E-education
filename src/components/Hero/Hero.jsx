import React from 'react';

const Hero = () => {
    return (
        <>
        <section>
         
            <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] px-10'>
               {/* Brand info */}
               <div className='flex flex-col justify-center py-10 md:py-0'>
               <div className='text-center items-center md:text-left space-x-6'>

               <h1 className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal'>Gym Gives you the perfact <span className='text-primary'>Health</span> </h1>
                <p className='text-gray-600 xl:max-w-[500px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>


               </div>
               
               </div>


            </div>
            {/* images */}
        </section>
            
        </>
    );
};

export default Hero;