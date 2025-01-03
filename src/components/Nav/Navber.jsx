import React from 'react';
import { CiSearch } from "react-icons/ci";
import { NavbarMenu } from '../mockData/Data';
import { PiShoppingCartThin } from 'react-icons/pi';
import { MdMenu } from 'react-icons/md';
import ResponsiveMenu from '../ResponsiveMenu';
import { FaBookOpen } from 'react-icons/fa';

const Navber = () => {
    const [ open, setOpen ] = React.useState(false);
    return (

        <>
        <nav>
        
 
        
        <div className='container mx-auto flex justify-between items-center py-8'>
          {/* logo section */}
          
          <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
          {/* logo */}
          <FaBookOpen />
        
          <p className='md:mx-5'>DO<span className='text-secondary'>NUM</span></p>

          </div>
       

     {/* Menu section */}
     
     <div className='hidden md:block'>

     {/* old navber */}

        {/* <ul className='flex items-center gap-6 text-gray-600 '>
        

        <Link className='inline-block py-1 px-3 hover:text-primary font-semibold' to="/">Home</Link>
       <Link className='inline-block py-1 px-3 hover:text-primary font-semibold' to="/about">About</Link>
        <Link className='inline-block py-1 px-3 hover:text-primary font-semibold' to="/contact">Conatct </Link>

        </ul> */}

        {/* ---- new navbar */}

        <ul className='flex items-center gap-6 text-gray-600'>
            {NavbarMenu.map((item) => {
                return(
                    <li key={item.id}>
                    <a href={item.link} className='inline-block py-1 px-3 hover:text-primary font-semibold'>{item.title}</a>
                    </li>
                );
            })}
        </ul>


     </div>
      
      {/* Icon section */}

     <div className='flex items-center gap-4'>
        <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
        <CiSearch />
        </button>

        <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
        <PiShoppingCartThin />
        </button> 

            {/* btn */}

            <button className='hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block'>Login</button>

     </div>


      {/* Mobile ber section */}

      <div className='md:hidden' onClick={() =>
      setOpen(!open)}>
        <MdMenu className='text-4xl'/>
      </div>

        </div>
        </nav>
           {/* mobile side ber section */}
            
            <ResponsiveMenu open={open} />

        </>

    );
};

export default Navber; 