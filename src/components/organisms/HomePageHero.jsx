import HeroCard from '../atoms/HeroCard';
import React from 'react';

const HomePageHero = () => {
    return (
        <>
            <HeroCard
                content={{
                    title: 'Explore Tech Events Across India',
                    description:
                        'Information about exploring and learning at tech events near you.',
                }}
                children={
                    <div className="flex justify-center">
                        <button className="btn btn-primary text-white text-lg font-bold mr-4">
                            Explore Events
                        </button>
                        <button className="btn btn-outline-primary text-white text-lg font-bold">
                            Learn More
                        </button>
                    </div>
                }
            />
        </>
    );
};

export default HomePageHero;
