import React from 'react';
import { styled } from '@mui/system';

const OverlappingImage = styled('img')(
{
    position: 'absolute',
    paddingLeft: '3rem',
    paddingTop: '0.5rem',
    width: '19rem',
    height: '4rem',
    zIndex: 1
});

function NameLogo({ visibility='visible' })
{
    return (
        <OverlappingImage id='name-logo' src='/assets/name-logo.png' alt='' sx={{ visibility: visibility }} />
    );
}

export default NameLogo;
