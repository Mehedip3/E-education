import React from 'react';

import Navber from '../Nav/Navber';
import Home from '../Home/Home';
import About from '../About/About';
import { Route, Routes } from 'react-router';
import Hero from '../Hero/Hero';
import Equipments from '../Equipments/Equipments';
import Contact from '../Contact';
import Banner from '../Banner/Banner';
import Tab from '../Tab/Tab';



const Main = () => {
    return (


    

        
    //     {/* <Route path='/' element={ <Layout /> } />
    //     <Route index element ={ <Home />} /> */}


    <div className='overflow-x-hidden'>
            <Navber />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/hero" element={<Hero />} />
                <Route path='/equipments' element={<Equipments />} />
                <Route path='/banner' element={<Banner />} />
                <Route path='/tab' element={<Tab />} />
            </Routes>
        </div>




    ); 
};

export default Main;