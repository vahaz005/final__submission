import React from 'react'
import './recent.css'
import { motion } from 'framer-motion';
import gsap from 'gsap' ;
gsap.registerPlugin(ScrollTrigger);
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll , useTransform } from 'framer-motion';
import { Tween } from 'gsap/gsap-core';


function Recent() {
  let leftbutton = gsap.timeline({
    scrollTrigger:{
      trigger:".left button" ,
      start:"top bottom" ,
     
      scrub:1,

    }
  })
  leftbutton.fromTo(".left button" , {
    yPercent:50,
    opacity:0  , 
    duration:{min:10},
    animation:Tween

  }
  ,
  {
    yPercent:0
, opacity:1 ,


  })
 gsap.fromTo(".nodiv " , {
  yPercent:100 ,
 }  ,{
  yPercent:0 ,
  scrollTrigger:{
    trigger:".nodiv" ,
    start:"bottom bottom"
  }
 }
 )


  
 




  // Map scroll progress to text color opacity;
 
  gsap.to(".rights2" , {
    x:270,
    duration :3 ,
    scrollTrigger:{
      trigger :".rights2",
      scrub:1,
      start:"top bottom" ,
      
      toggleActions : "play pause reverse complete"
    }
  
  })
  gsap.to(".rights1" , {
    x:-160,
  

 
    
    scrollTrigger:{
      trigger :".rights1",
      scrub:1,
      start:"top bottom" ,
      end:"bottom bottom",

      toggleActions : "play pause reverse complete"
    }
  
  })
  
  
  return (
    <>
    <div className="recentmain">
        <div className="right">
            <span className="rights1"
          
            
            >recent</span>
            <span className="rights2">work</span>
            <div  className='nodiv'>In the creative wilderness, </div>
            <div className='nodiv'>clients find our work truly </div>
            <div className='nodiv'>beloved.</div>

        </div>
        <div className="left">
        <button >Explore work</button>

        </div>

    </div>
    </>
  )
}

export default Recent
