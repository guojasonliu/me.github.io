import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AlbumPage from './pages/album';
import HomePage from './pages/home';
import GalleryPage from './pages/gallery';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';


function MyRouter()
{
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/:albumKey" element={<AlbumPage />} />
            </Routes>
        </Router>
    );
}

export default MyRouter;