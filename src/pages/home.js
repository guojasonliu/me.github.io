import React, { useEffect, useState, useContext } from 'react';
import Carousel from '../components/carousel';
import AppBar from '../components/appbar';
import HomeFeaturedAlbums from '../components/home-featured-albums';
import Box from '@mui/material/Box';
import Footer from '../components/footer';
import { SettingsContext } from '../settings';


function HomePage()
{
    const settings = useContext(SettingsContext);
    
    return (
        <div>
            <AppBar />
            <header className='container'>
                <Box style={{ filter: 'brightness(80%)' }}>
                    <Carousel images={settings.homeBackgroundImages} showStepper={true} interval={5000} />
                </Box>
            </header>
            <section id='featured-albums'>
                <HomeFeaturedAlbums />
            </section>
            <Footer />
        </div>
    );
  };
  
export default HomePage;