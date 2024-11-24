import React from "react";

const ProfileCard = () => {
    return (
        <div className="flex flex-col items-center bg-gradient-to-br from-purple-700 via-purple-900 to-black p-8 rounded-lg shadow-lg text-white max-w-md mx-auto">
            {/* Profile Greeting */}
            <h2 className="text-2xl font-bold mb-4">Hi, I'm Daniel 👋</h2>
            <p className="text-center">
                I'm a developer who loves learning and building new things. 
                I'm always looking for ways to improve and take on new challenges. Welcome!
            </p>
            
            {/* Divider */}
            <div className="w-1/2 h-[1px] bg-white/50 my-6"></div>
            
            {/* Interests Section */}
            <h3 className="text-xl font-semibold mb-3">What I Enjoy</h3>
            <ul className="text-neutral-200 text-center space-y-2">
                <li>💻 Building creative projects</li>
                <li>📚 Learning new technologies</li>
                <li>🧠 Solving complex problems</li>
                <li>🌟 Exploring new ideas</li>
            </ul>
        </div>
    );
};

export default ProfileCard;
