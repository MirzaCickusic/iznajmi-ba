import React from 'react';

const CircleCategory = ({
                            className,
                            icon,
                            index,
                            link,
                            name
                        }) => {
    return (
        <div key={index} className={className}>
            <div className="icon-text">
                <a href={link}><i
                    className={icon}></i></a>
                <span>{name}</span>
            </div>
        </div>
    );
};

export default CircleCategory;
