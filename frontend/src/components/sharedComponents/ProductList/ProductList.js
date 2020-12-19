import React from 'react';
import '../../../sharedStyles/ProductTile.scss'
import {ProductListItems} from "./DummyProducts";
import {Link} from "react-router-dom";
import styled from 'styled-components'

const ProductListContainer = styled.div`
  
  max-width: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(${props => props.num}, auto);
`

const ProductList = ({
                         listHeadingTitle,
                         displayNum
                     }) => {
    const itemImage = require('../../../assets/images/Image.png')


    return (
        <div className="product-list">
            <h2 className="list-heading-title">{listHeadingTitle}</h2>
            <ProductListContainer num={displayNum}>
                {ProductListItems.map((item, key) => {

                    if (key < displayNum){
                        return (
                            //BestPractice for this routing
                            // https://stackoverflow.com/questions/37669391/how-to-get-rid-of-underline-for-link-component-of-react-router
                            <Link to="/product/12345"
                                  style={{color: 'inherit', textDecoration: 'inherit'}}>
                                <div className="product-item-container" key={key}>
                                    <div className="product-image">
                                        <img src={itemImage.default}/>
                                    </div>

                                    <div className="product-details">
                                        <h2>{item.productTitle}</h2>
                                        <p>{item.productDescription}</p>
                                        <div className="product-details-location-time-price">
                                            <span className="location">{item.productLocation}</span>
                                            <span className="date">{item.timePublished}</span>
                                            <span className="price">{item.productPrice}</span>
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        )
                    }

                })}


            </ProductListContainer>

        </div>
    );
};

export default ProductList;
