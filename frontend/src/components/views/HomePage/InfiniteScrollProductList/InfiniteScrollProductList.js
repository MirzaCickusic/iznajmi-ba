import React from 'react';
import '../../../../sharedStyles/ProductTile.scss'
import {DummyProducts} from "./DummyProducts";

const InfiniteScrollProductList = () => {
    const itemImage = require('../../../../assets/images/Image.png')

    return (
        <div className="product-list">
            <h2 className="list-heading-title">REZULTATI IZ SVIH KATEGORIJA</h2>
            <div className="product-list-container">
                {DummyProducts.map((item, key) => {
                    return (
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
                    )
                })}
            </div>
        </div>
    );
};

export default InfiniteScrollProductList;
