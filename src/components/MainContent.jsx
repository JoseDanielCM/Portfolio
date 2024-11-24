// MainContent.jsx
import React, { useEffect } from 'react';
import Profile from './sections/Profile'
import Goals from './sections/Goals';
// import Projects from './sections/Projects'
// import Mission from './sections/Mission'
import { initScrollObserver } from '../scrollObserver';

function MainContent() {
    useEffect(() => {
        // Llamar la función para inicializar el observer
        const cleanupObserver = initScrollObserver();

        // Limpiar el observer al desmontar el componente
        return cleanupObserver;
    }, []);

    return (
        <main className='p-0 bg-black'>
            <Profile />
            
            <Goals/>
            {/* <Mission/>
            <Projects/>*/}
        </main>
    );
}

export default MainContent;
