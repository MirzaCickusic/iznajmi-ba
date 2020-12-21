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


const Navbar = () => {
    const [navMenuMobileClicked, setNavMenuMobileClicked] = useState(false)
    const [user, setUser] = useState(null)
    const [isRegisterModalOpened, setIsRegisterModalOpened] = useState(false)
    const [isLoginModalOpened, setIsLoginModalOpened] = useState(false)
    const [publishProductButtonClicked, setPublishProductButtonClicked] = useState(false)

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
        console.log(isLoginModalOpened)
    }

    const toggleModalRegister = () => {
        setIsRegisterModalOpened(!isRegisterModalOpened)
    }
    const toggleModalWhenPublishProductButtonClicked = () => {
        setPublishProductButtonClicked(!publishProductButtonClicked)
    }

    return (
        <>
            <nav className="NavbarItems">
                <Link to="/" style={{textDecoration: 'none'}}>
                    <h1 className="navbar-logo">Iznajmi.ba<i className="fas fa-retweet"></i></h1>
                </Link>
                <div className="menu-icon" onClick={() => handleClick()}>
                    <i className={navMenuMobileClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={navMenuMobileClicked ? 'nav-menu active' : 'nav-menu'}>
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

                    {/*{user === null ?*/}
                    {/*    GuestUserMenuItems.map((item, index) => {*/}
                    {/*        return (*/}
                    {/*            <NavbarItem className={item.className} url={item.url} index={index}*/}
                    {/*                        title={item.title} link={item.link}/>*/}
                    {/*        )*/}
                    {/*    })*/}
                    {/*    : LoggedUserMenuItems.map((item, index) => {*/}
                    {/*        return (*/}
                    {/*            <li key={index}>*/}
                    {/*                <a*/}
                    {/*                    className={item.className}*/}
                    {/*                    href={item.url}>*/}
                    {/*                    {item.title}*/}
                    {/*                </a>*/}
                    {/*            </li>*/}
                    {/*        )*/}
                    {/*    })*/}

                    {/*}*/}
                </ul>
                <Button onClick={toggleModalWhenPublishProductButtonClicked}>OBJAVITE OGLAS</Button>
            </nav>
            <RegisterModal isRegisterModalOpened={isRegisterModalOpened}
                           setIsRegisterModalOpened={setIsRegisterModalOpened}/>
            <LoginModal isLoginModalOpened={isLoginModalOpened}
                        setIsLoginModalOpened={setIsLoginModalOpened}/>
            <LoginOrRegisterModalCombined
                publishProductButtonClicked={publishProductButtonClicked}
                setPublishProductButtonClicked={setPublishProductButtonClicked}
                isLoginModalOpened={isLoginModalOpened}
                setIsLoginModalOpened={setIsLoginModalOpened}
                isRegisterModalOpened={isRegisterModalOpened}
                setIsRegisterModalOpened={setIsRegisterModalOpened}/>
        </>
    )
}
export default Navbar