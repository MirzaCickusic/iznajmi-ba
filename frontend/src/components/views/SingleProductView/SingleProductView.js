import React from 'react';
import './SingleProductView.scss'
import {
    SingleProductDummyProduct,
    SingleProductDummyUser,
    SingleProductDummyReviews
} from "./DummyProductDetails";
import ReactStars from "react-rating-stars-component/dist/react-stars";
import ProductList from "../../sharedComponents/ProductList/ProductList";
import {Link} from "react-router-dom";

const starRating = {
    size: 20,
    value: 4.5,
    edit: false,
    isHalf: true,
    emptyIcon: <i className="far fa-star"></i>,
    halfIcon: <i className="fas fa-star-half-alt"></i>,
    filledIcon: <i className="fas fa-star"></i>
};

const SingleProductView = () => {

    const productImage = require("../../../assets/images/productImages/Aparment.png").default
    const userImage = require("../../../assets/images/userImages/christopher-campbell-28567-unsplash.png").default

    return (
        <div className="product-view-container">
            <div className="product-images-info-reservation-user-location">

                <div className="images">
                    <img src={productImage}/>
                </div>

                <div className="info">
                    <h1>{SingleProductDummyProduct.productTitle}</h1>
                    <h2>{SingleProductDummyProduct.productShortDescription}</h2>
                    <h3><i className="fas fa-map-marker-alt"></i>{SingleProductDummyProduct.productLocation}
                    </h3>
                    <ReactStars {...starRating}/>
                    {/*<h3>{SingleProductDummyProduct.review}</h3>*/}
                    <p>{SingleProductDummyProduct.productPrice}</p>
                    <button>POŠALJI PORUKU VLASNIKU</button>
                </div>

                <div className="reservation">
                    <h2>Rezerviši termin</h2>
                    <div className="date-day">
                        <div className="date-picker">
                            <p>Datum preuzimanja</p>
                            <input type="date"/>
                        </div>
                        <div className="day-picker">
                            <p className="text">Trajanje</p>
                            <input type="text"/>
                            <p className="days">dana</p>
                        </div>
                    </div>
                    <button>POŠALJI REZERVACIJU</button>
                </div>

                <div className="user">
                    <img src={userImage}/>
                    <div className="user-info">
                        <h2>{SingleProductDummyUser.userName}</h2>
                        <h4>Član od {SingleProductDummyUser.userCreatedDate}</h4>
                        <Link to="rokiboy"
                              style={{color: 'inherit', textDecoration: 'inherit'}}><p>Pogledaj
                            profil</p>
                        </Link>
                    </div>
                </div>

                <div className="location">
                    <h3>HERE GOES MAP</h3>
                </div>
            </div>
            <div className="description-reviews">
                <div className="description">
                    <h1>Opis</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis
                        viverra conubia ligula inceptos laoreet libero tortor, nascetur non
                        habitasse iaculis tempor nec egestas fames augue, platea porta integer
                        nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus
                        lobortis orci mi curae himenaeos quis, senectus curabitur ullamcorper a
                        porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium vestibulum
                        dui gravida in potenti interdum, class rhoncus neque.<br/><br/>
                        Ullamcorper porttitor non pharetra cursus nisl mollis pellentesque primis
                        penatibus platea, dictum himenaeos eget mi bibendum ad molestie aliquet
                        curae quis quisque, nunc duis ac at elementum dui integer viverra tempus.
                        Lacinia bibendum diam senectus egestas nec molestie convallis aenean hac
                        tempus, vivamus purus congue euismod fringilla cursus donec est eu blandit
                        platea, feugiat vitae netus orci habitant accumsan placerat morbi nostra.
                        Quam fringilla sociis suspendisse quis ultricies dis tellus cum, litora
                        aliquet.</p>
                </div>
                <div className="reviews">
                    <h1>Dojmovi</h1>
                    {SingleProductDummyReviews.map((i, k) => {
                        return (
                            <div className="single-review">
                                <div className="image-name-stars">
                                    <img src={userImage}/>
                                    <h3>{i.userName}</h3>
                                    <ReactStars {...starRating}/>
                                </div>
                                <div className="description">
                                    <p>In hac habitasse platea dictumst. Sed nec venenatis odio.
                                        Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus
                                        luctus massa vitae lobortis. Duis consequat, nunc a pretium
                                        imperdiet, neque est rhncus massa, tristique rutrum nisl
                                        risus at libero.</p>
                                </div>
                            </div>
                        )

                    })}
                </div>
            </div>
            {/*<ProductList/>*/}
        </div>
    );
};

export default SingleProductView;
