import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '../../components/appbar/appbar';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Footer from '../../components/footer/footer';


function srcset(image, size, rows = 1, cols = 1)
{
    return{
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

function AlbumPage({ key = '', title = '', imageListType = 'standard' })
{
    let imageList = '';
    if (imageListType == 'quilted')
    {
        imageList = (
            <ImageList sx={{ width: 500, height: 450 }} variant='quilted' cols={4} rowHeight={121}>
                {imageData.map((image) => (
                    <ImageListItem key={image.img} cols={image.cols || 1} rows={image.rows || 1}>
                    <img
                        {...srcset(image.img, 121, image.rows, image.cols)}
                        alt={image.title}
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
            </ImageList>
        );
    }
    else if(imageListType == 'standard')
    {
        imageList = (
            <ImageList sx={{ width: '100%', height: '100%' }} cols={3} rowHeight='100%'>
                {imageData.map((image) => (
                    <ImageListItem key={image.img}>
                    <img
                        srcSet={`${image.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${image.img}?w=164&h=164&fit=crop&auto=format`}
                        alt={image.title}
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
            </ImageList>
        );
    }
    else if(imageListType == 'masonry')
    {
        imageList = (
            <ImageList variant="masonry" cols={3} gap={8}>
                {imageData.map((image) => (
                    <ImageListItem key={image.img}>
                    <img
                        srcSet={`${image.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${image.img}?w=248&fit=crop&auto=format`}
                        alt={image.title}
                        loading="lazy"
                    />
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
                    {title}
                </Typography>
                <Typography variant='h6' paddingBottom='0.1rem'>
                    secondary texts
                </Typography>
                <Typography variant='h7' paddingBottom='1rem'>
                    tertiary texts
                </Typography>
                {imageList}
            </Box>
            <Footer />
        </div>
    );
}

export default AlbumPage;




const imageData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      cols: 2,
    },
  ];