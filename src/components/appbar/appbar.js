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

function AppBar(props)
{
    useEffect(() => {
        const appBar = document.getElementById('app-bar');
        const flexBoxLeft = appBar.querySelector('#flex-box-left');
        if (props.enableTopTransparent === false && appBar != null)
        {
            appBar.style.backgroundColor = 'white';
            appBar.style.color = 'black';
        }
        const onScroll = () =>
        {
            if (appBar != null)
                if ((props.enableTopTransparent === undefined || props.enableTopTransparent) && window.scrollY === 0)
                {
                    appBar.style.backgroundColor = 'transparent';
                    appBar.style.color = 'white';
                    flexBoxLeft.style.visibility = 'hidden';
                }
                else
                {
                    appBar.style.backgroundColor = 'white';
                    appBar.style.color = 'black';
                    flexBoxLeft.style.visibility = 'visible';
                }
        };
        window.addEventListener("scroll", onScroll);
        return () =>
        {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);


    const tabsRightHTML = parseTabs2HTML(props.tabsRight);
    
    return (
        <MuiAppBar id='app-bar' elevation={0} position='fixed' sx={{ backgroundColor: 'transparent', padding: '0.5rem' }}>
            <MuiToolbar sx={{ justifyContent: 'space-between' }}>
                <Box id='flex-box-left' visibility='hidden'>
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
