import React, { useState, useEffect } from 'react';
import Body from './components/templatez/HomePage';
import Navbar from './components/atoms/Navbar';
import Modal from './components/atoms/Modal';
import CustomisedNavbar from './components/atoms/CustomisedNavbar';
import EventDetail from './components/pages/EventDetail';
const App = () => {
    return (
        <>
            {/* <CustomisedNavbar /> */}
            <Navbar />
            <Body />
            <Modal childrenComponent={<EventDetail />} />
        </>
    );
};

export default App;
