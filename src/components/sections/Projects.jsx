import React from 'react'
import  ProjectsTechnologies  from '../InternalSections/ProjectsTechnologies'

export default function Projects() {
    return (
        <section id='Projects' className="ralewayBold main-section relative overflow-hidden min-h-screen " 
        style={{
            backgroundImage: `
                linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 20%),
                linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 20%),
                URL("/public/SunBackground.png")
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <ProjectsTechnologies />
        </section>
    )
}
