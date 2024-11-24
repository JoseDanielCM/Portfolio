import React from "react";

const ProfileCard = () => {
    return (
        <div id="ProfileCard" className="ralewayBold group relative flex flex-col items-center bg-gradient-to-br from-purple-800 via-indigo-900 to-black px-4 py-8 md:p-8 rounded-xl shadow-xl text-white md:max-w-md mx-auto mt-5 mb-10 md:mt-0 md:mb-0 transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
            {/* Animated Glow Effect */}
            <div className="absolute inset-0 blur-md bg-gradient-to-br from-purple-500 via-blue-700 to-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
            
            {/* Profile Greeting */}
            <h2 className="text-xl sm:text-2xl md:text-3xl  font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500 group-hover:scale-110 group-hover:opacity-90 transition-transform duration-300 ease-out">
                Hi, I'm Daniel 👋
            </h2>
            <p className="text-center text-xs sm:text-sm md:text-base leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                I'm a developer who loves learning and building new things. I'm always looking for ways to improve and take on new challenges. Welcome!
            </p>
            
            {/* Divider */}
            <div className="w-1/2 h-[1px] bg-gradient-to-r from-purple-300 to-purple-500 my-6 group-hover:scale-x-110 transition-transform duration-300"></div>
            {/* Interests Section */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-purple-300 group-hover:opacity-90 transition-opacity duration-300">
                What I Enjoy
            </h3>
            <ul className="text-sm sm:text-sm md:text-base text-neutral-300 text-center space-y-3">
                <li className="flex items-center gap-2 transform group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-purple-400">💻</span> Building creative projects
                </li>
                <li className="flex items-center gap-2 transform group-hover:translate-x-1 transition-transform duration-300 delay-100">
                    <span className="text-purple-400">📚</span> Learning new technologies
                </li>
                <li className="flex items-center gap-2 transform group-hover:translate-x-1 transition-transform duration-300 delay-300">
                    <span className="text-purple-400">🌟</span> Exploring new ideas
                </li>
            </ul>
            
            {/* CV Download Button */}
            <a
                href="https://drive.google.com/drive/folders/1F_XwUAJtereIccBQue5lnj7NBThCr0sG?usp=sharing" // Replace with the actual link to your CV

                target="_blank"
                className="z-50 text-sm sm:text-xl md:text-lg mt-6 px-6 py-3 bg-purple-700 text-white font-bold rounded-full shadow-md hover:bg-purple-600 hover:shadow-purple-500/50 hover:scale-105 transition-transform duration-300"
            >
                📄 Download My CV
            </a>
        </div>
    );
};

export default ProfileCard;
