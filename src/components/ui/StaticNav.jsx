import React from "react";

export const StaticNav = ({ navItems, className }) => {
    return (
        <div
            className="flex max-w-fit fixed top-3 inset-x-10 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-8 pl-8 py-2 items-center justify-center space-x-5"
        >
            {navItems.map((navItem, idx) => (
                <a
                    key={`link=${idx}`}
                    href={navItem.link}
                    className={`relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 nav-link`}
                >
                    <span className="block sm:hidden">{navItem.icon}</span>
                    <span className="hidden sm:block text-sm">{navItem.name}</span>
                </a>
            ))}
        </div>
    );
};
