import React from "react";
import Card from "../InternalSections/MissionCard"; 
import { getPublicUrl } from '../../utils/utils'; 

export default function Projects() {
    return (
        <section
            id="Mission"
            className="main-section ralewayBold relative overflow-hidden min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-center"
            style={{
                backgroundImage: `url(${getPublicUrl('backgroundPlanet.jpg')})`, // Replace with your actual image URL
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"></div>

                <h1 className="text-white relative text-7xl font-bold pt-24 text-center z-50">Mission Vission & Values</h1>

            <div className="space-cards-container flex flex-wrap justify-center gap-28 z-50 relative mb-20 mt-10">
                {/* MISSION */}
                <Card
                    title="Mission"
                    description="To create impactful software solutions that solve real-world problems while continuously improving my skills in programming."
                    iconSrc="https://img.icons8.com/color/96/rocket.png"
                    gradient="bg-gradient-to-br from-purple-700 via-indigo-800 to-black"
                    />

                {/* VISSION */}
                <Card
                    title="Vision"
                    description="To become a developer who creates innovative solutions that inspire exploration, curiosity, and a deeper understanding of certain topics"
                    iconSrc="https://img.icons8.com/color/96/telescope.png"
                    gradient="bg-gradient-to-br from-teal-600 via-green-700 to-emerald-600  "
                    />

                {/* VALUES */}
                <Card
                    title="Values"
                    description={
                        <ul className="mt-4 list-disc list-inside">
                            <li>Curiosity</li>
                            <li>Innovation</li>
                            <li>Continuous Improvement</li>
                            <li>Perseverance</li>
                            <li>Adaptability</li>
                        </ul>
                    }
                    iconSrc="https://img.icons8.com/color/96/star.png"
                    gradient="bg-gradient-to-br from-sky-700 via-blue-800 to-indigo-900
"
                />
            </div>
        </section>
    );
}
