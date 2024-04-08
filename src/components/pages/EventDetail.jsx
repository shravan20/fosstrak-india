import MapPreview from '../atoms/MapPreview';
import Footer from './footer';
const EventDetail = () => {
    return (
        <>
            <div className="bg-gray-50">
                <section className="py-12 lg:py-16 xl:py-20">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
                            <div className="space-y-4">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Modern Web Summit
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
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
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
                                            <line
                                                x1="16"
                                                x2="16"
                                                y1="2"
                                                y2="6"
                                            ></line>
                                            <line
                                                x1="8"
                                                x2="8"
                                                y1="2"
                                                y2="6"
                                            ></line>
                                            <line
                                                x1="3"
                                                x2="21"
                                                y1="10"
                                                y2="10"
                                            ></line>
                                        </svg>
                                        <span>August 23-25, 2023</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="w-4 h-4 flex-shrink-0"
                                        >
                                            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
                                            <line
                                                x1="9"
                                                x2="9"
                                                y1="3"
                                                y2="18"
                                            ></line>
                                            <line
                                                x1="15"
                                                x2="15"
                                                y1="6"
                                                y2="21"
                                            ></line>
                                        </svg>
                                        <span>San Francisco, CA</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-start space-x-4">
                                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8">
                                    Add to Calendar
                                </button>
                                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="border-t border-b py-12 lg:py-16 xl:py-20">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                                    About the Event
                                </h2>
                                <p className="text-gray-500 md:text-xl dark:text-gray-400">
                                    The Modern Web Summit is a 3-day conference
                                    that brings together the best and brightest
                                    minds in web development. From frameworks to
                                    performance, security to accessibility, join
                                    us as we explore the latest trends and
                                    technologies shaping the future of the web.
                                </p>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2 md:gap-8">
                                <div className="space-y-2">
                                    <h3 className="font-semibold">
                                        Key Highlights
                                    </h3>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Insightful Keynote Sessions</li>
                                        <li>Interactive Workshops</li>
                                        <li>Panel Discussions</li>
                                        <li>Networking Opportunities</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-12 lg:py-16 xl:py-20">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                                    Featured Speakers
                                </h2>
                                <div className="grid gap-4 md:grid-cols-2 md:gap-8">
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src="/placeholder.svg"
                                            width="120"
                                            height="120"
                                            alt="Speaker"
                                            className="rounded-full"
                                            style={{
                                                aspectRatio: '120/120',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        <div className="space-y-1">
                                            <h3 className="font-semibold">
                                                Sarah Cooper
                                            </h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                Sarah Cooper is a comedian and
                                                author of the bestselling book
                                                "100 Tricks to Appear Smart in
                                                Meetings".
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src="/placeholder.svg"
                                            width="120"
                                            height="120"
                                            alt="Speaker"
                                            className="rounded-full"
                                            style={{
                                                aspectRatio: '120/120',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        <div className="space-y-1">
                                            <h3 className="font-semibold">
                                                John Maeda
                                            </h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                John Maeda is an American
                                                executive, designer, and
                                                computer scientist.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src="/placeholder.svg"
                                            width="120"
                                            height="120"
                                            alt="Speaker"
                                            className="rounded-full"
                                            style={{
                                                aspectRatio: '120/120',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        <div className="space-y-1">
                                            <h3 className="font-semibold">
                                                Tracy Chou
                                            </h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                Tracy Chou is a software
                                                engineer and diversity advocate
                                                in the tech industry.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                                    Schedule
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-4">
                                        <div className="text-center">
                                            <time className="block text-2xl font-bold">
                                                Day 1
                                            </time>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                August 23, 2023
                                            </span>
                                        </div>
                                        <div className="grid gap-2 border-l border-gray-200 pl-4 space-y-2 dark:border-gray-800">
                                            <div className="flex items-center space-x-2">
                                                <time className="font-semibold">
                                                    9:00 am
                                                </time>
                                                <span className="font-semibold">
                                                    Doors Open
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <time className="font-semibold">
                                                    10:00 am
                                                </time>
                                                <span className="font-semibold">
                                                    Keynote: The Future of the
                                                    Web
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <time className="font-semibold">
                                                    11:30 am
                                                </time>
                                                <span className="font-semibold">
                                                    Panel: Building for
                                                    Inclusivity
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <time className="font-semibold">
                                                    1:00 pm
                                                </time>
                                                <span className="font-semibold">
                                                    Lunch Break
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <time className="font-semibold">
                                                    2:00 pm
                                                </time>
                                                <span className="font-semibold">
                                                    Workshop: Mastering Web
                                                    Performance
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="text-center">
                                            <time className="block text-2xl font-bold">
                                                Day 2
                                            </time>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                August 24, 2023
                                            </span>
                                        </div>
                                        <div className="grid gap-2 border-l border-gray-200 pl-4 space-y-2 dark:border-gray-800">
                                            <div className="flex items-center space-x-2">
                                                <time className="font-semibold">
                                                    9:00 am
                                                </time>
                                                <span className="font-semibold">
                                                    Keynote: The Rise of
                                                    Jamstack
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <time className="font-semibold">
                                                    10:30 am
                                                </time>
                                                <span className="font-semibold">
                                                    Workshop: Designing for
                                                    Accessibility
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <time className="font-semibold">
                                                    12:00 pm
                                                </time>
                                                <span className="font-semibold">
                                                    Lunch Break
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <time className="font-semibold">
                                                    1:00 pm
                                                </time>
                                                <span className="font-semibold">
                                                    Panel: The State of Web
                                                    Frameworks
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <time className="font-semibold">
                                                    2:30 pm
                                                </time>
                                                <span className="font-semibold">
                                                    Keynote: The Future of Web3
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="text-center">
                                            <time className="block text-2xl font-bold">
                                                Day 3
                                            </time>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                August 25, 2023
                                            </span>
                                        </div>
                                        <div className="grid gap-2 border-l border-gray-200 pl-4 space-y-2 dark:border-gray-800">
                                            <div className="flex items-center space-x-2">
                                                <time className="font-semibold">
                                                    9:00 am
                                                </time>
                                                <span className="font-semibold">
                                                    Keynote: The Future of Web3
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <time className="font-semibold">
                                                    10:30 am
                                                </time>
                                                <span className="font-semibold">
                                                    Workshop: Designing for
                                                    Accessibility
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <time className="font-semibold">
                                                    12:00 pm
                                                </time>
                                                <span className="font-semibold">
                                                    Lunch Break
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <time className="font-semibold">
                                                    1:00 pm
                                                </time>
                                                <span className="font-semibold">
                                                    Panel: The State of Web
                                                    Frameworks
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <time className="font-semibold">
                                                    2:30 pm
                                                </time>
                                                <span className="font-semibold">
                                                    Keynote: The Future of Web3
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
                <Footer />
            </div>
        </>
    );
};

export default EventDetail;
