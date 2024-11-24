import React from "react";

const GlowCard = ({ title, description }) => {
    return (
        <div className="relative bg-gradient-to-br from-purple-800 via-indigo-900 to-black bg-opacity-90 rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 transition-transform duration-300 ease-out group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-indigo-800 to-black blur-lg opacity-0 group-hover:opacity-30 rounded-xl transition-opacity duration-300"></div>

            {/* Card Content */}
            <div className="relative z-10">
                <h3 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500">
                    {title}
                </h3>
                <p className="text-lg leading-relaxed text-neutral-300">{description}</p>
            </div>

            {/* Decorative Border */}
            <div className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-purple-400 transition-colors duration-300 pointer-events-none"></div>
        </div>
    );
};

export default GlowCard;
