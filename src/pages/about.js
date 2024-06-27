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
        <div>
            <AppBar barPosition='static' bgColorAtTop='white' colorAtTop='black' bgColorNotTop='white'
                colorNotTop='black' visibilityNotTop='hidden' />
            <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'>
                <Box flex={1}>
                    <img src={settings.aboutImage} alt='' style={{ width: '100%' }} />
                </Box>
                <Box flex={1} paddingLeft='2rem'>
                    <Typography variant='h4' paddingBottom='1rem'>
                        About Jason
                    </Typography>
                    <Typography variant='body1' style={{ whiteSpace: 'pre-line', lineHeight: '2rem' }}>
                        {settings.aboutText}
                    </Typography>
                </Box>
            </Box>
            <Footer />
        </div>
    );
}

export default AboutPage;