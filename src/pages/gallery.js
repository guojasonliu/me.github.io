import * as React from 'react';
import { useEffect, useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '../components/appbar';
import { Grid, Box, styled } from '@mui/material';
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
    for (let i = 0; i < settings.gallery.length; i++)
    {
        let section = settings.gallery[i];
        /*
        gallery.push(
            <Typography variant='h3' paddingBottom='1rem' fontFamily='Arapey'>
                {section.sectionName}
            </Typography>
        );
        */
        gallery.push(
            <Grid container spacing={2}>
                {section.albums.map(({ albumKey, textBoxP, fontFamily, fontSize, fontWeight, lineHeight }) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={albumKey}>
                        <ImageButton image={settings.albums[albumKey].image} text={settings.albums[albumKey].albumName}
                            textBoxP={textBoxP} imageHeight={ALBUM_HEIGHT} fontFamily={fontFamily} fontSize={fontSize}
                            fontWeight={fontWeight} onClick={() => navigate('/' + albumKey)} lineHeight={lineHeight} />
                    </Grid>
                ))}
            </Grid>
        );
        gallery.push(
            <Box sx={{ width: '100%', padding: '1rem' }}></Box>
        );
    }

    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <AppBar barPosition='static' bgColorAtTop='white' colorAtTop='black' bgColorNotTop='white'
                colorNotTop='black' visibilityNotTop='hidden' />
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'
                padding='1rem' paddingLeft='3rem' paddingRight='3rem' flexGrow={1}>
                {gallery}
            </Box>
            <Footer />
        </Box>
    );
}

export default GalleryPage;