import React from 'react';
import { styled } from '@mui/system';

const OverlappingImage = styled('img')(
{
    position: 'absolute',
    paddingLeft: '3rem',
    paddingTop: '2rem',
    width: '19rem',
    height: '4rem',
    zIndex: 1
});

function NameLogo()
{
    return (
        <OverlappingImage src='/assets/name-logo.png' alt='' />
    );
}

export default NameLogo;
