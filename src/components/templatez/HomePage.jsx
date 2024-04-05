import React, { useState, useEffect } from 'react';
import eventsData from '../../data/events-v1.json';
import EventList from '../molecules/EventList';
import HomePageHero from '../organisms/HomePageHero';

const Body = () => {
    const [events, setEvents] = useState([]);

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
            <HomePageHero />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>
                <EventList events={events} />
            </div>
        </>
    );
};

export default Body;
