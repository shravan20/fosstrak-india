import React, { useState, useEffect } from 'react';
import EventList from './components/molecules/EventList';

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Mock API call to fetch events (replace with your actual API call)
    const fetchEvents = async () => {
      try {
        const response = [{
          name: "Test Event", description: "Description Test event", date: new Date().toString(), location: "Mangalore"
        }, {
          name: "Test Event 2", description: "Description Test event 2", date: new Date().toString(), location: "Bangalore"
        }];
        // const response = await fetch('https://api.example.com/events');
        // const data = await response.json();
        const data = response;
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>
      <EventList events={events} />
    </div>
  );
};

export default App;
