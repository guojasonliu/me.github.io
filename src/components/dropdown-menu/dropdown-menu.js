import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem, { menuItemClasses } from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';


DropdownMenu.defaultProps = {
    label: '',
    items: [],
    leftMargin: '3rem',
    rightMargin: '1rem',
    fontFamily: 'Arapey'
};

function DropdownMenu({ label, items, leftMargin, rightMargin, fontFamily })
{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const theme = useTheme();

    function handleClick(event)
    {
        if (anchorEl !== event.currentTarget)
            setAnchorEl(event.currentTarget);
    }

    function handleClose()
    {
        setAnchorEl(null);
    }

    const menuItems = items.map((item, index) => (
        <MenuItem key={index} onClick={handleClose}>{item}</MenuItem>
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
                {menuItems}
            </Menu>
        </div>
    );
}

export default DropdownMenu;