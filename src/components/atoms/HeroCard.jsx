import React from 'react';
import { Hero, Button } from 'daisyui';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const HeroCard = ({ content, children }) => {
    return (
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
                <p className="text-lg mb-8">{content.description}</p>
                {children}
            </div>
        </div>
    );
};

export default HeroCard;
