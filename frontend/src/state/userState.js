import React, {createContext, useEffect, useState} from 'react'
import userService from '../services/user'

export const UserContext = createContext()

export const UserProvider = props => {

    const [user, setUser] = useState(null)

    useEffect(async () => {
        const token = localStorage["loggedAppUser"]

        if (token) {
            try {
                const user = await userService.getUserById(token.id);
                console.log(user)
                setUser(user)
            } catch (exception) {
                console.error(exception)
            }
        }
    }, [])

    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}