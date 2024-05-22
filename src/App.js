import React from 'react';
import HomePage from './components/templatez/HomePage';
import Navbar from './components/atoms/Navbar';
import Modal from './components/atoms/Modal';
import CustomisedNavbar from './components/atoms/CustomisedNavbar';
import EventDetail from './components/pages/EventDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import Footer from './components/atoms/Footer';

const App = () => {
    return (
        <>
            {/* TODO: Explore CustomizedNavbar ; Make it default or remove later on */}
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
            <Footer />
        </>
    );
};

export default App;
