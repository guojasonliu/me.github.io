import React, { useContext, useMemo } from 'react';
import Carousel from '../components/carousel';
import AppBar from '../components/appbar';
import HomeFeaturedAlbums from '../components/home-featured-albums';
import Box from '@mui/material/Box';
import Footer from '../components/footer';
import { SettingsContext } from '../settings';


function shuffleArray(array)
{
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--)
        {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function HomePage()
{
    const settings = useContext(SettingsContext);
    const shuffledImages = useMemo(() => shuffleArray(settings.homeBackgroundImages), [settings.homeBackgroundImages]);
    
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <AppBar />
            <Box style={{ filter: 'brightness(80%)' }}>
                <Carousel images={shuffledImages} showStepper={true} interval={5000} />
            </Box>
            <HomeFeaturedAlbums />
            <Footer />
        </Box>
    );
  };
  
export default HomePage;