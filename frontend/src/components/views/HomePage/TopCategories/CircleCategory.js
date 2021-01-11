import React from 'react';

const CircleCategory = ({
                            className,
                            image,
                            index,
                            link,
                            name
                        }) => {
    return (
        <div key={index} className={className}>
            <div className="icon-text">
                <a href={link}><img src={image}/></a>
                <span>{name}</span>
            </div>
        </div>
    );
};

export default CircleCategory;
