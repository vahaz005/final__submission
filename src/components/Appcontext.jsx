import React, { useContext, useState  } from 'react' 
const Appcontext = React.createContext();
const AppProvider = ({children}) => {
    const[theme , setTheme] = useState("dark__theme") ;
<<<<<<< HEAD
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    
    
    return <Appcontext.Provider value={{theme, setTheme , isOverlayVisible , setIsOverlayVisible}} >{children}</Appcontext.Provider>
=======
    
    
    return <Appcontext.Provider value={{theme, setTheme}} >{children}</Appcontext.Provider>
>>>>>>> 6a566d9accfa44fa13174d675e6fd0591533fc16
} ;

const useGlobalcontext = () => {
    return useContext(Appcontext) ;
}
export{Appcontext, AppProvider , useGlobalcontext};