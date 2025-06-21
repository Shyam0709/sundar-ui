import React from 'react';

interface NavbarProps {
    title: string;
    links: {
        label: string;
        href: string;
    }[];
    backgroundColor?: string;
    textColor?: string;
}
declare const Navbar: React.FC<NavbarProps>;

export { Navbar };
