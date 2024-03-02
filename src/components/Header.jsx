import React, { useState } from 'react'
import './header.css'
import { useGlobalcontext } from './Appcontext'
import { useScroll } from 'framer-motion';
import GsapMagnetic from './gsap';
import { Link } from 'react-router-dom';

function Header() {
    const [ismenu , setIsMenu] = useState(false) ;
    const [text , setText] = useState("MENU") ;
    const {theme , setTheme } =useGlobalcontext() ;
    const [url , setUrl] = useState("https://trionn.com/_next/static/media/light-mode-icon.035572eb.svg")
    const changetheme = () => {
        if(theme === "dark__theme"){
            setTheme("light__theme");
            setUrl("https://trionn.com/_next/static/media/dark-mode-icon.db0ad99a.svg")
        } else {
            setTheme("dark__theme") ;
            setUrl("https://trionn.com/_next/static/media/light-mode-icon.035572eb.svg")
        }
    } 
const func = () => {
    if(ismenu === false) {
        setIsMenu(true)
        setText("CLOSE") ;
    } else {
        setIsMenu(false)
        setText("MENU");
    }
}
  return (
    <div className='header'>
        <div className="header__container">
            <div className="logo">
                <img src="https://trionn.com/assets/images/logo.svg" alt="" />
            </div>
            <div className="togglemode">
                <div className="togglemode1">
                    <GsapMagnetic><button 
                    onClick={(e)=>{
                        e.preventDefault() ;
                        changetheme() ;
                       
                    }}> <img src={url} alt="" /></button></GsapMagnetic>
                    
               
                </div>
                <GsapMagnetic><div className="togglemode2">
                    <img src="https://trionn.com/_next/static/media/sound-mute.99b17403.svg" alt="" />
                </div></GsapMagnetic>
                
               
            </div>
            <div className="menu">
                <div className="text">{text}</div>
                <button className='text__button' onClick={(e)=>{
                    e.preventDefault() ;
                    func() ;
                }}><Link to={"/Menu"} 
                    
                    >
                    <div className="img">
                       
                       <span className='s1'></span>
                       <span className='s2'></span>
                       </div></Link></button>
                
               
             
                    
                   
                    

               
            </div>

        </div>
      
    </div>
  )
}

export default Header
