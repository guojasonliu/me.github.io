import React, { useContext } from 'react';
import AppBar from '../components/appbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Footer from '../components/footer';
import { SettingsContext } from '../settings';


function AboutPage()
{
    const settings = useContext(SettingsContext);

    return (
        <Box display='flex' flexDirection='column' minHeight='100vh'>
            <AppBar barPosition='static' bgColorAtTop='white' colorAtTop='black' bgColorNotTop='white'
                colorNotTop='black' visibilityNotTop='hidden' visibilityNameLogoAtTop='hidden' />
            <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'
                flexDirection={settings.isMobile ? 'column' : 'row'}>
                <Box flex={1}  padding='2rem'>
                    <img src={settings.aboutImage} alt='' style={{ width: '100%' }} onContextMenu={(e) => e.preventDefault()} />
                </Box>
                <Box flex={1} alignItems='flex-start'>
                    <Typography variant='h4' paddingBottom='1rem' fontFamily='Arapey' align='center'>
                        About Jason
                    </Typography>
                    <Typography variant='body1' style={{ whiteSpace: 'pre-line', lineHeight: '1.5rem' }}
                        fontFamily='Garamond' align='center'>
                        {settings.aboutText}
                    </Typography>
                </Box>
            </Box>
            <Box flexGrow={1} flex={1} />
            <Footer />
        </Box>
    );
}

export default AboutPage;