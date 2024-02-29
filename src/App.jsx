import { useState  , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes ,Router  } from 'react-router-dom';

import { useGlobalcontext } from './components/Appcontext';


import Cursor from './components/Cursor';
import Menu from './pages/Menu';

 
function App() {
const {theme , setTheme } = useGlobalcontext();

  
  
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("scroll" , mouseMove) ;

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  useEffect(()=>{

   document.body.setAttribute("class" , theme)
   } )
 
  
  return (
    <>
    <Header/>
    <Home/>
    <Menu/>
    
      
     
    
      
    
  
  
  


    
    </>
   
  )
}

export default App
