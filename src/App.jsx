import React from 'react';
import Navber from './components/Nav/Navber';
import Hero from './components/Hero/Hero';
import { Outlet } from 'react-router';

const App = () => {
    return (
        <div className='overflow-x-hidden'>
            <Navber />
            <Outlet />
        </div>
    );
};

export default App;