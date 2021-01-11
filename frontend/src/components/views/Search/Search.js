import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import './Search.scss'

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

const Search = () => {
    return (
        <div className="search-view">
            <div className="search-info">
                <Input type="text" placeholder=" Traži pojam.."/>
                <Input type="text" placeholder=" Lokacija"/>
                <Input type="text" placeholder=" Cijena"/>
            </div>
            <div className="search-results">
                <h1>REZULTAT PRETRAŽIVANJA</h1>
            </div>
        </div>
    );
};

export default Search;
