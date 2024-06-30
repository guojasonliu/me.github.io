import React, { useEffect, useState, useContext } from 'react';
import AppBar from '../components/appbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Footer from '../components/footer';
import { SettingsContext } from '../settings';


const MY_EMAIL = 'guojasonliu@gmail.com';

function ContactPage()
{
    const settings = useContext(SettingsContext);

    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <AppBar barPosition='static' bgColorAtTop='white' colorAtTop='black' bgColorNotTop='white'
                colorNotTop='black' visibilityNotTop='hidden' />
            <Box display='flex' justifyContent='space-between' alignItems='center' width='100%' padding='2rem'>
                <Box flex={1} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                    <Typography variant='h3' align='center' padding='2rem' sx={{ fontWeight: 'bold' }}>
                        Contact
                    </Typography>
                    <Button variant='outlined' onClick={() => window.location.href = `mailto:${MY_EMAIL}`}
                        sx={{ color: 'black', borderColor: 'black', textTransform: 'none', fontSize: 'h6.fontSize',
                        margin: '1rem', padding: '0.75rem 2rem', }}>
                        Email
                    </Button>
                </Box>
                <Box flex={1}>
                    <Typography variant='h6' align='center'>
                        EMAIL ADDRESS
                    </Typography>
                    <Typography variant='h5' align='center' sx={{ fontWeight: 'bold' }}>
                        {MY_EMAIL}
                    </Typography>
                </Box>
            </Box>
            <Box flex={1}>
                <img src={settings.contactImage} alt='' style={{ width: '100%' }} />
            </Box>
            <Footer />
        </Box>
    );
}

export default ContactPage;