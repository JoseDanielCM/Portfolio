import React from "react";
import { StaticNav } from "./ui/StaticNav";

export function Nav() {
    const navItems = [
        {
            name: "Profile",
            link: "#Profile",
            icon: <i className="fas fa-user"></i>, // Ícono de usuario
        },
        {
            name: "Goals",
            link: "#Goals",
            icon: <i className="fas fa-bullseye"></i>, // Ícono de objetivo
        },
        {
            name: "Mission",
            link: "#Mission",
            icon: <i className="fas fa-rocket"></i>, // Ícono de cohete
        },
        {
            name: "Projects",
            link: "#Projects",
            icon: <i className="fas fa-project-diagram"></i>, // Ícono de proyectos
        },
    ];

    return (
        <div className="relative w-full">
            <StaticNav navItems={navItems} />
        </div>
    );
}

export default Nav;
