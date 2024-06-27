import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem, { menuItemClasses } from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";


function DropdownMenu({ label='', albums=[], leftMargin='3rem', rightMargin='1rem', fontFamily='Arapey' })
{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const theme = useTheme();
    const navigate = useNavigate();

    function handleClick(event)
    {
        if (anchorEl !== event.currentTarget)
            setAnchorEl(event.currentTarget);
    }

    function handleClose()
    {
        setAnchorEl(null);
    }

    function onAlbumClicked(albumLink)
    {
        handleClose();
        navigate(albumLink);
    }

    const menuItems = albums.map((item) => (
        <MenuItem key={item.albumLink} onClick={() => onAlbumClicked(item.albumLink)}>{ item.name }</MenuItem>
    ));

    return (
        <div>
            <Button aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup='true' onClick={handleClick}
                onMouseOver={handleClick}
                sx={{ color: 'inherit', marginLeft: leftMargin, marginRight: rightMargin, fontFamily: fontFamily,
                textTransform: 'none', fontSize: theme.typography.h6.fontSize, padding: 0 }}>
                {label}
            </Button>
            <Menu id='simple-menu' anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }} sx={{ fontFamily: fontFamily }}>
                {menuItems}
            </Menu>
        </div>
    );
}

export default DropdownMenu;