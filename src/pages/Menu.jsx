import React, { useEffect } from 'react'
import './men.css'
import { useState } from 'react';
import GsapMagnetic from '../components/gsap';
import { useGlobalcontext } from '../components/Appcontext';

function Menu() {
    const {theme , setTheme} = useGlobalcontext() ;
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);

    useEffect(() => {
        if(theme == "dark__theme") {
            document.querySelector(".menu__main__right__sub1").computedStyleMap.color = "black" ;
        } else {
            document.querySelector(".menu__main__right__sub1").computedStyleMap.color = "red" ;


        }

    } , [theme])
    
  return (
   <>
    <section className='menu__main'>
    <div className={(isHovered1 || isHovered2||isHovered3||isHovered4||isHovered5)?"menu__main__right__dark" : "menu__main__right"}>
        <div   className='menu__main__right__sub1'  onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={()=> setIsHovered1(false)}>
            <div className={`dot1 ${isHovered1 ? 'hovered' : ''}`}></div>
            <div  className={`element1 ${isHovered1 ? 'hovered' : ''}`}>work</div>
        </div>
        <div className='menu__main__right__sub2' onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={()=> setIsHovered2(false)}>
            <div className={`dot2 ${isHovered2 ? 'hovered' : ''}`}></div>
            <div className={`element2 ${isHovered2 ? 'hovered' : ''}`}>about</div>
        </div>
        <div className='menu__main__right__sub3' onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={()=> setIsHovered3(false)}>
            <div className={`dot3 ${isHovered3 ? 'hovered' : ''}`}></div>
            <div className={`element3 ${isHovered3 ? 'hovered' : ''}`}>services</div>
        </div>
        <div className='menu__main__right__sub4' onMouseEnter={() => setIsHovered4(true)}
        onMouseLeave={()=> setIsHovered4(false)}>
            <div className={`dot4 ${isHovered4 ? 'hovered' : ''}`}></div>
            <div className={`element4 ${isHovered4 ? 'hovered' : ''}`}>team</div>
        </div>
        <div className='menu__main__right__sub5' onMouseEnter={() => setIsHovered5(true)}
        onMouseLeave={()=> setIsHovered5(false)}>
            <div className={`dot5 ${isHovered5 ? 'hovered' : ''}`}></div>
            <div className={`element5 ${isHovered5 ? 'hovered' : ''}`}>contact</div>
        </div>
    </div>
    <div className="menu__main__left">
        <GsapMagnetic>
        <span className='menu__main__left__span1'>hello@trionn.com</span></GsapMagnetic>
         <span className='menu__main__left__span2'>+91 7828170704</span>
       
    </div>
   </section>
  
   </>
  )
}

export default Menu