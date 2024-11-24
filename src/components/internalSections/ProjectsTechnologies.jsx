import React, { useState } from 'react';

export default function ProjectsTechnologies() {
    // List of technologies with icons
    const technologies = [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
        { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    ];
    // List of projects with associated technologies
    const projects = [
        { id: 1, name: 'Star Wars Data', linkPagina: "https://josedanielcm.github.io/Proyecto_Javascript_CarvajalJose_CondeJuan/", image: '/public/StarWarsImage.png', technologies: ['HTML', 'CSS','JavaScript', 'Bootstrap'] },
        { id: 2, name: 'Library CRUD', linkPagina: "https://josedanielcm.github.io/Proyecto_JavaScript_CarvajalJose/", image: '/public/Library.png', technologies: ['HTML', 'CSS','JavaScript', 'Bootstrap'] },
        { id: 3, name: 'Drone E-commerce', linkPagina: "https://josedanielcm.github.io/DRONE-HIVE/", image: '/public/DroneEcommerce.png', technologies: ['HTML', 'CSS','JavaScript'] },
        { id: 4, name: 'Farm Database',linkPagina: "https://github.com/LuisEderLeon/Finca", image: '/public/ModelDataBase.png', technologies: ['MySQL'] },
        { id: 5, name: 'Portfolio', linkPagina: "https://github.com/JoseDanielCM/react-portfolio", image: '/path/to/blog-page-image.jpg', technologies: ['HTML', 'CSS','JavaScript', 'React','Tailwind'] },
        
    ];

    const [selectedTechnology, setSelectedTechnology] = useState('');

    // FILTER
    const filteredProjects = selectedTechnology
        ? projects.filter(project =>
            project.technologies.includes(selectedTechnology)
        )
        : projects; // Show all projects if no technology is selected

    const getTechIcon = (techName) => {
        const tech = technologies.find(t => t.name === techName);
        return tech ? tech.icon : null;
    };

    return (
        <div className='z-50 relative p-5'>
            <h2 className='text-white text-center text-7xl font-bold pt-20 pb-10'>Technologies</h2>

            {/* TECHNOLOGIES BUTTONS */}
            <div style={{ marginBottom: '20px' }} className='w-full flex justify-center flex-wrap'>
                {technologies.map((tech) => (
                    <button
                        key={tech.name}
                        onClick={() => setSelectedTechnology(tech.name)}
                        style={{
                            margin: '5px',
                            padding: '10px',
                            backgroundColor: tech.name === selectedTechnology ? '#007BFF' : '#000000',
                            backgroundImage: tech.name === selectedTechnology ? `URL("https://i.pinimg.com/originals/cb/62/e6/cb62e60c484779c5086feb47d7739435.jpg")` : `none`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        <img
                            src={tech.icon}
                            alt={tech.name}
                            style={{ width: '70px', height: '70px' }}
                        />
                    </button>
                ))}
                <button
                    onClick={() => setSelectedTechnology('')}
                    style={{
                        margin: '5px',
                        padding: '10px',
                        backgroundColor: '#ff5722',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    <img className='w-16' src="https://img.icons8.com/?size=100&id=9deX0HJ5iAFS&format=png&color=FFFFFF" alt="" />
                </button>
            </div>

            {/* -------------------------------------------------------------------------------------------- */}
            {/* Render filtered projects */}
            <h2 className=' text-center text-7xl font-bold pb-7'>Projects</h2>
            <div className='flex flex-wrap justify-center gap-5 pb-20'>
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        style={{
                            backgroundColor: '#2A1A6E',  // Purple background
                            backgroundImage : 'URL("https://media.tenor.com/ioFQgmwiwIoAAAAd/stars-universe.gif")',
                            color: 'white',
                            borderRadius: '10px',
                            width: '500px',
                            padding: '40px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s ease',
                            cursor: "pointer"
                        }}
                        onClick={() => window.open(`${project.linkPagina}`, "_blank")}

                    >
                        <h3
                            style={{
                                textAlign: 'center',
                                fontSize: '1.5em',
                                marginBottom: '10px',
                                fontWeight: 'bold',
                            }}
                        >
                            {project.name}
                        </h3>

                        {/* Image space */}
                        <div
                            style={{
                                width: '100%',
                                height: '250px',
                                backgroundColor: '#3E2A8A',
                                borderRadius: '8px',
                                marginBottom: '15px',
                            }}
                        >
                            {/* Replace this with an actual image */}
                            <img
                                src={project.image || '/path/to/placeholder-image.jpg'}
                                alt={project.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            />
                        </div>

                        {/* Technologies Space */}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '8px',
                                marginBottom: '15px',
                            }}
                        >
                            {project.technologies.map((techName) => {
                                const techIcon = getTechIcon(techName);
                                return (
                                    <img
                                        key={techName}
                                        src={techIcon}
                                        alt={techName}
                                        title={techName}
                                        style={{ width: '50px', height: '50px' }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
