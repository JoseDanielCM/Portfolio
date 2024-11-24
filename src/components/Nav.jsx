import React from "react";
import { StaticNav } from "./ui/StaticNav";
export function Nav() {
    const navItems = [
        {
            name: "Profile",
            link: "#Profile",
        },
        {
            name: "Goals",
            link: "#Goals",
        },
        {
            name: "Mission",
            link: "#Mission",
        },
        {
            name: "Projects",
            link: "#Projects",
        },
    ];
    return (
        (<div className="relative  w-full">
            <StaticNav navItems={navItems} />
        </div>)
    );
}

export default Nav; // Ensure this line is present
