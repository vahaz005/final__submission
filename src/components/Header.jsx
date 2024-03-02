import React, { useState } from 'react'
import './header.css'
import { useGlobalcontext } from './Appcontext'
import { useScroll } from 'framer-motion';
import GsapMagnetic from './gsap';
import { Link } from 'react-router-dom';

function Header() {
<<<<<<< HEAD
    const {isOverlayVisible, setIsOverlayVisible} = useGlobalcontext() ;
=======
>>>>>>> 6a566d9accfa44fa13174d675e6fd0591533fc16
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
<<<<<<< HEAD
const [isPlaying, setIsPlaying] = useState(false);
const audioRef = React.createRef();

const toggleSound = () => {
   if (isPlaying) {
     audioRef.current.pause();
  } else {
    audioRef.current.play();
  }
  setIsPlaying(!isPlaying);
};
const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };
=======
>>>>>>> 6a566d9accfa44fa13174d675e6fd0591533fc16
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
<<<<<<< HEAD
                <GsapMagnetic>
                    <button className='sound' onClick={(e)=>{
                        e.preventDefault() 
                        toggleSound()

                    }}> <div className="togglemode2"
             
             >
     
                 <img src={(isPlaying? "https://trionn.com/_next/static/media/sound.b0076745.svg":"https://trionn.com/_next/static/media/sound-mute.99b17403.svg")} alt="" />
             </div>
             <audio ref={audioRef} loop>
        <source src="/assets/audio/jungle.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
             </button>
                   </GsapMagnetic>
=======
                <GsapMagnetic><div className="togglemode2">
                    <img src="https://trionn.com/_next/static/media/sound-mute.99b17403.svg" alt="" />
                </div></GsapMagnetic>
>>>>>>> 6a566d9accfa44fa13174d675e6fd0591533fc16
                
               
            </div>
            <div className="menu">
                <div className="text">{text}</div>
                <button className='text__button' onClick={(e)=>{
                    e.preventDefault() ;
<<<<<<< HEAD
                    toggleOverlay()
                    func()
                }}> 
                    
                    
=======
                    func() ;
                }}><Link to={"/Menu"} 
                    
                    >
>>>>>>> 6a566d9accfa44fa13174d675e6fd0591533fc16
                    <div className="img">
                       
                       <span className='s1'></span>
                       <span className='s2'></span>
<<<<<<< HEAD
                       </div></button>
=======
                       </div></Link></button>
>>>>>>> 6a566d9accfa44fa13174d675e6fd0591533fc16
                
               
             
                    
                   
                    

               
            </div>

        </div>
      
    </div>
  )
}

export default Header
