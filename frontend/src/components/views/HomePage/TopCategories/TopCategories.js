import React from 'react';
import {DummyCategories} from "./DummyCategories";
import './TopCategories.scss'
import styled from 'styled-components'

const TopCategoriesContainer = styled.div`
    h2{
    padding-top: 32px;
    margin: 0;
    text-align: left;
    }
`

const CircleItemGrid = styled.div`
    list-style: none;
    height: 90%;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(auto-fill, 180px);
    grid-template-columns: repeat(auto-fill, 180px);
    justify-content: space-between;

    align-items: center;
    justify-items: center;
`

const TopCategories = () => {
    return (
        <TopCategoriesContainer>
            <h2>NAJPOPULARNIJE KATEGORIJE</h2>
            <CircleItemGrid>
                {DummyCategories.map((item, index) => {
                    //TODO Kreirati komponentu koja će predstavljati zasebnu kategoriju u gridu
                    return (
                        <div key={index} className={item.className}>
                            <div className="icon-text">
                                <a href={item.link}><i
                                    className={item.icon}></i></a>
                                <span>{item.name}</span>
                            </div>
                        </div>
                    )
                })}
            </CircleItemGrid>

            {/*<button className="button-view-all-categories">POGLEDAJ SVE ></button>*/}
        </TopCategoriesContainer>
    );
};

export default TopCategories;
