import React, {useEffect, useState} from 'react';
import {CloseButton, Modal} from "../RegisterModal/RegisterModalStyles";
import '../RegisterModal/RegisterModal.scss'
import styled from 'styled-components'

const ErrorMessage = styled.div`
    color: red;
    font-size: 1rem;
    font-weight: bold;
`
const LoginModal = ({
                        isLoginModalOpened,
                        setIsLoginModalOpened,
                        handleSubmit,
                        setPassword,
                        setUsernameOrEmail,
                        errorMessageLogin,
                        setErrorMessageLogin
                    }) => {

    const [errorText, setErrorText] = useState('')

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
                <h2>ULOGUJTE SE</h2>
                <CloseButton onClick={closeModal}></CloseButton>
                <form onSubmit={handleSubmit}>
                    <ErrorMessage>{errorMessageLogin}</ErrorMessage>
                    <input type="email" placeholder="Korisničko ime ili email adresa"
                           onChange={e => setUsernameOrEmail(e.target.value)
                           }/>
                    <input type="password" placeholder="Lozinka"
                           onChange={e => setPassword(e.target.value)
                           }/>
                </form>
                <button className="submit-btn" onClick={handleSubmit}>ULOGUJ SE</button>
            </div>
        </Modal>
    );
};

export default LoginModal;
