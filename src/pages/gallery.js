import * as React from 'react';
import { useContext } from 'react';
import AppBar from '../components/appbar';
import { Grid, Box } from '@mui/material';
import ImageButton from '../components/image-button';
import Footer from '../components/footer';
import { SettingsContext } from '../settings';
import { useNavigate } from 'react-router-dom';


const ALBUM_HEIGHT = '25rem';

function GalleryPage()
{
    const settings = useContext(SettingsContext);
    const navigate = useNavigate();

    let gallery = [];
    gallery.push(
        <Grid container spacing={2} key='grid'>
            {settings.gallery.map(({ albumKey, lineHeight, disabled }) => (
                disabled ? <div key={albumKey} /> : 
                <Grid item xs={12} sm={6} md={4} lg={3} key={albumKey}>
                    <ImageButton key={albumKey} image={settings.albums[albumKey].image} text={settings.albums[albumKey].albumName}
                        textBoxP='2rem' imageHeight={ALBUM_HEIGHT} fontFamily='Arapey' fontSize='3rem'
                        fontWeight='regular' onClick={() => navigate('/' + albumKey)} lineHeight={lineHeight} />
                </Grid>
            ))}
        </Grid>
    );

    return (
        <Box display='flex' flexDirection='column' minHeight='100vh'>
            <AppBar barPosition='static' bgColorAtTop='white' colorAtTop='black' bgColorNotTop='white'
                colorNotTop='black' visibilityNotTop='hidden' visibilityNameLogoAtTop='hidden' />
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'
                padding='2rem' paddingLeft='3rem' paddingRight='3rem' flexGrow={1}>
                {gallery}
            </Box>
            <Footer />
        </Box>
    );
}

export default GalleryPage;