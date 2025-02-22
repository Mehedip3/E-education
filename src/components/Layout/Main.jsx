import React from 'react';
import Navber from './../Nav/Navber';
import { Outlet } from 'react-router';

const Main = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
        </div>
    );
};

export default Main;