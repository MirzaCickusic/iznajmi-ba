import React from 'react';
import ProductList from "../../../sharedComponents/ProductList/ProductList";
import styled from 'styled-components'

const SecondHeroView = () => {

    const heroImage = require('../../../../assets/images/SecongHeroImage.png')

    const SecondHeroContainer = styled.div`
    display: grid;
    grid-template-rows: 40% 55%;
`
    const HeroImage = styled.img`
    max-width: 100%;
    margin: 0;
    padding: 0;
`
    const HeroProducts = styled.div`
    padding: 32px 40px;
`

    return (
        <SecondHeroContainer>
            <HeroImage src={heroImage.default}/>
            <HeroProducts>
                <ProductList displayNum={4}/>
            </HeroProducts>
        </SecondHeroContainer>
    );
};

export default SecondHeroView;
