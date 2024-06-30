import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { SettingsContext } from '../settings';


function MobileTabsDropdown({ albums=[], tabs=[], iconColor='white' })
{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) =>
    {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () =>
    {
        setAnchorEl(null);
    };

    const settings = useContext(SettingsContext);
    const navigate = useNavigate();
    function onMenuItemClicked(link)
    {
        handleClose();
        navigate(link);
    }
    const albumMenuItems = albums.map((albumKey) => (
        settings.albums[albumKey] === undefined ? <div></div> : 
        <MenuItem key={albumKey} onClick={() => onMenuItemClicked('/' + albumKey)}>{ " - " + settings.albums[albumKey].albumName }</MenuItem>
    ));

    const menuItems = tabs.map(({ label, link }) => (
        label === 'Portofolio' ?
        <div key={label}>
            <MenuItem key={label} onClick={() => onMenuItemClicked(link)}>{label}</MenuItem>
            {albumMenuItems}
        </div>
        :
        <MenuItem key={label} onClick={() => onMenuItemClicked(link)}>{label}</MenuItem>
    ));

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <IconButton onClick={handleClick} sx={{ ml: 2 }} 
                    aria-controls={open ? 'menu' : undefined} aria-haspopup='true'
                    aria-expanded={open ? 'true' : undefined}>
                        <MenuIcon id='mobile-tabs-dropdown-icon' sx={{ width: '2rem', height: '2rem', color: iconColor }} />
                </IconButton>
            </Box>
            <Menu anchorEl={anchorEl} id='menu' open={open} onClose={handleClose} onClick={handleClose}>
                {menuItems}
            </Menu>
        </React.Fragment>
    );
}

export default MobileTabsDropdown;