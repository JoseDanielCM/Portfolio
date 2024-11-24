import React from "react";
import { StaticNav } from "./ui/StaticNav";

export function Nav() {
    const navItems = [
        {
            name: "Profile",
            link: "#Profile",
            icon: <i className="fas fa-user"></i>,
        },
        {
            name: "Goals",
            link: "#Goals",
            icon: <i className="fas fa-bullseye"></i>,
        },
        {
            name: "Mission",
            link: "#Mission",
            icon: <i className="fas fa-rocket"></i>,
        },
        {
            name: "Projects",
            link: "#Projects",
            icon: <i className="fas fa-project-diagram"></i>,
        },
    ];

    return (
        <div className="relative w-full">
            <StaticNav navItems={navItems} />
        </div>
    );
}

export default Nav;
