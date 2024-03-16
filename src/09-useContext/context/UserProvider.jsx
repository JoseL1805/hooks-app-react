import React, { useState } from 'react'
import { UserContext } from './UserContext'


const user  = {
    id : 123,
    name: 'Jose Luis'
}

export const UserProvider = ({children}) => {
    return (
        <UserContext.Provider value={{ user }}>
            { children }
        </UserContext.Provider>
    )
}
