import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [pageName, setPageName] = useState('Dashboard');

    return (
        <UserContext.Provider value={{ pageName, setPageName }}>
            {children}
        </UserContext.Provider>
    );
}

export const UserData = () => useContext(UserContext);