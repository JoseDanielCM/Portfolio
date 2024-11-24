const Footer = () => {
    return (
        <footer className="relative sectBack-Top py-10 overflow-hidden">
            

            {/* Main Content */}
            <div className="relative container mx-auto px-6 text-center text-white z-10">
                {/* Title with Gradient Text */}
                <h3 className="inline-block text-3xl font-bold mb-8 bg-gradient-to-r text-black shine-animation">
                    🚀 Let's Connect and Build Together!
                </h3>


                {/* CONTACT INFO */}
                <div className="text-gray-300 space-y-4 mb-8">
                    <p className="flex items-center justify-center gap-2">
                        <span>📧</span>
                        <p className="text-purple-400 hover:underline hover:text-purple-300 transition">
                            jodacarmon@gmail.com
                        </p>
                    </p>
                    <p>📱 Phone: +57 (318) 8842225</p>
                    
                </div>

                {/* SOCIAL MEDIA LINKS */}
                <div className="flex justify-center space-x-6 mb-3">
                    {/* GitHub */}
                    <a
                        href="https://github.com/JoseDanielCM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-purple-400 transition transform hover:scale-110"
                        aria-label="GitHub"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-8 h-8"
                        >
                            <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 007.87 10.95c.58.1.79-.25.79-.55 0-.27-.01-1.18-.02-2.15-3.21.7-3.89-1.54-3.89-1.54-.53-1.36-1.28-1.73-1.28-1.73-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.71 1.25 3.37.96.1-.75.4-1.25.72-1.54-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.44-2.29 1.17-3.09-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.96 10.96 0 012.87-.39c.97 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.8 1.17 1.83 1.17 3.09 0 4.42-2.71 5.4-5.29 5.68.42.37.77 1.1.77 2.21 0 1.6-.01 2.9-.01 3.29 0 .31.21.66.8.55A11.5 11.5 0 0023.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
                        </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/jose-daniel-carvajal-montañez-783635311"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-purple-400 transition transform hover:scale-110"
                        aria-label="LinkedIn"
                    >
                        <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
>
    <path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3.75 8.98h2.46v12.47H3.75V8.98zM8.73 8.98h2.35v1.56c.31-.47.72-.88 1.23-1.19.51-.31 1.1-.46 1.69-.46 1.26 0 2.26.48 3.01 1.43.75.95 1.13 2.26 1.13 3.93v7.24h-2.44v-6.97c0-.99-.23-1.72-.68-2.18-.45-.46-1.06-.69-1.84-.69-.75 0-1.37.23-1.85.7-.48.47-.72 1.22-.72 2.23v6.91h-2.44V8.98z" />
</svg>

                        
                    </a>
                </div>

                {/* Decorative Gradient Divider */}
                <div className="animated-line mb-3"></div>

                {/* Footer Text */}
                <p className="text-sm text-gray-400">
                    © 2024 Jose Daniel. Built with passion, curiosity, and code.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
