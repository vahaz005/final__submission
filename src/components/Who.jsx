import React from 'react'
import './who.css'
import gsap from 'gsap' ;
gsap.registerPlugin(ScrollTrigger);
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GsapMagnetic from './gsap';
function Who() {
    gsap.fromTo(".who__main__top__span1" ,
    {
      x:150,
     
    } ,{
    
     
    x:0 ,
    
    
    
      
       
        
        scrollTrigger: {
            trigger: ".who__main__top__span1",
            start:" bottom  top",
            
            
           
           scrub:true,
            markers: false,
            toggleActions: 'play complete reverse complete'
        } 
      } 
    ) 
    gsap.fromTo(".who__main__top__span2" ,
    {
      x:-60,
     
    } ,{
    
     
    x:0 ,
    
    
    
      
       
        
        scrollTrigger: {
            trigger: ".who__main__top__span2",
            start:" bottom  top",
            
            
           
           scrub:true,
            markers: false,
            toggleActions: 'play complete reverse complete'
        } 
      } 
    ) 
    gsap.fromTo(".who__main__text span" ,
    {
      y:50,
      opacity:0 ,
     
    } ,{
    
     
    y:0 ,
    opacity:1,
    
    
    
      
       
        
        scrollTrigger: {
            trigger: ".who__main__text span",
            start:" bottom bottom",
            
            
           
           scrub:true,
            markers: false,
            toggleActions: 'play complete reverse complete'
        } 
      } 
    ) 
    gsap.fromTo(".who__main__text2 p" ,
    {
      y:50,
      opacity:0 ,
     
    } ,{
    
     
    y:0 ,
    opacity:1,
    
    
    
      
       
        
        scrollTrigger: {
            trigger: ".who__main__text2 p",
            start:" bottom bottom",
            
            
           
           scrub:true,
            markers: false,
            toggleActions: 'play complete reverse complete'
        } 
      } 
    ) 
    gsap.fromTo(".who__main__text2 button" ,
    {
      y:100,
      opacity:0 ,
     
    } ,{
    
     
    y:0 ,
    opacity:1,
    duration:7 ,
    animation:"tween" 
    ,
    
      
       
        
        scrollTrigger: {
            trigger: ".who__main__text2 button",
            start:" bottom bottom",
            
            
            
           
           scrub:true,
            markers: false,
            toggleActions: 'play complete reverse complete'
        } 
      } 
    ) 
    
  return (
    <>

    <section className='who__main'>
        <div className='who__main__top'>
            <span className='who__main__top__span1'>who</span>
            <span className='who__main__top__span2'>we are</span>

        </div>

        <div className='who__main__text'>
            <span>As an award-winning agency</span>
            <span>within the digital jungle, TRIONN®</span>
            <span>transcends aesthetics, crafting</span>
            <span>your vision into a legacy that</span>
            <span>endures.</span>
        </div>
        <div className="who__main__text2">
            <p>We roar with creativity, staying updated with the latest tech to make your brand a formidable force in the digital wilderness and deliver exceptional website and app experiences.
</p>
<button>About Us</button>
        </div>
    </section>

    </>
  )
}

export default Who