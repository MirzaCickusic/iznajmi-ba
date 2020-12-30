import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import './RegisterModal.scss'
import {Modal, CloseButton, Checkbox} from "./RegisterModalStyles";
import registerService from '../../../../services/register'
import loginService from "../../../../services/login";

const RegisterModal = ({isRegisterModalOpened, setIsRegisterModalOpened}) => {

    const [thermsAndConditionChecked, setThermsAndConditionChecked] = useState(false)
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        password: '',
        city: ''
    })

    let history = useHistory()
    const { username } = useParams()

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

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const user = await registerService.register(userInfo)

            window.localStorage.setItem(
                'loggedAppUser', JSON.stringify(user))

            loginService.setToken(user.token)
            // setUser(user)
            closeModal()
            history.push(`/dashboard/${user.username}`)

        } catch (exception) {
            console.log("Error when registering")
        }
    }

    return (
        <Modal active={isRegisterModalOpened}>
            <div className="modal-register-container">
                <CloseButton onClick={closeModal}></CloseButton>
                <h2>REGISTRACIJA</h2>
                <form onSubmit={handleRegister}>
                    <input type="text" placeholder="Korisničko ime" value={userInfo.username}
                           onChange={e => setUserInfo({...userInfo, username: e.target.value})}/>
                    <input type="email" placeholder="Email adresa" value={userInfo.email}
                           onChange={e => setUserInfo({...userInfo, email: e.target.value})}/>
                    <input type="password" placeholder="Lozinka" value={userInfo.password}
                           onChange={e => setUserInfo({...userInfo, password: e.target.value})}/>
                    <input type="text" placeholder="Grad" value={userInfo.city}
                           onChange={e => setUserInfo({...userInfo, city: e.target.value})}/>
                </form>
                <div className="checkbox">
                    <Checkbox active={thermsAndConditionChecked} type="checkbox" name="scales"
                              className="regular-checkbox" checked={thermsAndConditionChecked}
                              onClick={toggleCheckbox}/>
                    <label htmlFor="scales" onClick={toggleCheckbox}>Prihvatam <span>uslove korištenja</span></label>
                </div>
                <button className="submit-btn" onClick={handleRegister}>ZAVRŠI REGISTRACIJU</button>
            </div>
        </Modal>
    );
};

export default RegisterModal;
