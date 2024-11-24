import React from "react";

const Card = ({ title, description, iconSrc, additionalContent, gradient }) => {
    return (
        <div
            className={`space-card relative p-8 ${gradient} rounded-2xl shadow-lg text-white hover:shadow-2xl hover:shadow-purple-500/50 transition-transform duration-300 ease-out hover:scale-105`}
        >
            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 blur-md bg-gradient-to-br from-purple-600 to-blue-800 opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
            
            {/* Icon */}
            <div className="flex justify-center">
                <div className="icon-container flex justify-center items-center bg-white/10 rounded-full p-4 shadow-inner hover:shadow-lg transition-shadow duration-300">
                    <img src={iconSrc} alt={`${title} Icon`} className="w-16 h-16 object-contain" />
                </div>
            </div>

            {/* Title */}
            <h3 className="text-4xl font-extrabold text-center mt-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-500">
                {title}
            </h3>

            {/* Description */}
            <p className="ralewayNormal text-center text-lg mt-4 opacity-90 leading-relaxed">
                {description}
            </p>

            {/* Additional Content */}
            {additionalContent && (
                <div className="text-center mt-6 text-base bg-white/10 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    {additionalContent}
                </div>
            )}
        </div>
    );
};

export default Card;
