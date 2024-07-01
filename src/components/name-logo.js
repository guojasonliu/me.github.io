import React from 'react';
import { styled } from '@mui/system';

const OverlappingImage = styled('img')(
{
    position: 'absolute',
    paddingLeft: '3rem',
    paddingTop: '0.5rem',
    zIndex: 1
});

function NameLogo({ visibility='visible', width='19rem', height='4rem' })
{
    return (
        <OverlappingImage id='name-logo' src='/assets/name-logo.png' alt=''
            sx={{ visibility: visibility, width: width, height: height }} />
    );
}

export default NameLogo;
