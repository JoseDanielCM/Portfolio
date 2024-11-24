import React from "react";

const Goals = () => {
    return (
        <section id="Goals" className="main-section relative text-white h-screen pt-24 px-8 overflow-hidden z-10">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
                >
                <source src="/public/GoalBackground.mp4" type="video/mp4" />
            </video>

            
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-[-1]"></div>

            {/* Content Overlay */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Mission Objectives...</h2>
                <p className="text-lg leading-7 mb-12">
                    Like the vastness of space, the journey of knowledge is infinite. Our mission is to explore, innovate, and transcend boundaries—just like the stars.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-purple-700 bg-opacity-80 rounded-lg p-6 shadow-md hover:scale-105 transition-transform">
                        <h3 className="text-2xl font-semibold mb-4">Expand Horizons</h3>
                        <p>
                            Venture into uncharted territories of knowledge and discover new dimensions of programming.
                        </p>
                    </div>
                    <div className="bg-purple-700 bg-opacity-80 rounded-lg p-6 shadow-md hover:scale-105 transition-transform">
                        <h3 className="text-2xl font-semibold mb-4">Reach for the Stars</h3>
                        <p>
                            Transform ideas into reality with a bold vision, coding every step of the way.
                        </p>
                    </div>
                    <div className="bg-purple-700 bg-opacity-80 rounded-lg p-6 shadow-md hover:scale-105 transition-transform">
                        <h3 className="text-2xl font-semibold mb-4">Build a Legacy</h3>
                        <p>
                            Leave an impact through innovative solutions that echo like cosmic waves across the universe.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Goals;