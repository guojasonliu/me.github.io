import React, { useEffect, useState } from 'react';
import Carousel from '../../components/carousel/carousel';
import AppBar from '../../components/appbar/appbar';
import HomeFeaturedAlbum from '../../components/home-featured-album/home-featured-album';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './home.css';
import { Home } from '@mui/icons-material';


const APP_BAR_TABS_RIGHT = [
    { label: 'About', type: 'link', link: '' },
    { label: 'Portofolio', type: 'dropdown' },
    { label: 'Gallery', type: 'link', link: '' },
    { label: 'Contact', type: 'link', link: '' }
];

function HomePage()
{
    const [imageMappings, setImageMappings] = useState({ 'homeBackgroundImages': [] });
    useEffect(() =>
    {
        fetch('image-mapping.json')
            .then(response => response.json())
            .then(data => setImageMappings(data))
            .catch(error => console.error('Error loading JSON:', error));
    }, []);

    return (
        <div>
            <AppBar tabsRight={APP_BAR_TABS_RIGHT} />
            <header className='container'>
                <Box id='darkened-background'>
                    <Carousel images={imageMappings.homeBackgroundImages} showStepper={true} interval={5000} />
                </Box>
            </header>
            <section id='featured-albums'>
                <HomeFeaturedAlbum />
            </section>
        </div>
    );
  };
  
  export default HomePage;