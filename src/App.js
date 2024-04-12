import React from 'react';
import Body from './components/templatez/HomePage';
import Navbar from './components/atoms/Navbar';
import Modal from './components/atoms/Modal';
import CustomisedNavbar from './components/atoms/CustomisedNavbar';
import EventDetail from './components/pages/EventDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './components/pages/NotFound';

const App = () => {
    return (
        <>
            {/* TODO: Explore CustomizedNavbar ; Make it default or remove later on */}
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/home" element={<Body />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
