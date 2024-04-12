import React, { useState, useEffect } from 'react';
import Body from './components/templatez/HomePage';
import Navbar from './components/atoms/Navbar';
import CustomisedNavbar from './components/atoms/CustomisedNavbar';
import EventDetail from './components/pages/EventDetail';
import Footer from './components/pages/Footer';
const App = () => {
    return (
        <>
            {/* <CustomisedNavbar /> */}
            <Navbar />
            <Body />
            <Footer />
            {/* <EventDetail /> */}
        </>
    );
};

export default App;
