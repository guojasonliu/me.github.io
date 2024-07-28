import React, { useContext } from 'react';
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
                colorNotTop='black' visibilityNotTop='hidden' visibilityNameLogoAtTop='hidden' />
            <Box display='flex' justifyContent='space-between' alignItems='center' padding='2rem'
                flexDirection={settings.isMobile ? 'column' : 'row'}>
                <Box flex={1} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                    <Typography variant={settings.isMobile ? 'h4' : 'h3'} align='center' padding='2rem' sx={{ fontWeight: 'bold' }}>
                        Contact Me
                    </Typography>
                    <Button variant='outlined' onClick={() => window.location.href = `mailto:${MY_EMAIL}`}
                        sx={{ color: 'black', borderColor: 'black', textTransform: 'none', fontSize: 'h6.fontSize',
                        margin: '1rem', padding: '0.75rem 2rem', }}>
                        Email
                    </Button>
                </Box>
                <Box flex={1} paddingTop='1.5rem' paddingBottom='1.5rem'>
                    <Typography variant='h6' align='center'>
                        EMAIL ADDRESS
                    </Typography>
                    <Typography variant='h5' align='center' sx={{ fontWeight: 'bold' }}>
                        {MY_EMAIL}
                    </Typography>
                </Box>
            </Box>
            <Box flex={1} padding='2rem'>
                <Box position="relative">
                    <img src={settings.contactImage} alt='' style={{ maxWidth: '100%' }} onContextMenu={(e) => e.preventDefault()} />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0)' }} />
                </Box>
            </Box>
            <Footer />
        </Box>
    );
}

export default ContactPage;