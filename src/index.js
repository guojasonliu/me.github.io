import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Carousel from './components/carousel';
import AppBar from './components/appbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const headerImages = [
    "/images/1.jpg",
    "/images/2.jpg",
    // "/images/3.jpg"
];

const menuLinks = [
    {label: 'About', link: '', onClick: () =>
    {
        var about = document.getElementById('about');
        if (about != null)
            about.scrollIntoView({behavior:"smooth", block: "start", inline: "nearest"});
    }},
    {label: 'Contact Me', link: '', onClick: () => {  }}
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppBar menuLinks={menuLinks} />
    <header className='container'>
                <Box className='half-darkened'>
                    <Carousel images={headerImages} showStepper={false} interval={5000} />
                </Box>
                <Box className='centered'>
                    <Typography color='white' variant='h1' fontFamily='Playfair Display'>
                        Chanel Zong
                    </Typography>
                    <Typography color='white' variant='h4'>
                        Some description over here
                    </Typography>
                </Box>
            </header>
            <section id='home-contact-us'>
                <Typography variant='h2' fontFamily='Arapey' marginBottom='1rem'>
                    Contact Me
                </Typography>
                <Typography className='fifty-centered-text' variant='h6' fontFamily='Cormorant Garamond' marginBottom='3rem'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perferendis corrupti ipsum eaque voluptatem! Praesentium placeat, veritatis sint quam odio molestias dolore, fugit blanditiis repudiandae, voluptatum laboriosam minima. Nam, totam!
                </Typography>
                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1rem'}}>
                    <Button id='color-button' variant='outlined'>
                    <Typography id='color-button-text' variant='h6'>
                        Contact Me
                    </Typography>
                </Button>
                </Box>
            </section>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
