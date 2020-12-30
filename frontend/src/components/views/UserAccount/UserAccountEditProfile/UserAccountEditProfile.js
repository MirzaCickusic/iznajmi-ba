import React from 'react';
import './UserAccountEditProfile.scss'

const UserAccountEditProfile = () => {
    return (
        <div className="edit-profile-container">
            <div className="edit-profile-info">
                <div className="basic-info">
                    <h3>Osnovni podaci</h3>
                    <form>
                        <input placeholder="Korisničko ime" type="text"/>
                        <input placeholder="Email adresa" type="email"/>
                        <input placeholder="Lozinka" type="password"/>
                    </form>
                </div>
                <div className="edit-profile-avatar">
                    <img src="https://www.w3schools.com/w3images/avatar6.png"/>
                    <h3>Promjeni sliku profila</h3>
                </div>
                <div className="location-info">
                    <h3>Lokacija</h3>
                    <form>
                        <input placeholder="Kanton"/>
                        <input placeholder="Grad"/>
                        <input placeholder="Ulica"/>
                        <input placeholder="Učitaj tačnu lokaciju"/>
                    </form>
                </div>
                <div className="verification">
                    <h3>Verifikacija</h3>
                    <form>
                        <input placeholder="Potvrdite Vaš broj telefona putem SMS poruke"/>
                        <input placeholder="Vaša email adresa je verifikovana"/>
                    </form>
                </div>
            </div>
            <div className="profile-presentational-look">
                <h3>Ovako ostali korisnici vide Vaš profil</h3>
                <div className="profile-and-location">
                    <div className="profile-info">
                        <img src="https://www.w3schools.com/w3images/avatar6.png"/>
                        <div className="grid">
                            <h3>Username</h3>
                            <h4>Član od: <span>00.00.0000</span></h4>
                            <h4>Pogledaj profil</h4>
                        </div>
                        <span>ONLINE</span>
                    </div>
                    <div className="profile-location">
                        <h1>MAPA IDE OVDJE</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAccountEditProfile;
