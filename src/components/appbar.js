import React, { useEffect, useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import MuiAppBar from '@mui/material/AppBar';
import MuiToolbar from '@mui/material/Toolbar';
import DropdownMenu from './dropdown-menu';
import { SettingsContext } from '../settings';
import NameLogo from './name-logo';
import MobileTabsDropdown from './mobile-tabs-dropdown';

const LEFT_MARGIN = '0rem';
const RIGHT_MARGIN = '2rem';
const FONT_FAMILY = 'Arapey';
const TABS_RIGHT = [
    { 'label': 'Home', 'type': 'link', 'link': '/' },
    { 'label': 'About', 'type': 'link', 'link': '/about' },
    { 'label': 'Portofolio', 'type': 'dropdown' },
    { 'label': 'Gallery', 'type': 'link', 'link': '/gallery' },
    { 'label': 'Contact', 'type': 'link', 'link': '/contact' }
];
let portofolioAlbums = [];

function parseTabs2HTML(tabs)
{
    if (tabs == null)
        return <div></div>;

    const tabsHTML = [];
    for (let tab of tabs)
    {
        if (tab.type === 'button')
        {
            tabsHTML.push(
                <Link key={tab.label} variant='h6' underline='none' color='inherit' onClick={tab.onClick} tabIndex={0}
                    component='button' sx={{ marginLeft: LEFT_MARGIN, marginRight: RIGHT_MARGIN, fontFamily: FONT_FAMILY,
                    transition: 'color 0.2s ease-in-out' }}>
                    {tab.label}
                </Link>
            );
        }
        else if (tab.type === 'link')
        {
            tabsHTML.push(
                <Link key={tab.label} variant='h6' underline='none' color='inherit' href={tab.link}
                    sx={{ marginLeft: LEFT_MARGIN, marginRight: RIGHT_MARGIN, fontFamily: FONT_FAMILY,
                    transition: 'color 0.2s ease-in-out' }}>
                    {tab.label}
                </Link>
            );
        }
        else if (tab.type === 'dropdown')
        {
            tabsHTML.push(
                <DropdownMenu key={tab.label} label={tab.label} leftMargin={LEFT_MARGIN} rightMargin={RIGHT_MARGIN}
                    albums={portofolioAlbums}/>
            );
        }
    }
    return tabsHTML;
}

function AppBar({ barPosition = 'fixed', bgColorAtTop = 'transparent', colorAtTop = 'white', visibilityAtTop = 'hidden', bgColorNotTop = 'white', colorNotTop = 'black', visibilityNotTop = 'visible' })
{
    const settings = useContext(SettingsContext);
    portofolioAlbums = settings.appbarPortofolioAlbums;

    const [appBarStyles, setAppBarStyles] = useState(
    {
        backgroundColor: bgColorAtTop,
        color: colorAtTop,
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem'
    });
    const [leftBoxVisibility, setLeftBoxVisibility] = useState(visibilityAtTop);
    const [nameLogoVisibility, setNameLogoVisibility] = useState(visibilityAtTop === 'hidden' ? 'visible' : 'hidden');
    const [mobileTabsIconColor, setMobileTabsIconColor] = useState(colorAtTop);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY <= 16)
            {
                setAppBarStyles(
                {
                    backgroundColor: bgColorAtTop,
                    color: colorAtTop,
                    paddingTop: '1.5rem',
                    paddingBottom: '1.5rem'
                });
                setLeftBoxVisibility(visibilityAtTop);
                setNameLogoVisibility(visibilityAtTop === 'hidden' ? 'visible' : 'hidden');
                setMobileTabsIconColor(colorAtTop);
            }
            else
            {
                setAppBarStyles(
                {
                    backgroundColor: bgColorNotTop,
                    color: colorNotTop,
                    paddingTop: '0.5rem',
                    paddingBottom: '0.5rem'
                });
                setLeftBoxVisibility(visibilityNotTop);
                setNameLogoVisibility(visibilityNotTop === 'hidden' ? 'visible' : 'hidden');
                setMobileTabsIconColor(colorNotTop);
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [bgColorAtTop, bgColorNotTop, colorAtTop, colorNotTop, visibilityAtTop, visibilityNotTop]);

    const tabsRightHTML = parseTabs2HTML(TABS_RIGHT);

    return (
        <MuiAppBar id='app-bar' elevation={0} position={barPosition} sx={appBarStyles}>
            <NameLogo visibility={nameLogoVisibility} />
            <MuiToolbar sx={{ justifyContent: 'space-between' }}>
                <Box id='flex-box-left' sx={{ visibility: leftBoxVisibility }} flex={1}>
                    <Link href='/' underline='none' variant='h4' color='inherit' fontFamily={FONT_FAMILY}>
                        Guo Jason Liu
                    </Link>
                </Box>
                <Box id='flex-box-right' flex={1} display='flex' justifyContent='flex-end'>
                    {
                        settings.isMobile ?
                            <MobileTabsDropdown albums={portofolioAlbums} tabs={TABS_RIGHT} iconColor={mobileTabsIconColor} />
                        :
                            tabsRightHTML
                    }
                </Box>
            </MuiToolbar>
        </MuiAppBar>
    );
}

export default AppBar;
