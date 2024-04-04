import React from 'react';

const EventCard = ({ event }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-40 object-cover" src={event.image || "https://is1-ssl.mzstatic.com/image/thumb/Purple111/v4/dd/95/7e/dd957e3a-abd3-da8a-2211-726a67108938/source/256x256bb.jpg"} alt={event.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{event.name}</div>
                <p className="text-gray-700 text-base">{event.description}</p>
            </div>
            <div className="px-6 py-4">
                <p className="text-gray-600 text-sm">Date: {event.date}</p>
                <p className="text-gray-600 text-sm">Location: {event.location}</p>
            </div>
        </div>
    );
};

export default EventCard;
