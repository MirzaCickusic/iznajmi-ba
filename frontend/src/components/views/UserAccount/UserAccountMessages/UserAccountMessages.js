import React, {useEffect, useState} from 'react';
import './UserAccountMessages.scss'
import Message from "./Message/Message";
import messagesService from '../../../../services/user'

const UserAccountMessages = () => {

    const [noMessagesToShow, setNoMessagesToShow] = useState() //TODO React flicker


    useEffect(async () => {
        const userMessages = [] //await messagesService.getUserMessages(userId) //TODO povući sve
        // korisnikove poruke iz baze

        if (userMessages.length === 0) {
            setNoMessagesToShow(!noMessagesToShow)
        }
    }, [])

    return (
        <div className="messages-view">
            <div className="messages-menu">
                <ul>
                    <li>INBOX</li>
                    <li>NEPROČITANE PORUKE <span>1</span></li>
                    <li>POSLANE PORUKE<span>1</span></li>
                </ul>
            </div>
            <div className="messages-display">
                <Message/>
                <Message/>
            </div>
        </div>
    );
};

export default UserAccountMessages;
