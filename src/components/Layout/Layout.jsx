import React from 'react';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div>
          <h2>This is layout page</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;