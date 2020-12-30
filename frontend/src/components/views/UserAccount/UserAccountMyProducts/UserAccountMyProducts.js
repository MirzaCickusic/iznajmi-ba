import React, {useEffect, useState} from 'react';
import './UserAccountMyProducts.scss'
import FirstVisitWelcomeModal from "./FirstVisitWelcomeModal";
import productsService from '../../../../services/products'

const UserAccountMyProducts = () => {

    const [noProductsToShowModal, setNoProductsToShowModal] = useState() //TODO React flicker
    const [welcomeModal, setWelcomeModal] = useState()

    useEffect(() => {
        let visited = localStorage["alreadyVisited"];
        if (visited) {
            setWelcomeModal(false)
        } else {
            localStorage["alreadyVisited"] = true;
            setWelcomeModal(true)

            setTimeout(() => {
                setWelcomeModal(false)
            }, 3000)
        }
    }, [])


    useEffect(async () => {
        const userProducts = [] //await productsService.getUserProducts() TODO povući usera iz
        // global statea

        if (userProducts.length === 0) {
            setNoProductsToShowModal(!noProductsToShowModal)
        }
    }, [])

    const profileWithoutProductsView = () => {
        const img = require('../../../../assets/images/userImages/profile/no-products.png')

        return (
            <div className="no-products-view">
                <img src={img.default}/>
                <h1> JOŠ NISTE OBJAVILI NIJEDAN OGLAS</h1>
                <h1> OBJAVITE VAŠ PRVI OGLAS VEĆ DANAS, POTPUNO BESPLATNO</h1>
                <button>OBJAVITE OGLAS</button>
            </div>
        );
    }

    const profileProducts = () => {
        return (
            <div>
                <h1>list of prodc</h1>
            </div>
        )
    }

    return (
        <div>
            {noProductsToShowModal === true ? profileWithoutProductsView() : profileProducts()}
            <FirstVisitWelcomeModal isModalActive={welcomeModal}/>
        </div>
    );
};

export default UserAccountMyProducts;
