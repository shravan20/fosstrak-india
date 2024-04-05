import React, { useState, useEffect } from 'react';
import Body from './components/templates/Body';
import Navbar from './components/atoms/Navbar';
import AnnouncementSlider from './components/atoms/AnnouncementSlider';

const App = () => {


  return (
    <>
      <Navbar />
      <Body />

      <AnnouncementSlider announcement={{
        title: "Stay Tuned! Product Under Development!  ",
        description: "Checkout issues!",
        hyperlink: "https://github.com/shravan20/fosstrak-india/issues"
      }} />
    </>

  );
};

export default App;
