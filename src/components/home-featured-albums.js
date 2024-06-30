import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import ImageButton from './image-button';
import { SettingsContext } from '../settings';
import { useNavigate } from "react-router-dom";


function HomeFeaturedAlbums()
{
    const settings = useContext(SettingsContext);
    const navigate = useNavigate();

    return (
        <Box flexDirection='column' 
            sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {settings.homeFeaturedAlbums.map(({ albumKey, textBoxP, imageHeight, fontFamily, fontSize, fontWeight }) =>
            (
                <ImageButton image={settings.albums[albumKey].image} text={settings.albums[albumKey].albumName}
                    textBoxP={textBoxP} imageHeight={imageHeight} fontFamily={fontFamily}
                    fontSize={settings.isMobile ? '4rem' : fontSize}
                    fontWeight={fontWeight} onClick={() => navigate('/' + albumKey)} key={albumKey} 
                    lineHeight={settings.isMobile ? '5rem' : '8rem'} />
            ))}
        </Box>
    );
}

export default HomeFeaturedAlbums;