import React from 'react';
import {Modal, CenterContainer} from "../../../Navbar/AuthModals/RegisterModal/RegisterModalStyles";

const FirstVisitWelcomeModal = ({isModalActive}) => {

    return (
        <Modal active={isModalActive}>
            <CenterContainer>
                <i className="fas fa-check-circle fa-10x"
                   style={{margin: "3rem auto", color: "#72ACFF"}}></i>
                <h1 style={{margin: "auto"}}>Čestitamo!</h1>
                <h1 style={{marginBottom:"3rem"}}>Uspješno ste registrovali profil</h1>
            </CenterContainer>
        </Modal>
    );
};

export default FirstVisitWelcomeModal;
