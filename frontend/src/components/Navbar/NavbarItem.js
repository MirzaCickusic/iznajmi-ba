import React from 'react';

const NavbarItem = ({index, className, url, title, link}) => {

    return (
        <li key={index}>
            <a className={className} href={url}>
                {title}
            </a>
        </li>

    );
};

export default NavbarItem;
