import React from 'react';
import Hero from '../Hero/Hero';
import { Outlet } from 'react-router';
import Equipments from '../Equipments/Equipments';
import Banner from '../Banner/Banner';
import Tab from '../Tab/Tab';




const Home = () => {
    return (
    
     
    

          <>
          <Hero />
          <Outlet /> {/* This renders nested routes if any */}
          <Equipments />
          <Banner />
          <Tab />

      
      </>

        
    );
};

export default Home;