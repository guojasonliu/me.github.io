import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AlbumPage from './pages/album/album';
import HomePage from './pages/home/home';
import GalleryPage from './pages/gallery/gallery';
import AboutPage from './pages/about/about';
import ContactPage from './pages/contact/contact';


function MyRouter()
{

    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/a-page" element={<AlbumPage title="Japan 2023" />} />
                <Route path="/b-page" component={() => <AlbumPage album="b" />} />
                <Route path="/c-page" component={() => <AlbumPage album="c" />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* Add a default route or a 404 page if needed */}
            </Routes>
        </Router>
    );
}

export default MyRouter;