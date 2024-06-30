import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';


const ImageButtonBase = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
        width: '100% !important',
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));
  
const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});
  
const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));
  
const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.2,
    transition: theme.transitions.create('opacity'),
}));

function ImageButton({ text, image, textBoxP='5rem', imageHeight='5rem', onClick=(() => {}),
    fontFamily='', fontSize='20', fontWeight='', lineHeight='' })
{
    return (
        <ImageButtonBase focusRipple key={text} style={{ height: imageHeight }} onClick={onClick}>
            <ImageSrc style={{ backgroundImage: `url(${image})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
                <Typography component='span' variant='subtitle1' color='inherit'
                    sx={{ position: 'relative', p: textBoxP == null ? '20rem' : textBoxP,
                    pt: 2, pb: (theme) => `calc(${theme.spacing(1)} + 6px)`, fontFamily: fontFamily,
                    fontSize: fontSize, fontWeight: fontWeight, lineHeight: lineHeight }}>
                    {text}
                </Typography>
            </Image>
        </ImageButtonBase>
    );
}

export default ImageButton;