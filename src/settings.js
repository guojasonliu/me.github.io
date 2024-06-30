import React, { createContext, useState, useEffect } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';


export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [settings, setSettings] = useState(
    {
        'appbarPortofolioAlbums': [],
        'homeBackgroundImages': [],
        'homeFeaturedAlbums': [],
        'gallery': [],
        'albums': {},
        'isMobile': isMobile
    });

    useEffect(() => {
        fetch('settings.json')
            .then(response => response.json())
            .then(data => setSettings(prevSettings => ({ ...prevSettings, ...data })))
            .catch(error => console.error('Error loading JSON:', error));
    }, []);

    useEffect(() => {
        setSettings(prevSettings => ({ ...prevSettings, isMobile }));
    }, [isMobile]);

    return (
        <SettingsContext.Provider value={settings}>
            {children}
        </SettingsContext.Provider>
    );
};
