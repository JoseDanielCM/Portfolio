import React from "react";
import GlowCard from '../internalSections/GoalCards'
import { getPublicUrl } from '../../utils/utils'; 

const Goals = () => {
    return (
        <section id="Goals" className="ralewayBold main-section relative text-white md:h-screen pt-24 px-8 overflow-hidden z-10">
            {/* BACK VIDEO */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
                >
                <source src={getPublicUrl("GoalBackground.mp4")} type="video/mp4" />
            </video>

            {/* BACK GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-[-1]"></div>

            {/* CARDS CONTENT */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h2 className="text-6xl font-bold mb-6">Goals and Objectives</h2>
                <p className="ralewayNormal text-lg leading-7 mb-12">
                    Like the vastness of space, the journey of knowledge is infinite. Our mission is to explore, innovate, and transcend boundaries—just like the stars.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center ">
                    <GlowCard
                        title="Expand Horizons"
                        description="Venture into uncharted territories of knowledge and discover new dimensions of programming."/>
                    <GlowCard
                        title="Reach for the Stars"
                        description="Transform ideas into reality with a bold vision, coding every step of the way."/>            
                    <GlowCard
                        title="Create a Legacy"
                        description="Leave an impact through innovative solutions that echo like cosmic waves across the universe."/>  
                </div>
            </div>
        </section>
    );
};

export default Goals;
