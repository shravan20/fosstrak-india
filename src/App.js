import React from 'react';
import Body from './components/templatez/HomePage';
import Navbar from './components/atoms/Navbar';
import Modal from './components/atoms/Modal';
import CustomisedNavbar from './components/atoms/CustomisedNavbar';
import EventDetail from './components/pages/EventDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/pages/NotFound';

const App = () => {
    return (
        <>
            {/* TODO: Explore CustomizedNavbar ; Make it default or remove later on */}
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/home" element={<Body />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
            <Modal childrenComponent={<EventDetail />} />
        </>
    );
};

export default App;
