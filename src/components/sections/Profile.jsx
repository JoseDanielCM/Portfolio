// Profile.jsx
import React from 'react';
import ProfileCard from '../InternalSections/ProfileCard';
import { getPublicUrl } from '../../utils/utils'; 

function Profile() {
    return (
        <section id='Profile' className="main-section  relative h-fit md:h-screen flex items-center justify-center overflow-hidden m-0">
            {/* BACKGROUND VIDEO */}
            <video
                autoPlay
                muted
                loop
                className="videoProfile absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src={getPublicUrl("profileBackground.mp4")} type="video/mp4" />
            </video>

            {/* DARK GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10"></div>

            {/* CONTENT */}
            <div className="w-screen relative z-20 flex flex-col md:flex-row md:items-center justify-center text-white p-0">
                {/* PROFILEPHOTO */}
                <div className="profilePhoto w-44 h-44 md:w-1/6 md:h-1/6 rounded-full overflow-hidden flex-shrink-0 mb-4 md:mb-0 relative">
                    <img src={getPublicUrl("ProfilePhoto.png")} alt="Profile Photo" className="w-full h-full object-cover" />
                </div>
                <ProfileCard/>
            </div>
        </section>
    );
}

export default Profile;
