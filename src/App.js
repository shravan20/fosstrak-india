import React, { useState, useEffect } from 'react';
import EventList from './components/molecules/EventList';
import Navbar from './components/atoms/Navbar';
import eventsData from './data/events-v1.json';

const App = () => {
  const [events, setEvents] = useState([]);

  const toLocaleDateString = (date) => {
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = eventsData;
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8" >
        <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>
        <EventList events={events} />
      </div>
    </>

  );
};

export default App;
