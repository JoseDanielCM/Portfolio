import React from "react";

const Card = ({ title, description, iconSrc, additionalContent, gradient }) => {
    return (
        <div
            className={`space-card relative p-6 ${gradient} rounded-2xl shadow-lg text-white hover:shadow-lg transition duration-300`}
        >
            <div className="flex justify-center">
                <div className="icon-container inline-flex justify-center items-center">
                    <img src={iconSrc} alt={`${title} Icon`} className="w-16 h-16 object-contain" />
                </div>
            </div>

            <h3 className="text-4xl font-bold text-center mt-6">{title}</h3>
            <p className="text-center text-xl mt-4">{description}</p>
            {additionalContent && (
                <div className="text-center mt-4 text-xl">{additionalContent}</div>
            )}
        </div>
    );
};

export default Card;
