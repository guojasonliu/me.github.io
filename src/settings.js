import React, { createContext, useState, useEffect } from 'react';


export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) =>
{
    const [settings, setSettings] = useState({
        'appbarPortofolioAlbums': [],
        'homeBackgroundImages': [],
        'homeFeaturedAlbums': [],
        'gallery': [],
        'albums': {}
    });

    useEffect(() =>
    {
        fetch('settings.json')
            .then(response => response.json())
            .then(data => setSettings(data))
            .catch(error => console.error('Error loading JSON:', error));
    }, []);

    return (
        <SettingsContext.Provider value={settings}>
            {children}
        </SettingsContext.Provider>
    );
};