import * as React from 'react';
import { useContext } from 'react';
import AppBar from '../components/appbar';
import { Grid, Box } from '@mui/material';
import ImageButton from '../components/image-button';
import Footer from '../components/footer';
import { SettingsContext } from '../settings';
import { useNavigate } from "react-router-dom";


const ALBUM_HEIGHT = '25rem';

function GalleryPage()
{
    const settings = useContext(SettingsContext);
    const navigate = useNavigate();

    let gallery = [];
    gallery.push(
        <Grid container spacing={2}>
            {settings.gallery.map(({ albumKey, textBoxP, fontFamily, fontSize, fontWeight, lineHeight, disabled }) => (
                disabled ? <div></div> : 
                <Grid item xs={12} sm={6} md={4} lg={3} key={albumKey}>
                    <ImageButton image={settings.albums[albumKey].image} text={settings.albums[albumKey].albumName}
                        textBoxP={textBoxP} imageHeight={ALBUM_HEIGHT} fontFamily={fontFamily} fontSize={fontSize}
                        fontWeight={fontWeight} onClick={() => navigate('/' + albumKey)} lineHeight={lineHeight} />
                </Grid>
            ))}
        </Grid>
    );

    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <AppBar barPosition='static' bgColorAtTop='white' colorAtTop='black' bgColorNotTop='white'
                colorNotTop='black' visibilityNotTop='hidden' />
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'
                padding='2rem' paddingLeft='3rem' paddingRight='3rem' flexGrow={1}>
                {gallery}
            </Box>
            <Footer />
        </Box>
    );
}

export default GalleryPage;