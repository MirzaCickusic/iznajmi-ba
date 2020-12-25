import React, {useEffect, useState} from 'react';
import {GuestUserMenuItems, LoggedUserMenuItems} from "./NavbarItems"
import {Button} from "../sharedComponents/Button/Button"
import './Navbar.scss'
import {Link} from "react-router-dom";
import NavbarItem from "./NavbarItem";
import RegisterModal from "./AuthModals/RegisterModal/RegisterModal";
import LoginModal from "./AuthModals/LoginModal/LoginModal";
import LoginOrRegisterModalCombined
    from "./AuthModals/LoginOrRegisterModalCombined/LoginOrRegisterModalCombined";
import loginService from '../../services/login'
import styled from 'styled-components'

const AvatarImage = styled.div`
    max-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
    
    img{
    height: 50px;
    border-radius: 50%;
    }
    
`
const Navbar = () => {
    const [navMenuMobileClicked, setNavMenuMobileClicked] = useState(false)
    const [user, setUser] = useState(null)
    const [isRegisterModalOpened, setIsRegisterModalOpened] = useState(false)
    const [isLoginModalOpened, setIsLoginModalOpened] = useState(false)
    const [errorMessageLogin, setErrorMessageLogin] = useState()
    const [publishProductButtonClicked, setPublishProductButtonClicked] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedIznajmiBaUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            // noteService.setToken(user.token) TODO Implementirati postavljanje tokena
        }
    }, [])

    const handleClick = () => {
        setNavMenuMobileClicked(!navMenuMobileClicked)
    }

    const toggleModalLogin = () => {
        setIsLoginModalOpened(!isLoginModalOpened)
    }

    const toggleModalRegister = () => {
        setIsRegisterModalOpened(!isRegisterModalOpened)
    }
    const toggleModalWhenPublishProductButtonClicked = () => {
        setPublishProductButtonClicked(!publishProductButtonClicked)
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({
                username, password
            })

            window.localStorage.setItem(
                'loggedNoteAppUser', JSON.stringify(user))

            loginService.setToken(user.token)
            setUser(user)
            setUsername('')
            setPassword('')
            setIsLoginModalOpened(!isLoginModalOpened)
            setErrorMessageLogin('')
        } catch (exception) {
            // setErrorMessage('wrong credentials')
            // setTimeout(() => {
            //     setErrorMessage(null)
            // }, 5000)
            setErrorMessageLogin('Podaci koje ste unijeli nisu ispravni')
        }
    }

    const navbarItemsForGuestUser = () => {
        return (
            <>
                <li>
                    <a className="nav-links" href={"/search"}>
                        PRETRAGA
                    </a>
                </li>
                <li onClick={toggleModalLogin}>
                    <a className="nav-links" href={"javascript:;"}>
                        ULOGUJTE SE
                    </a>
                </li>
                <li onClick={toggleModalRegister}>
                    <a className="nav-links">
                        REGISTRUJTE SE
                    </a>
                </li>
                <li>
                    <a className="nav-links" href={"/about"}>
                        ŠTA JE IZNAJMI.BA?
                    </a>
                </li>
            </>
        )
    }

    const navbarItemsForLoggedUser = () => {
        return (
            <>
                <li>
                    <a className="nav-links" href={"/search"}>
                        PRETRAGA
                    </a>
                </li>
                <li>
                    <a className="nav-links" href={"/about"}>
                        ŠTA JE IZNAJMI.BA?
                    </a>
                </li>
                <li>
                    <a className="nav-links" href={"/messages"}>
                        PORUKE
                    </a>
                </li>
            </>)
    }

    return (
        <>
            <nav className="NavbarItems">
                <Link to="/" style={{textDecoration: 'none'}}>
                    <h1 className="navbar-logo">Iznajmi.ba<i className="fas fa-retweet"></i>
                    </h1>
                </Link>
                <div className="menu-icon" onClick={() => handleClick()}>
                    <i className={navMenuMobileClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={navMenuMobileClicked ? 'nav-menu active' : 'nav-menu'}>
                    {user === null
                        ? navbarItemsForGuestUser()
                        : navbarItemsForLoggedUser()}
                </ul>
                <Button onClick={toggleModalWhenPublishProductButtonClicked}>OBJAVITE
                    OGLAS</Button>
                {user !== null ?
                    <AvatarImage>
                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar"/>
                        <i className="fas fa-chevron-down"></i>
                    </AvatarImage>
                    : null}
            </nav>
            <RegisterModal isRegisterModalOpened={isRegisterModalOpened}
                           setIsRegisterModalOpened={setIsRegisterModalOpened}/>
            <LoginModal isLoginModalOpened={isLoginModalOpened}
                        setIsLoginModalOpened={setIsLoginModalOpened}
                        handleSubmit={handleLogin}
                        setUsernameOrEmail={setUsername}
                        setPassword={setPassword}
                        errorMessageLogin={errorMessageLogin}
                        setErrorMessageLogin={setErrorMessageLogin}
            />
            <LoginOrRegisterModalCombined
                publishProductButtonClicked={publishProductButtonClicked}
                setPublishProductButtonClicked={setPublishProductButtonClicked}
                isRegisterModalOpened={isRegisterModalOpened}
                setIsRegisterModalOpened={setIsRegisterModalOpened}
                handleSubmit={handleLogin}
                setUsernameOrEmail={setUsername}
                setPassword={setPassword}
            />
        </>
    )
}
export default Navbar