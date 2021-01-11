import React, {useEffect, useState} from 'react';
import './CategoryResults.scss'
import styled from "styled-components";
import '../Search/Search.scss'
const Input = styled.input`
    border: none;
    border-bottom: 2px solid #FA6980;
    margin: 0 1rem;
    background-color: inherit;
    font-size:1rem;
    
    :focus{
      outline: none;
    }
`

const CategoryResults = () => {

    const [noProductsToShowModal, setNoProductsToShowModal] = useState() //TODO React flicker

    useEffect(async () => {
        //TODO povući artikle za odabranu kategoriju
        const categoryProducts = []

        if (categoryProducts.length === 0) {
            setNoProductsToShowModal(!noProductsToShowModal)
        }
    }, [])

    const categoryWithoutProductsView = () => {
        const img = require('../../../assets/images/userImages/profile/no-products.png')

        return (
            <div className="empty-category">
                <img src={img.default}/>
                <h1> TRENUTNO NE POSTOJI NITI JEDAN OGLAS ZA OVU KATEGORIJU</h1>
                {/*<h1> OBJAVITE VAŠ PRVI OGLAS VEĆ DANAS, POTPUNO BESPLATNO</h1>*/}
                {/*<button>OBJAVITE OGLAS</button>*/}
            </div>
        );
    }

    return (
        <div className="search-view">
            <div className="search-info">
                <Input type="text" placeholder=" Traži pojam.."/>
                <Input type="text" placeholder=" Lokacija"/>
                <Input type="text" placeholder=" Cijena"/>
            </div>
            <div className="search-results">
                {noProductsToShowModal === true ? categoryWithoutProductsView() : null}
            </div>
        </div>
    );
};

export default CategoryResults;
