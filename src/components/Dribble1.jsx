import React from 'react'
import './dribble.css'
import gsap from 'gsap' ;
gsap.registerPlugin(ScrollTrigger , matchMedia);
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GsapMagnetic from './gsap';
import { min } from 'lodash';
import { px } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

function Dribble1() {
 
    gsap.fromTo(".upper1" ,
    {
      x:0 , 
      y:0 ,
      rotate:0 ,
    
    } ,{
    
    x:-474, 
    y:299 ,
    rotate:-45 ,
    
    
      
       
        
        scrollTrigger: {
            trigger: ".upper1",
            start:"80% bottom",
            
            
           
           scrub:true,
            markers: false,
            toggleActions: 'play pause reverse complete'
        } 
      } 
    ) 
    gsap.fromTo(".upper2" ,
    {
      x:0 , 
      y:0 ,
      rotate:0 ,
    
    } ,{
    
    x:-711, 
    y:200 ,
    rotate:-35 ,
    
    
      
       
        
        scrollTrigger: {
            trigger: ".upper2",
            start:"top bottom",
            
            
           
           scrub:true,
            markers: false,
            toggleActions: 'play pause reverse complete'
        } 
      } 
    ) 
    gsap.fromTo(".upper3" ,
    {
      x:0 , 
      y:0 ,
      rotate:0 ,
    
    } ,{
    
    x:-177.5, 
    y:179.4 ,
    rotate:-30 ,
    
    
      
       
        
        scrollTrigger: {
            trigger: ".upper3",
            start:"top bottom",
            
            
           
           scrub:true,
            markers: false,
            toggleActions: 'play pause reverse complete'
        } 
      } 
    )
    gsap.fromTo(".lower3" ,
    {
      x:0 , 
      y:0 ,
      rotate:0 ,
    
    } ,{
    
    x:177.5, 
    y:179.4 ,
    rotate:30 ,
    
    
      
       
        
        scrollTrigger: {
            trigger: ".lower3",
            start:"top bottom",
            
            
           
           scrub:true,
            markers: false,
            toggleActions: 'play pause reverse complete'
        } 
      } 
    ) 
    gsap.fromTo(".lower1" ,
    {
      x:0 , 
      y:0 ,
      rotate:0 ,
    
    } ,{
    
    x:474, 
    y:299 ,
    rotate:45 ,
    
    
      
       
        
        scrollTrigger: {
            trigger: ".lower1",
            start:"80% bottom",
            
            
           
           scrub:true,
            markers: false,
            toggleActions: 'play complete reverse complete'
        } 
      } 
    )  
    gsap.fromTo(".lower2" ,
    {
      x:0 , 
      y:0 ,
      rotate:0 ,
    
    } ,{
    
    x:711, 
    y:200 ,
    rotate:35 ,
    
    
      
       
        
        scrollTrigger: {
            trigger: ".lower2",
            start:"top bottom",
            
            
           
           scrub:true,
            markers: false,
            toggleActions: 'play pause reverse complete'
        } 
      } 
    ) 
    gsap.fromTo(".behind img" ,
    {
      y:150,
     opacity:0,
    } ,{
    
     
    y:0 ,
    opacity:1 ,
    
    
      
       
        
        scrollTrigger: {
            trigger: ".behind img",
            start:" bottom  bottom",
            
            
           
           scrub:true,
            markers: false,
            toggleActions: 'play complete reverse complete'
        } 
      } 
    )  
    gsap.fromTo(".behind span" ,
    {
      y:50,
      opacity:0 
      
     
    } ,{
    
     
    y:0 ,
    opacity:1,
 
    delay:0.3,
   
    
    
      
       
        
        scrollTrigger: {
            trigger: ".behind span",
            start:" bottom  bottom",
            
            
           
           scrub:true,
            markers: false,
            toggleActions: 'play complete reverse complete'
        } 
      } 
    )  
    gsap.fromTo(".behind button" ,
    {
      y:150,
     opacity:0,
    } ,{
    
     
    y:0 ,
    opacity:1 ,
    
    
      
       
        
        scrollTrigger: {
            trigger: ".behind button",
            start:" bottom  bottom",
            
            
           
           scrub:true,
            markers: false,
            toggleActions: 'play complete reverse complete'
        } 
      } 
    )  
    let mn  = gsap.matchMedia() ;
    mn.add("(min-width:640px)" , () =>{
      gsap.to(".upper1" ,
      {
      
      x:-474, 
      y:299 ,
     
      
      
        
         
          
          scrollTrigger: {
              trigger: ".upper1",
              start:"80% bottom",
              
              
             
             scrub:true,
              markers: false,
              toggleActions: 'play pause reverse complete'
          } 
        } 
      ) 
  
    })
  return (
    <>
    <section className='Dribble__main'>
    <div className="behind">
      <img 
        src="./public/assets (2)/asset 14.webp" alt="" />
        <span>Like a lion's roar echoing through</span>
         <span>the jungle, a hint of our creative</span>
          <span>minds emrges</span>
          
          <button>View Project
            <img src="" alt="" /></button>
         
    </div>
        <div className="Dribble__main__subdiv">
            <div className='upper1'><img src="/public/assets (2)/asset 15.webp" alt="" /></div>
            <div className='lower1'><img src="/public/assets (2)/asset 16.webp" alt="" /></div>
            <div className='upper2'><img src="/public/assets (2)/asset 17.webp" alt="" /></div>
            <div className='lower2'><img src="/public/assets (2)/asset 18.webp" alt="" /></div>
            <div className='upper3'><img src="/public/assets (2)/asset 19.webp" alt="" /></div>
             <div className='lower3'><img src="/public/assets (2)/asset 20.webp" alt="" /></div>

        </div>
    </section>
    </>
  )
}

export default Dribble1