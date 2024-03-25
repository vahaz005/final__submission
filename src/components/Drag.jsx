import React from 'react'
import './drag.css' 
import gsap from 'gsap' ;

import { useState, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GsapMagnetic from './gsap';

function Drag() {
  const array = [
    {
      name:"Malte Kramer" ,
      discription:"Founder and CEO of Luxury Prescence" ,
      url:"./public/assets (2)/asset 7.webp"
    } ,
    {
      name:"Doug Petrie" ,
      discription:"Founder and CEO of Fast Resume" ,
      url:"./public/assets (2)/asset 9.webp"
    } ,
    {
      name:"Zoltan Csonka" ,
      discription:"Founder and CEO of ventigence" ,
      url:"./public/assets (2)/asset 13.webp"
    }
  ]
  gsap.fromTo(".left__sub__drag__subspan1" ,
  {
    x:-208,

      
  },
  {
    x:0,
     
      duration: 0.3,
      
      scrollTrigger: {
          trigger: ".left__sub__drag__subspan1",
         start:"top bottom",
        
          scrub:false,
          markers: false,
          toggleActions: 'play start reverse reverse'
      }})
      gsap.fromTo(".left__sub__drag__subspan2" ,
      {
        x:-263,
    
          
      },
      {
        x:0,
         
          duration: 0.3,
          
          scrollTrigger: {
              trigger: ".left__sub__drag__subspan2",
             start:"top bottom",
             
              scrub: true,
              markers: false,
              toggleActions: 'play pause reverse complete'
          }
    })
   


  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const x = event.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust sensitivity if needed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };
  const handleDoubleClick = (index) => {
    setClickedIndex(index);
  };

  const handleAnimationEnd = () => {
    setClickedIndex(null);
  };

  

  return (
    <>

    <section className='dragmain'

    >
        <div className="sub__drag">
            <div className="left__sub__drag">
                <span className="left__sub__drag__subspan1">partner</span>
                <span className="left__sub__drag__subspan2">love</span>
            </div>
<div className="right__sub__drag">
<div className="right__sub__drag__sub__drag">
Take heed, as the 
  </div>
  <div className="right__sub__drag__sub__drag">
  lion's roar in our client 
  </div>
  <div className="right__sub__drag__sub__drag">
  reviews resounds.
  </div>
  </div>
        </div>
<div className="slider"
ref={sliderRef}
onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}>
   
    
    {
  
    array.map((info , index) => {
      return (
      <div key={index}
      className={`slider__inner ${clickedIndex === index ? 'dragging' : ''}`}
      onDoubleClick={() => handleDoubleClick(index)}
      onAnimationEnd={handleAnimationEnd}>
        <img className="people"src={info.url} alt="" />
        <p className='p1'>{info.name}</p>
        <p className='p2'>{info.discription}</p>
        <GsapMagnetic><button><span>Watch now!</span>
        <img className='arrow' src="https://trionn.com/_next/static/media/play.6bd15bb3.svg" alt="" />
        </button></GsapMagnetic> 
       

      </div>
      )
    })

    
  }
  <div className='slider__inner'></div>
  <div className='slider__inner'></div>
  
</div>
    </section>
    </>
  )
}

export default Drag
