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
        { id: 1, name: 'Star Wars Data', linkPagina: "https://josedanielcm.github.io/Proyecto_Javascript_CarvajalJose_CondeJuan/", image: '/public/StarWarsImage.png', technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'] },
        { id: 2, name: 'Library CRUD', linkPagina: "https://josedanielcm.github.io/Proyecto_JavaScript_CarvajalJose/", image: '/public/Library.png', technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'] },
        { id: 3, name: 'Drone E-commerce Movil', linkPagina: "https://josedanielcm.github.io/DRONE-HIVE/", image: '/public/DroneEcommerce.png', technologies: ['HTML', 'CSS', 'JavaScript'] },
        { id: 4, name: 'Farm Database', linkPagina: "https://github.com/LuisEderLeon/Finca", image: '/public/ModelDataBase.png', technologies: ['MySQL'] },
        { id: 5, name: 'Portfolio', linkPagina: "https://github.com/JoseDanielCM/finalFinalPortfolio", image: '/public/PortfolioImage.png', technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'] },

    ];

    const [selectedTechnology, setSelectedTechnology] = useState('');

    // FILTER
    const filteredProjects = selectedTechnology
        ? projects.filter(project =>
            project.technologies.includes(selectedTechnology)
        )
        : projects;

    const getTechIcon = (techName) => {
        const tech = technologies.find(t => t.name === techName);
        return tech ? tech.icon : null;
    };

    return (
    <div className='z-50 relative p-5'>
        <h2 className='text-white text-center text-5xl sm:text-6xl md:text-7xl font-bold pt-20 pb-10'>Technologies</h2>

        {/* TECHNOLOGIES BUTTONS */}
        <div className='mb-5 w-full flex justify-center flex-wrap'>
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
                className="m-1 p-3 bg-orange-600 text-white rounded-lg cursor-pointer"
            >
                <img className='w-16' src="https://img.icons8.com/?size=100&id=9deX0HJ5iAFS&format=png&color=FFFFFF" alt="" />
            </button>
        </div>

        {/* -------------------------------------------------------------------------------------------- */}
        {/* FILTERED PROJECTS */}
        <h2 className=' text-center text-5xl sm:text-6xl md:text-7xl font-bold pb-7'>Projects</h2>
        <div className='flex flex-wrap justify-center gap-5 pb-20'>
            {filteredProjects.map((project) => (
                <div
                    key={project.id}
                    className="bg-cover bg-center text-white rounded-xl w-[500px] p-10 shadow-lg cursor-pointer"
                    style={{ backgroundImage: 'url("https://media.tenor.com/ioFQgmwiwIoAAAAd/stars-universe.gif")' }}
                    onClick={() => window.open(`${project.linkPagina}`, "_blank")}
                >
                    <h3 className="text-center text-2xl mb-2 font-bold">
                        {project.name}
                    </h3>

                    {/* Image space */}
                    <div className="w-full h-[250px] bg-[#3E2A8A] rounded-lg mb-4">
                        <img
                            src={project.image || '/path/to/placeholder-image.jpg'}
                            alt={project.name}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    {/* PROJECTS TECHNOLOGIES */}
                    <div className="flex justify-center gap-2 mb-4">
                        {project.technologies.map((techName) => {
                            const techIcon = getTechIcon(techName);
                            return (
                                <img
                                    key={techName}
                                    src={techIcon}
                                    alt={techName}
                                    title={techName}
                                    className="w-[50px] h-[50px]"
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
