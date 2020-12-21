import React, {useEffect} from 'react';
import {CloseButton, Modal} from "../RegisterModal/RegisterModalStyles";
import '../RegisterModal/RegisterModal.scss'

const LoginModal = ({isLoginModalOpened, setIsLoginModalOpened}) => {

    useEffect(() => {
        if (isLoginModalOpened) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isLoginModalOpened]);

    const closeModal = () => {
        setIsLoginModalOpened(!isLoginModalOpened)
    }

    return (
        <Modal active={isLoginModalOpened}>
            <div className="modal-register-container">
                <CloseButton onClick={closeModal}></CloseButton>
                <h2>ULOGUJTE SE</h2>
                <form>
                    <input type="email" placeholder="Korisničko ime ili email adresa"/>
                    <input type="password" placeholder="Lozinka"/>
                </form>
                <button className="submit-btn">ULOGUJ SE</button>
            </div>
        </Modal>
    );
};

export default LoginModal;
