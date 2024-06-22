import * as React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '../../components/appbar/appbar';
import { Grid, Box, styled } from '@mui/material';
import ImageButton from '../../components/image-button/image-button';
import Footer from '../../components/footer/footer';


function GalleryPage(images=[])
{
    images = [{image: '/assets/images/IMG_8971.jpg', key: 'woo'}, {image: '/assets/images/IMG_3676.jpg', key: 'woo2'}]

    return (
        <div>
            <AppBar barPosition='static' bgColorAtTop='white' colorAtTop='black' bgColorNotTop='white'
                colorNotTop='black' visibilityNotTop='hidden' />
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'
                padding='1rem' paddingLeft='3rem' paddingRight='3rem'>
                <Typography variant='h3' paddingBottom='1rem'>
                    2024
                </Typography>
                <Grid container spacing={2}>
                    {images.map(({image, key}) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
                        <ImageButton image={image} text={key}/>
                    </Grid>
                    ))}
                </Grid>
            </Box>
            <Footer />
        </div>
    );
}

export default GalleryPage;