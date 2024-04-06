import React, { useState, useEffect } from 'react';
import Body from './components/templatez/HomePage';
import Navbar from './components/atoms/Navbar';
import EventDetail from './components/pages/EventDetail';
const App = () => {
    return (
        <>
            <Navbar />
            <Body />
            {/* <EventDetail /> */}
        </>
    );
};

export default App;
