import React from 'react';
import {DummyCategories} from "./DummyCategories";
import './TopCategories.scss'
import styled from 'styled-components'
import CircleCategory from "./CircleCategory";

const TopCategoriesContainer = styled.div`
    h2{
    padding-top: 32px;
    margin: 0;
    text-align: left;
    }
`

const CircleItemGrid = styled.div`
    list-style: none;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(auto-fill, 180px);
    grid-template-columns: repeat(auto-fill, 14.28%);
    justify-content: space-between;

    align-items: center;
    justify-items: center;
`

const TopCategories = () => {

    //TODO Povući ikonu i naziv 14 kategorija sa najviše artikala

    return (
        <TopCategoriesContainer>
            <h2>NAJPOPULARNIJE KATEGORIJE</h2>
            <CircleItemGrid>
                {DummyCategories.map((item, index) => {
                    return (
                        <CircleCategory
                            index={index}
                            className={item.className}
                            link={item.link}
                            icon={item.icon}
                            name={item.name}/>
                    )
                })}
            </CircleItemGrid>

            {/*<button className="button-view-all-categories">POGLEDAJ SVE ></button>*/}
        </TopCategoriesContainer>
    );
};

export default TopCategories;
