import React, {useState} from 'react';
import {DummyUser} from "./DummyUser";
import './UserProfile.scss'
import ReactStars from "react-rating-stars-component/dist/react-stars";
import ProductList from "../../sharedComponents/ProductList/ProductList";
import styled from 'styled-components'
import {SingleProductDummyReviews} from "../SingleProductView/DummyProductDetails";

const starRating = {
    size: 20,
    value: 4.5,
    edit: false,
    isHalf: true,
    emptyIcon: <i className="far fa-star"></i>,
    halfIcon: <i className="fas fa-star-half-alt"></i>,
    filledIcon: <i className="fas fa-star"></i>
};

const Profile = () => {

    const [status, setStatus] = useState(true)

    const ProductsView = styled.div`
        display: flex;
        padding: 1rem;
        color: ${props => props.active ? "#FA6980" : "#202124"};
        font-weight: bold;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        border-bottom: 2px solid ${props => props.active ? "#FA6980" : "gray"};
        background-color: #F6F8F9;
`
    const ReviewView = styled.div`
        display: flex;
        padding: 1rem;
        color: ${props => props.active ? "#202124" : "#FA6980"};
        font-weight: bold;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        border-bottom: 2px solid ${props => props.active ? "#202124" : "#FA6980"};
        background-color: #F6F8F9;
`

    const profileImage = require("../../../assets/images/userImages/profile/christopher-campbell-28567-unsplash.png").default

    const productView = () => {
        <div>
            <h1>Proizvodi</h1>
        </div>
    }

    const reviewView = () => {
        <div>
            <h1>Opa</h1>
        </div>
    }

    return (
        <div className="user-profile">
            <div className="user-info">
                <img src={profileImage}/>
                <div>
                    <h3>{DummyUser.userName}</h3>
                    <p className="date">Član od {DummyUser.profileCreatedDate}</p>
                    <p className="location">
                        <i className="fas fa-map-marker-alt"></i>{DummyUser.userLocation}</p>
                    <div className="verification-status">
                        <p>Email adresa</p>
                        <p style={{color: 'lightblue'}}>{DummyUser.verification.email ? 'Verifikovano' : 'Ne' +
                            ' verifikovano'}</p>
                        <p>Broj telefona</p>
                        <p style={{color: 'lightblue'}}>{DummyUser.verification.phone ? 'Verifikovano' : 'Ne verifikovano'}</p>
                    </div>
                </div>
                <button>POŠALJI PORUKU</button>
            </div>
            <div className="user-products-reviews">
                <div className="toggle-buttons">
                    <ProductsView active={status} onClick={event => setStatus(!status)}>
                        <p>OGLASI</p>
                        <p>6</p>
                    </ProductsView>
                    <ReviewView active={status} onClick={event => setStatus(!status)}>
                        <p>DOJAM</p>
                        <ReactStars/>
                    </ReviewView>
                </div>
                {/*{status === true ? <h1>proo</h1> : <h1>heo</h1>}*/}
                {status ? (<>
                        <ProductList displayNum={3}/>
                        <ProductList displayNum={3}/>
                    </>
                ) : (<div className="reviewss">
                    {SingleProductDummyReviews.map((i, k) => {
                        return (
                            <div className="single-review">
                                <div className="image-name-stars">
                                    <img src={profileImage}/>
                                    <h3>{i.userName}</h3>
                                    <p>Dojam za oglas: <b>{i.productReviewed}</b></p>
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
                </div>)}
            </div>
        </div>
    );
};

export default Profile;
