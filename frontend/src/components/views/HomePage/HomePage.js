import React from 'react'
import HeroImage from "./HeroView/HeroImage";
import HeroSearchForm from "./HeroView/HeroSearchForm";
import TopCategories from "./TopCategories/TopCategories";
import ProductList from "../../sharedComponents/ProductList/ProductList";
import SecondHeroView from "./SecondHeroView/SecondHeroView";
import InfiniteScrollProductList from "./InfiniteScrollProductList/InfiniteScrollProductList";

import {HeroView, ProductListingContainer, HeroView2} from './HomePageStyles'

const HomePage = () => {
    return (
        <>
            <HeroView>
                <HeroImage/>
                <HeroSearchForm/>
            </HeroView>
            <ProductListingContainer>
                <div className="top-categories">
                    <TopCategories/>
                </div>
                <div>
                    <ProductList listHeadingTitle='NAJPOPULARNIJE' displayNum={4}
                        // productDescription="dasdadasd"
                        // productLocation="dsadsa"
                        // productPrice="23"
                        // productTitle="OLA LA"
                        // timePublished="2332"
                    />
                </div>
                <div>
                    <ProductList listHeadingTitle='NAJNOVIJE IZ KATEGORIJE: VOZILA' displayNum={4}/>
                </div>
                <div>
                    <ProductList listHeadingTitle='NAJNOVIJE IZ KATEGORIJE: NEKRETNINE' displayNum={4}/>
                </div>
            </ProductListingContainer>
            <HeroView2>
                <SecondHeroView/>
            </HeroView2>
            <ProductListingContainer>
                <InfiniteScrollProductList/>
            </ProductListingContainer>
        </>
    )
}

export default HomePage