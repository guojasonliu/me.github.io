import { useEffect, useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '../components/appbar';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Footer from '../components/footer';
import { useParams } from 'react-router-dom';
import { SettingsContext } from '../settings';


function srcset(image, size, rows = 1, cols = 1)
{
    return{
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

function AlbumPage()
{
    const settings = useContext(SettingsContext);
    const { albumKey } = useParams();

    if (!(albumKey in settings.albums))
    {
        return (
            <div></div>
        );
    }

    const album = settings.albums[albumKey];

    let imageList = '';
    if (album.imageListType == 'quilted')
    {
        imageList = (
            <ImageList sx={{ width: '100%', height: '100%' }} variant='quilted' cols={12}>
                {album.imageData.map((image) => (
                    <ImageListItem key={image.img} cols={image.cols || 1} rows={image.rows || 1}>
                        <img {...srcset(image.img, 121, image.rows, image.cols)} alt='' loading='lazy'
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        );
    }
    else if(album.imageListType == 'standard')
    {
        imageList = (
            <ImageList sx={{ width: '100%', height: '100%' }} cols={3}>
                {album.imageData.map((image) => (
                    <ImageListItem key={image.img}>
                        <img srcSet={`${image.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${image.img}?w=164&h=164&fit=crop&auto=format`} alt='' loading='lazy'/>
                    </ImageListItem>
                ))}
            </ImageList>
        );
    }
    else if(album.imageListType == 'masonry')
    {
        imageList = (
            <ImageList variant='masonry' cols={3} gap={8} sx={{ width: '100%', height: '100%' }}>
                {album.imageData.map((image) => (
                    <ImageListItem key={image.img}>
                        <img srcSet={`${image.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${image.img}?w=248&fit=crop&auto=format`} alt='' loading='lazy'/>
                    </ImageListItem>
                ))}
            </ImageList>
        );
    }

    return (
        <div>
            <AppBar barPosition='static' bgColorAtTop='white' colorAtTop='black' bgColorNotTop='white'
                colorNotTop='black' visibilityNotTop='hidden' />
            <Box display='flex' justifyContent='center' alignItems='flex-start' flexDirection='column'
                padding='1rem' paddingLeft='3rem' paddingRight='3rem'>
                <Typography variant='h3' paddingBottom='1rem'>
                    {album.albumName}
                </Typography>
                <Typography variant='h6' paddingBottom='0.2rem' style={{ whiteSpace: 'pre-line' }}>
                    {album.secondaryText}
                </Typography>
                <Typography variant='h7' paddingBottom='1rem' style={{ whiteSpace: 'pre-line' }}>
                    {album.tertiaryText}
                </Typography>
                {imageList}
            </Box>
            <Footer />
        </div>
    );
}

export default AlbumPage;