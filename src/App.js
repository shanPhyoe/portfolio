import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Footer from './components/Footer/footer.component';
import Navbar from './components/Navbar/navbar.component';
import MenuBox from './components/MenuBox/menu-box.component';
import ToggleTheme from './components/ToggleTheme/toggle-theme.component';
import ScrollToTop from './components/ScrollToTop/scroll-to-top.component';

import Home from './pages/home/home.component';
import About from './pages/about/about.component';
import Contact from './pages/contact/contact.component';
import Work from './pages/work/work.component';

import './App.scss';

function App() {
    const location = useLocation();
    const { pathname } = location;

    return (
        <div className="App">
            <Navbar />
            <MenuBox />
            <ToggleTheme />
            <ScrollToTop>
                <AnimatePresence exitBeforeEnter>
                    <Routes location={location} key={pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/work" element={<Work />} />
                    </Routes>
                </AnimatePresence>
            </ScrollToTop>
            <Footer />
        </div>
    );
}

export default App;
