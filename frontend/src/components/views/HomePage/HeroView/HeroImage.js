import React from 'react';
import styled from "styled-components";

const HeroImage = () => {

    const heroImage = require('../../../../assets/images/Hero.png')

    const HeroImage = styled.img`
    max-width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    object-fit: fill;

`
    return (
        <HeroImage src={heroImage.default}/>
    );
};

export default HeroImage;
