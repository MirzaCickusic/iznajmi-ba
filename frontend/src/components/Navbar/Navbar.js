import React, {useEffect, useState} from 'react';
import {GuestUserMenuItems, LoggedUserMenuItems} from "./NavbarItems"
import {Button} from "../sharedComponents/Button/Button"
import './Navbar.scss'
import {Link} from "react-router-dom";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
    const [clicked, changeClicked] = useState(false)
    const [user, setUser] = useState(null)

    const handleClick = () => {
        changeClicked(!clicked)
    }

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedIznajmiBaUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            // noteService.setToken(user.token) TODO Implementirati postavljanje tokena
        }
    }, [])

    return (
        <nav className="NavbarItems">
            <Link to="/" style={{textDecoration: 'none'}}>
                <h1 className="navbar-logo">Iznajmi.ba<i className="fas fa-retweet"></i></h1>
            </Link>
            <div className="menu-icon" onClick={() => handleClick()}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {user === null ?
                    GuestUserMenuItems.map((item, index) => {
                        return (
                            <NavbarItem className={item.className} url={item.url} index={index}
                                        title={item.title} link={item.link}/>
                        )
                    })
                    : LoggedUserMenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a
                                    className={item.className}
                                    href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })

                }
            </ul>
            <Button>OBJAVITE OGLAS</Button>
        </nav>
    )
}
export default Navbar