import React from 'react';

import Navber from '../Nav/Navber';
import Home from '../Home/Home';
import About from '../About/About';
import { Route, Routes } from 'react-router';
import Contact from '../Contact';
import Hero from '../Hero/Hero';

const Main = () => {
    return (
        <div className='overflow-x-hidden'>
        <Navber />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/hero" element={<Hero /> } />
        </Routes>
    </div>
    );
};

export default Main;