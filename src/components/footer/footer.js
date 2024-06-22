import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer()
{
    return (
        <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'
            bottom='0' paddingTop='0.5rem' paddingBottom='1rem'>
            <Typography variant='body2' paddingLeft='2rem'>
                Copyright © 2024 Guo (Jason) Liu
            </Typography>
            <Box paddingRight='1rem'>
                <IconButton component='a' href='https://www.facebook.com/your-profile' target='_blank'
                    aria-label='Facebook' color='primary'>
                    <FacebookIcon sx={{ color: 'black' }}/>
                </IconButton>
                <IconButton component='a' href='https://www.instagram.com/your-profile' target='_blank'
                    aria-label='Instagram' color='primary'>
                    <InstagramIcon sx={{ color: 'black' }}/>
                </IconButton>
            </Box>
        </Box>
    );
}

export default Footer;
