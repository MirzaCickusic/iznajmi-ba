import React, {useEffect, useState} from 'react';
import './UserAccount.scss'
import UserAccountMessages from "./UserAccountMessages/UserAccountMessages";
import UserAccountMyProducts from "./UserAccountMyProducts/UserAccountMyProducts";
import UserAccountEditProfile from "./UserAccountEditProfile/UserAccountEditProfile";
import FirstVisitWelcomeModal from "./UserAccountMyProducts/FirstVisitWelcomeModal";

const UserAccount = () => {

    const [activeView, setActiveView] = useState({
        messages: false,
        myProducts: true,
        editProfile: false
    })

    const toggleView = (view) => {
        if (view === 1) {
            setActiveView({
                messages: true,
                myProfile: false,
                editProfile: false
            })
        }
        if (view === 2) {
            setActiveView({
                messages: false,
                myProducts: true,
                editProfile: false
            })
        }
        if (view === 3) {
            setActiveView({
                messages: false,
                myProfile: false,
                editProfile: true
            })
        }
    }

    return (
        <div>
            <div className="user-account-nav">
                <ul>
                    <li className={activeView.messages ? 'underline' : ''}
                        onClick={() => toggleView(1)}>PORUKE
                    </li>
                    <li className={activeView.myProducts ? 'underline' : ''}
                        onClick={() => toggleView(2)}>MOJI OGLASI
                    </li>
                    <li className={activeView.editProfile ? 'underline' : ''}
                        onClick={() => toggleView(3)}>UREDI PROFIL
                    </li>
                </ul>
            </div>
            {activeView.messages === true ? <UserAccountMessages/> : null}
            {activeView.myProducts === true ? <UserAccountMyProducts/> : null}
            {activeView.editProfile === true ? <UserAccountEditProfile/> : null}
        </div>
    );
};

export default UserAccount;

