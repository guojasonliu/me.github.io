import React, { useEffect, useState } from 'react';
import Carousel from '../../components/carousel/carousel';
import AppBar from '../../components/appbar/appbar';
import HomeFeaturedAlbum from '../../components/home-featured-album/home-featured-album';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './home.css';
import { Home } from '@mui/icons-material';
import Footer from '../../components/footer/footer';


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
            <AppBar />
            <header className='container'>
                <Box id='darkened-background'>
                    <Carousel images={imageMappings.homeBackgroundImages} showStepper={true} interval={5000} />
                </Box>
            </header>
            <section id='featured-albums'>
                <HomeFeaturedAlbum images={featured}/>
            </section>
            <Footer />
        </div>
    );
  };
  
export default HomePage;



const featured = [
{
    image: 'https://t4.ftcdn.net/jpg/04/96/04/41/360_F_496044111_NtgcQqusPMz0AaxtBCDu5L8FifGQDkig.jpg',
    text: 'first thing',
}, 
{
    image: '/assets/images/IMG_3676.jpg',
    text: 'second thing',
}
];