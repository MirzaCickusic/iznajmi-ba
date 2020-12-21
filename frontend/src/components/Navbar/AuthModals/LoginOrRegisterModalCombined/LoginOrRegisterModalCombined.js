import React, {useEffect} from 'react';
import {CloseButton, Modal} from "../RegisterModal/RegisterModalStyles";
import styled from 'styled-components'

const RegisterContainer = styled.div`
  text-align: center;
`

const LoginOrRegisterModalCombined = ({setPublishProductButtonClicked, publishProductButtonClicked, isLoginModalOpened, setIsLoginModalOpened, isRegisterModalOpened, setIsRegisterModalOpened}) => {

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

    const openLoginModal = () => {
        setPublishProductButtonClicked(!publishProductButtonClicked)
        setIsLoginModalOpened(!isLoginModalOpened)
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
                <form>
                    <h4>Da biste objavili oglas, morate se prvo prijaviti!</h4>
                    <input type="email" placeholder="Korisničko ime ili email adresa"/>
                    <input type="password" placeholder="Lozinka"/>
                </form>
                <button className="submit-btn" onClick={openLoginModal}>ULOGUJ SE</button>
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
