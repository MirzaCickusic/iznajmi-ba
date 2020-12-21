import React, {useEffect} from 'react';
import styled from 'styled-components'
import './RegisterModal.scss'
import {Modal, CloseButton, Checkbox} from "./RegisterModalStyles";

const RegisterModal = ({isRegisterModalOpened, setIsRegisterModalOpened}) => {

    const [thermsAndConditionChecked, setThermsAndConditionChecked] = React.useState(false)

    useEffect(() => {
        if (isRegisterModalOpened) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isRegisterModalOpened]);

    const closeModal = () => {
        setIsRegisterModalOpened(!isRegisterModalOpened)
    }

    const toggleCheckbox = () => {
        setThermsAndConditionChecked(!thermsAndConditionChecked)
    }

    return (
        <Modal active={isRegisterModalOpened} backdrop={isRegisterModalOpened}>
            <div className="modal-register-container">
                <CloseButton onClick={closeModal}></CloseButton>
                <h2>REGISTRACIJA</h2>
                <form>
                    <input type="text" placeholder="Korisničko ime"/>
                    <input type="email" placeholder="Email adresa"/>
                    <input type="password" placeholder="Lozinka"/>
                    <input type="text" placeholder="Grad"/>
                </form>
                <div className="checkbox">
                    <Checkbox active={thermsAndConditionChecked} type="checkbox" name="scales" className="regular-checkbox" checked={thermsAndConditionChecked}/>
                    <label htmlFor="scales" onClick={toggleCheckbox}>Prihvatam <span>uslove korištenja</span></label>
                </div>
                <button className="submit-btn">ZAVRŠI REGISTRACIJU</button>
            </div>
        </Modal>
    );
};

export default RegisterModal;
