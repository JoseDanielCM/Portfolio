// Profile.jsx
import React from 'react';
import ProfileCard from '../InternalSections/ProfileCard';

function Profile() {
    return (
        <section id='Profile' className="main-section  relative h-fit md:h-screen flex items-center justify-center overflow-hidden m-0">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                className="videoProfile absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/public/ProfileBackgroundWithPhoto.mp4" type="video/mp4" />
            </video>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10"></div>

            {/* Content */}
            <div className="w-screen relative z-20 flex flex-col md:flex-row md:items-center justify-center text-white p-0">
                {/* Profile Photo */}
                <div className="profilePhoto w-44 h-44 md:w-1/6 md:h-1/6 rounded-full overflow-hidden flex-shrink-0 mb-4 md:mb-0 relative">
                    <img src="/public/ProfilePhoto.png" alt="Profile Photo" className="w-full h-full object-cover" />
                </div>
                <ProfileCard/>
            </div>
        </section>
    );
}

export default Profile;
