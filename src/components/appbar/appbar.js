import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import MuiAppBar from '@mui/material/AppBar';
import MuiToolbar from '@mui/material/Toolbar';
import DropdownMenu from '../dropdown-menu/dropdown-menu';
import './appbar.css';

const leftMargin = '0rem';
const rightMargin = '2rem';
const fontFamily = 'Arapey';

const tabsRight = [
    { label: 'Home', type: 'link', link: '/' },
    { label: 'About', type: 'link', link: '/about' },
    { label: 'Portofolio', type: 'dropdown' },
    { label: 'Gallery', type: 'link', link: '/gallery' },
    { label: 'Contact', type: 'link', link: '/contact' }
];


function parseTabs2HTML(tabs)
{
    if (tabs == null)
        return <div></div>;

    const tabsHTML = [];
    for (let tab of tabs)
    {
        if (tab.type == 'button')
        {
            tabsHTML.push(
                <Link key={tab.label} variant='h6' underline='none' color='inherit' onClick={tab.onClick} tabIndex={0}
                    component='button' sx={{ marginLeft: leftMargin, marginRight: rightMargin, fontFamily: fontFamily,
                    transition: 'color 0.2s ease-in-out' }}>
                    {tab.label}
                </Link>
            );
        }
        else if (tab.type == 'link')
        {
            tabsHTML.push(
                <Link variant='h6' underline='none' color='inherit' href={tab.link}
                    sx={{ marginLeft: leftMargin, marginRight: rightMargin, fontFamily: fontFamily,
                    transition: 'color 0.2s ease-in-out' }}>
                    {tab.label}
                </Link>
            );
        }
        else if (tab.type == 'dropdown')
        {
            tabsHTML.push(
                <DropdownMenu label={tab.label} leftMargin={leftMargin} rightMargin={rightMargin} />
            );
        }
    }
    return tabsHTML;
}

AppBar.defaultProps = {
    enableTopTransparent: true,
    barPosition: 'fixed',
    bgColorAtTop: 'transparent',
    colorAtTop: 'white',
    visibilityAtTop: 'hidden',
    bgColorNotTop: 'white',
    colorNotTop: 'black',
    visibilityNotTop: 'visible'
};

function AppBar({ enableTopTransparent, barPosition, bgColorAtTop, colorAtTop, visibilityAtTop, bgColorNotTop, colorNotTop, visibilityNotTop })
{
    useEffect(() => {
        const appBar = document.getElementById('app-bar');
        const flexBoxLeft = appBar.querySelector('#flex-box-left');
        if (enableTopTransparent === false && appBar != null)
        {
            appBar.style.backgroundColor = 'white';
            appBar.style.color = 'black';
        }
        const onScroll = () =>
        {
            if (appBar != null)
                if (enableTopTransparent && window.scrollY === 0)
                {
                    appBar.style.backgroundColor = bgColorAtTop;
                    appBar.style.color = colorAtTop;
                    flexBoxLeft.style.visibility = visibilityAtTop;
                }
                else
                {
                    appBar.style.backgroundColor = bgColorNotTop;
                    appBar.style.color = colorNotTop;
                    flexBoxLeft.style.visibility = visibilityNotTop;
                }
        };
        window.addEventListener("scroll", onScroll);
        return () =>
        {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);


    const tabsRightHTML = parseTabs2HTML(tabsRight);
    
    return (
        <MuiAppBar id='app-bar' elevation={0} position={barPosition}
            sx={{ backgroundColor: bgColorAtTop, color: colorAtTop, padding: '0.5rem' }}>
            <MuiToolbar sx={{ justifyContent: 'space-between' }}>
                <Box id='flex-box-left' visibility={visibilityAtTop}>
                    <Link href='/' underline='none' variant='h4' color='inherit' fontFamily={fontFamily}>
                        Guo Jason Liu
                    </Link>
                </Box>
                <Box id='flex-box-right'>
                    {tabsRightHTML}
                </Box>
            </MuiToolbar>
        </MuiAppBar>
    );
}

export default AppBar;
