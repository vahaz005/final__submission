<<<<<<< HEAD
import { useState  , useEffect, useCallback} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion } from 'framer-motion';
import Overlay from './components/Overlay';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes   } from 'react-router-dom';

import { useGlobalcontext } from './components/Appcontext';


import Cursor from './components/Cursor';
import Menu from './pages/Menu';
import { debounce } from 'lodash';


 
function App() {
const {theme , setTheme } = useGlobalcontext();
const{isOverlayVisible ,setIsOverlayVisible} = useGlobalcontext() 

  
  
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");


  
  const updateMousePosition = useCallback(debounce((e) => {
    setMousePosition({
      x: e?.clientX,
      y: e?.clientY
    });
  }, 200), []);

  const updateMousePositionOnScroll = useCallback(() => {
    updateMousePosition();
  }, [updateMousePosition]);

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("scroll", updateMousePositionOnScroll);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("scroll", updateMousePositionOnScroll);
    };
  }, [updateMousePosition, updateMousePositionOnScroll]);
  
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
    <Overlay show={isOverlayVisible} >
      <Menu/>
      </Overlay>
      <Home/>
 
   
   
      
   


    

    
      
     
    
      
    
  
  
  


    
    </>
   
  )
}

export default App
=======
import { useState  , useEffect, useCallback} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes   } from 'react-router-dom';

import { useGlobalcontext } from './components/Appcontext';


import Cursor from './components/Cursor';
import Menu from './pages/Menu';
import { debounce } from 'lodash';


 
function App() {
const {theme , setTheme } = useGlobalcontext();

  
  
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");


  
  const updateMousePosition = useCallback(debounce((e) => {
    setMousePosition({
      x: e?.clientX,
      y: e?.clientY
    });
  }, 200), []);

  const updateMousePositionOnScroll = useCallback(() => {
    updateMousePosition();
  }, [updateMousePosition]);

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("scroll", updateMousePositionOnScroll);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("scroll", updateMousePositionOnScroll);
    };
  }, [updateMousePosition, updateMousePositionOnScroll]);
  
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
 <Router>
      
      <Header/>
    <Routes>
    
      <Route path='/' index element = {<Home/>}></Route>
      <Route path='/Menu' element= {<Menu/>}></Route>
      
     
    </Routes>
    </Router>
   
   
      
   


    

    
      
     
    
      
    
  
  
  


    
    </>
   
  )
}

export default App
>>>>>>> 6a566d9accfa44fa13174d675e6fd0591533fc16
