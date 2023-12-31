import React, { useState } from "react";

export type IAuthContext = {
    userName: String,
    setUserName: (userName: string) => void,
    isLoggedIn: Boolean,
    setIsLoggedIn: (userName: boolean) => void;
}

const AuthContext = React.createContext<IAuthContext | null> (null)
const AuthProvider = (props:any) =>{
    const [userName, setUserName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <AuthContext.Provider value={{userName, setUserName, isLoggedIn, setIsLoggedIn}}>
            {props.children}
        </AuthContext.Provider>
    )

}

export {AuthProvider, AuthContext};

