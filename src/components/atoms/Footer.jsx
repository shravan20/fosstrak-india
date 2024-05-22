const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
            <aside className="items-center grid-flow-col">
                <p>Copyright © {new Date().getFullYear()} - MIT Licensed</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                    >
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.385.6.111.793-.261.793-.577v-2.23c-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.76-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.221-.124-.305-.535-1.53.117-3.186 0 0 1.008-.323 3.301 1.23a11.47 11.47 0 0 1 3.006-.403c1.02.005 2.045.138 3.006.403 2.292-1.553 3.299-1.23 3.299-1.23.653 1.656.242 2.881.118 3.186.77.839 1.236 1.911 1.236 3.221 0 4.61-2.803 5.624-5.473 5.921.43.372.814 1.102.814 2.222v3.293c0 .318.192.694.801.576C20.565 21.798 24 17.302 24 12 24 5.373 18.627 0 12 0z" />
                    </svg>
                </a>
            </nav>
        </footer>
    );
};

export default Footer;
