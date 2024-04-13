import MapPreview from '../atoms/MapPreview';

const EventDetailHeader = ({ title, dates, location, imageUrl }) => {
    // Fallback values using Lorem Ipsum
    const defaultTitle = 'Modern Web Summit';
    const defaultDates = 'August 23-25, 2023';
    const defaultLocation = 'San Francisco, CA';
    const defaultImageUrl = 'https://via.placeholder.com/400x225';

    return (
        <section className="py-12 lg:py-16 xl:py-20">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 xl:gap-16">
                    <div className="lg:col-span-2 space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            {title || defaultTitle}
                        </h1>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-4 h-4 flex-shrink-0"
                                >
                                    <rect
                                        width="18"
                                        height="18"
                                        x="3"
                                        y="4"
                                        rx="2"
                                        ry="2"
                                    ></rect>
                                    <line x1="16" x2="16" y1="2" y2="6"></line>
                                    <line x1="8" x2="8" y1="2" y2="6"></line>
                                    <line x1="3" x2="21" y1="10" y2="10"></line>
                                </svg>
                                <span>{dates || defaultDates}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-4 h-4 flex-shrink-0"
                                >
                                    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
                                    <line x1="9" x2="9" y1="3" y2="18"></line>
                                    <line x1="15" x2="15" y1="6" y2="21"></line>
                                </svg>
                                <span>{location || defaultLocation}</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-1 flex flex-col justify-center items-center space-y-4">
                        <img
                            alt="Image"
                            className="rounded-xl object-cover object-center"
                            src={imageUrl || defaultImageUrl}
                            height="225"
                            width="400"
                        />
                        {/* Buttons for Add to Calendar and Register */}
                    </div>
                </div>
            </div>
        </section>
    );
};

const AboutEventSection = ({ aboutTitle, aboutDescription, highlights }) => {
    // Fallback values using Lorem Ipsum
    const defaultAboutDescription =
        'The Modern Web Summit is a 3-day conference that brings together the best and brightest minds in web development.';

    const defaultHighlights = [
        'Insightful Keynote Sessions',
        'Interactive Workshops',
        'Panel Discussions',
        'Networking Opportunities',
    ];

    return (
        <section className="border-t border-b py-12 lg:py-16 xl:py-20">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                            {aboutTitle || 'About the Event'}
                        </h2>
                        <p className="text-gray-500 md:text-xl dark:text-gray-400">
                            {aboutDescription || defaultAboutDescription}
                        </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 md:gap-8">
                        <div className="space-y-2">
                            <h3 className="font-semibold">Key Highlights</h3>
                            <ul className="list-disc list-inside space-y-2">
                                {(highlights || defaultHighlights).map(
                                    (highlight, index) => (
                                        <li key={index}>{highlight}</li>
                                    ),
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SpeakersAndScheduleSection = ({ speakers, schedule }) => {
    // Fallback speakers data with Lorem Ipsum
    const defaultSpeakers = [
        {
            name: 'Sarah Cooper',
            bio: "Sarah Cooper is a comedian and author of the bestselling book '100 Tricks to Appear Smart in Meetings'.",
            imageUrl: 'https://via.placeholder.com/120',
        },
        {
            name: 'John Maeda',
            bio: 'John Maeda is an American executive, designer, and computer scientist.',
            imageUrl: 'https://via.placeholder.com/120',
        },
        {
            name: 'Tracy Chou',
            bio: 'Tracy Chou is a software engineer and diversity advocate in the tech industry.',
            imageUrl: 'https://via.placeholder.com/120',
        },
    ];

    // Fallback schedule data with Lorem Ipsum
    const defaultSchedule = [
        {
            day: 'Day 1',
            date: 'August 23, 2023',
            events: [
                { time: '9:00 am', description: 'Doors Open' },
                {
                    time: '10:00 am',
                    description: 'Keynote: The Future of the Web',
                },
                {
                    time: '11:30 am',
                    description: 'Panel: Building for Inclusivity',
                },
                { time: '1:00 pm', description: 'Lunch Break' },
                {
                    time: '2:00 pm',
                    description: 'Workshop: Mastering Web Performance',
                },
            ],
        },
        {
            day: 'Day 2',
            date: 'August 24, 2023',
            events: [
                {
                    time: '9:00 am',
                    description: 'Keynote: The Rise of Jamstack',
                },
                {
                    time: '10:30 am',
                    description: 'Workshop: Designing for Accessibility',
                },
                { time: '12:00 pm', description: 'Lunch Break' },
                {
                    time: '1:00 pm',
                    description: 'Panel: The State of Web Frameworks',
                },
                { time: '2:30 pm', description: 'Keynote: The Future of Web3' },
            ],
        },
        {
            day: 'Day 3',
            date: 'August 25, 2023',
            events: [
                { time: '9:00 am', description: 'Keynote: The Future of Web3' },
                {
                    time: '10:30 am',
                    description: 'Workshop: Designing for Accessibility',
                },
                { time: '12:00 pm', description: 'Lunch Break' },
                {
                    time: '1:00 pm',
                    description: 'Panel: The State of Web Frameworks',
                },
                { time: '2:30 pm', description: 'Keynote: The Future of Web3' },
            ],
        },
    ];

    // Use provided speakers or fallback to default
    const displayedSpeakers = speakers || defaultSpeakers;

    // Use provided schedule or fallback to default
    const displayedSchedule = schedule || defaultSchedule;

    return (
        <section className="py-12 lg:py-16 xl:py-20">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                            Featured Speakers
                        </h2>
                        <div className="grid gap-4 md:grid-cols-2 md:gap-8">
                            {displayedSpeakers.map((speaker, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-4"
                                >
                                    <img
                                        src={speaker.imageUrl}
                                        width="120"
                                        height="120"
                                        alt={speaker.name}
                                        className="rounded-full"
                                        style={{
                                            aspectRatio: '120/120',
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <div className="space-y-1">
                                        <h3 className="font-semibold">
                                            {speaker.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {speaker.bio}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                            Schedule
                        </h2>
                        <div className="space-y-4">
                            {displayedSchedule.map((day, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-4"
                                >
                                    <div className="text-center">
                                        <time className="block text-2xl font-bold">
                                            {day.day}
                                        </time>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            {day.date}
                                        </span>
                                    </div>
                                    <div className="grid gap-2 border-l border-gray-200 pl-4 space-y-2 dark:border-gray-800">
                                        {day.events.map((event, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center space-x-2"
                                            >
                                                <time className="font-semibold">
                                                    {event.time}
                                                </time>
                                                <span className="font-semibold">
                                                    {event.description}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const EventDetail = () => {
    return (
        <>
            <div className="bg-gray-50">
                {/* Event details Header */}
                <EventDetailHeader />
                {/* About Event Body */}
                <AboutEventSection />
                {/* Featured Speakers and Event Timeline */}
                <SpeakersAndScheduleSection />
                {/* Event Maps */}
                <section className="py-12 lg:py-16 xl:py-20">
                    <MapPreview
                        mapData={[
                            {
                                id: 1,
                                lat: 8.75815685251226,
                                lon: 72.18053344930304,
                                label: 'Event 1',
                                date_string: 'April 10, 2024',
                                readable_city: 'City A',
                                details_url: 'https://example.com/event1',
                            },
                            {
                                id: 2,
                                lat: 36.605181960912574,
                                lon: 84.72898433072771,
                                label: 'Event 2',
                                date_string: 'April 15, 2024',
                                readable_city: 'City B',
                                details_url: 'https://example.com/event2',
                            },
                        ]}
                    />
                </section>
            </div>
        </>
    );
};

export default EventDetail;
