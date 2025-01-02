import React from 'react';
import { Link } from 'react-router';
import { CiSearch } from "react-icons/ci";

const Navber = () => {
    return (

        <>
        <nav>
        
 
        
        <div className='container flex justify-between items-center py-8'>
          {/* logo section */}
          
          <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
          {/* logo */}
          <p>Mehdi</p>
          <p className='text-secondary'>Edu</p>

          </div>
       

     {/* Menu section */}
     
     <div className='hidden md:block'>

        <ul className='flex items-center gap-6 text-gray-600 '>
        

        <Link className='inline-block py-1 px-3 hover:text-primary font-semibold' to="/">Home</Link>
       <Link className='inline-block py-1 px-3 hover:text-primary font-semibold' to="/about">About</Link>
        <Link className='inline-block py-1 px-3 hover:text-primary font-semibold' to="/contact">Conatct </Link>

        </ul>


     </div>
      
      {/* Icon section */}

     <div>
        <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
        <CiSearch />
        </button>
     </div>


      {/* Mobile ber section */}

        </div>
  



    </nav>
           {/* mobile side ber section */}
            
        </>

    );
};

export default Navber;