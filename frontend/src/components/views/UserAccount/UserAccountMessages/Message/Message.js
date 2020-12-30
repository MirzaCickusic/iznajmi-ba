import React from 'react';
import './Message.scss'
import styled from 'styled-components'

const MessageFooter = styled.div`
  display: flex;
    align-items: center;
    background-color: #E2E4E6;
    padding: 0 1rem 0 2rem;
    i{
      margin-right: auto;
    }

    button{
      background-color: rgba(0,0,0,0);
      border: none;
      font-weight: bold;
      margin: 0 1rem;
      padding: 0.5rem;
    }
`
const Message = () => { //TODO za nepročitane poruke obojiti footer i prikazati buttone, a za
    // procitane samo button IZBRISI
    return (
        <>
            <div className="single-message">
                <div className="message-heading">
                    <img src="https://www.w3schools.com/w3images/avatar6.png"/>
                    <h2>Jonathan Walker </h2>
                    <h2>Pitanje za oglas: <span>PlayStation 4 (5 igrica)</span></h2>
                </div>
                <p className="message-content">In hac habitasse platea dictumst. Sed nec venenatis
                    odio. Nulla faucibus ipsum sed
                    faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat,
                    nunc a
                    pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at
                    libero.
                </p>
            </div>
            <MessageFooter>
                <i className="far fa-clock"> 2 min</i>
                <button>ODGOVORI</button>
                <button>OZNAČI KAO PROČITANO</button>
                <button>IZBRIŠI</button>
            </MessageFooter>
        </>
    );
};

export default Message;
