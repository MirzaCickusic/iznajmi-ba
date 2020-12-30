import React, {useEffect} from 'react';
import {CloseButton, Modal} from "../RegisterModal/RegisterModalStyles";
import styled from 'styled-components'
import {ErrorMessage} from "../LoginModal/LoginModal";

const RegisterContainer = styled.div`
  text-align: center;
`

const LoginOrRegisterModalCombined = ({
                                          setPublishProductButtonClicked,
                                          publishProductButtonClicked,
                                          isRegisterModalOpened,
                                          setIsRegisterModalOpened,
                                          handleSubmit,
                                          setPassword,
                                          setUsernameOrEmail,
                                          errorMessageLogin
                                      }) => {

    useEffect(() => {
        if (publishProductButtonClicked) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [publishProductButtonClicked]);

    const closeModal = () => {
        setPublishProductButtonClicked(!publishProductButtonClicked)
    }

    const openRegisterModal = () => {
        setPublishProductButtonClicked(!publishProductButtonClicked)
        setIsRegisterModalOpened(!isRegisterModalOpened)
    }

    return (
        <Modal active={publishProductButtonClicked}>
            <div className="modal-register-container">
                <CloseButton onClick={closeModal}></CloseButton>
                <h2>PRIJAVA</h2>
                <form onSubmit={handleSubmit}>
                    <h4>Da biste objavili oglas, morate se prvo prijaviti!</h4>
                    <ErrorMessage>{errorMessageLogin}</ErrorMessage>
                    <input type="email" placeholder="Korisničko ime ili email adresa"
                           onChange={e => setUsernameOrEmail(e.target.value)}/>
                    <input type="password" placeholder="Lozinka"
                           onChange={e => setPassword(e.target.value)}/>
                </form>
                <button className="submit-btn" onClick={handleSubmit}>ULOGUJ SE</button>
                <RegisterContainer>
                    <h4>Nemate profil? Napravite svoj za manje od 5 minuta.</h4>
                    <button className="submit-btn" onClick={openRegisterModal}>REGISTRUJTE SE
                    </button>
                </RegisterContainer>
            </div>
        </Modal>
    );
};

export default LoginOrRegisterModalCombined;
