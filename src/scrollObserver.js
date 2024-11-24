export const initScrollObserver = () => {

    const sections = document.querySelectorAll('.main-section');
    console.log(sections);
    
    // Crear un observer para detectar cuando una sección entra en el viewport
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const id = entry.target.getAttribute('id');
                
                const navLink = document.querySelector(`a[href="#${id}"]`);

                if (entry.isIntersecting) {
                    // Cuando la sección entra en el viewport, marcar el enlace como activo
                    navLink.classList.add('active');
                } else {
                    // Cuando la sección sale del viewport, quitar la clase activa
                    navLink.classList.remove('active');
                }
            });
        },
        {
            threshold: getDynamicThreshold() // Umbral dinámico
        }
    );

    // Observar todas las secciones
    sections.forEach((section) => observer.observe(section));

    // Limpiar el observer cuando ya no sea necesario
    return () => {
        observer.disconnect();
    };
};

// Función para determinar el umbral dinámicamente
function getDynamicThreshold() {
    const viewportHeight = window.innerHeight;

    // Obtener el tamaño de la sección más alta
    const maxSectionHeight = Math.max(...Array.from(document.querySelectorAll('.main-section')).map(section => section.offsetHeight));

    // Si la sección es más alta que el viewport, podemos reducir el umbral
    if (maxSectionHeight > viewportHeight) {
        // Si la sección es muy alta, utiliza un umbral más bajo (ej. 0.1 o 0.2)
        return 0.2;
    } else {
        // Si la sección es pequeña o similar al viewport, usa el umbral de 0.5
        return 0.5;
    }
}
