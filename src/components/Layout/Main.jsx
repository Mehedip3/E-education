import React from 'react';

import Navber from '../Nav/Navber';
import Home from '../Home/Home';
import About from '../About/About';
import { Route, Routes } from 'react-router';
import Contact from '../Contact';

const Main = () => {
    return (
        <div>
        <Navber />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
    </div>
    );
};

export default Main;