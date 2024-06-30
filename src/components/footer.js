import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const INS_LINK = 'https://www.instagram.com/liug0717/';
const FACEBOOK_LINK = 'https://www.facebook.com/profile.php?id=100086983323031&mibextid=LQQJ4d';

function Footer()
{
    return (
        <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'
            bottom='0' paddingTop='0.5rem' paddingBottom='1rem'>
            <Typography variant='body2' paddingLeft='2rem' fontFamily='Arapey' fontSize='1rem'>
                Copyright © 2024 Guo (Jason) Liu
            </Typography>
            <Box paddingRight='1rem'>
                <IconButton component='a' href={FACEBOOK_LINK} target='_blank'
                    aria-label='Facebook' color='primary'>
                    <FacebookIcon sx={{ color: 'black' }}/>
                </IconButton>
                <IconButton component='a' href={INS_LINK} target='_blank'
                    aria-label='Instagram' color='primary'>
                    <InstagramIcon sx={{ color: 'black' }}/>
                </IconButton>
            </Box>
        </Box>
    );
}

export default Footer;
