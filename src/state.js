import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [userinfo, setUserinfo] = useState({})
    const [ingroups, setIngroups] = useState([])
    const [wtgroups, setWtgroups] = useState([])
    
    const sharedState = {
        uinfo: [userinfo, setUserinfo],
        igroups: [ingroups, setIngroups],
        wgroups: [wtgroups, setWtgroups],
    }
    
    return (
        <AppContext.Provider value={sharedState}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}