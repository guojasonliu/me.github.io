import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import ImageButton from '../image-button/image-button';




function HomeFeaturedAlbum({ images=[] })
{
    return (
        <Box flexDirection='column' 
            sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {images.map(({ image, text }) => (
                <ImageButton image={image} text={text} />
            ))}
        </Box>
    );
}

export default HomeFeaturedAlbum;