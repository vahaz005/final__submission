import React, { useContext, useState  } from 'react' 
const Appcontext = React.createContext();
const AppProvider = ({children}) => {
    const[theme , setTheme] = useState("dark__theme") ;
    
    
    return <Appcontext.Provider value={{theme, setTheme}} >{children}</Appcontext.Provider>
} ;

const useGlobalcontext = () => {
    return useContext(Appcontext) ;
}
export{Appcontext, AppProvider , useGlobalcontext};