import React from 'react';
import logo from '../../assets/logox500.png';
const CustomisedNavbar = () => {
    return (
        <>
            <div className="bg-[#1a1a2e]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center border-b-2 border-[#e94560] py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="#" className="text-white" rel="ugc">
                                <span className="sr-only">FOSSTrak</span>
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src={logo}
                                    alt=""
                                    width="32"
                                    height="32"
                                    style={{
                                        aspectRatio: '32 / 32',
                                        objectFit: 'cover',
                                    }}
                                />
                            </a>
                        </div>
                        <nav className="hidden md:flex space-x-10">
                            <a
                                href="#"
                                className="text-base font-medium text-white hover:text-gray-300"
                                rel="ugc"
                            >
                                Popular Events
                            </a>
                            <a
                                href="#"
                                className="text-base font-medium text-white hover:text-gray-300"
                                rel="ugc"
                            >
                                Free Events
                            </a>
                            <a
                                href="#"
                                className="text-base font-medium text-white hover:text-gray-300"
                                rel="ugc"
                            >
                                Today's Events
                            </a>
                        </nav>
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <a
                                href="#"
                                className="whitespace-nowrap text-base font-medium text-white hover:text-gray-300"
                                rel="ugc"
                            >
                                List your event
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomisedNavbar;
