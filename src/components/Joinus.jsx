import React, { useEffect, useState } from 'react'
import './joinus.css' 
import gsap from 'gsap' ;
gsap.registerPlugin(ScrollTrigger);
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGlobalcontext } from './Appcontext';



function Joinus() {
  const {theme , setTheme } = useGlobalcontext() ;
  const [hover , setHover] = useState(false) ;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
 

  gsap.fromTo(".sub__sub__div1" ,
{
  x:-240,

} ,{

x:0,


  
   
    
    scrollTrigger: {
        trigger: ".sub__sub__div1",
        start:"top bottom",
        
        
       
       scrub:true,
        markers: false,
        toggleActions: 'play pause reverse complete'
    } 
  } 
) 
gsap.fromTo(".sub__sub__div3" ,
{
  x:40,

} ,{

x:0,


  
   
    
    scrollTrigger: {
        trigger: ".sub__sub__div3",
        start:"top bottom",
        
        
       
       scrub:true,
        markers: false,
        toggleActions: 'play pause reverse complete'
    } 
  } 
) 
gsap.fromTo(".sub__sub__div2" ,
{
  x:40,

} ,{

x:0,


  
   
    
    scrollTrigger: {
        trigger: ".sub__sub__div2",
        start:"top bottom",
        
        
       
       scrub:true,
        markers: false,
        toggleActions: 'play pause reverse complete'
    } 
  } 
) 
gsap.fromTo(".roar" ,
{
  x:40,

} ,{

x:0,


  
   
    
    scrollTrigger: {
        trigger: ".roar",
        start:"top bottom",
        
        
       
       scrub:true,
        markers: false,
        toggleActions: 'play pause reverse complete'
    } 
  } 
) 
gsap.fromTo(".time__to" ,
{
  x:80,

} ,{

x:0,


  
   
    
    scrollTrigger: {
        trigger: ".time__to",
        start:"top bottom",
        
        
       
       scrub:true,
        markers: false,
        toggleActions: 'play pause reverse complete'
    } 
  } 
) 
gsap.fromTo(".foot1" ,
{
  yPercent:50 , opacity:0 

} ,{

yPercent:0 , opacity:1 ,


  
   
    
    scrollTrigger: {
        trigger: ".foot1",
        start:"bottom bottom",
        
        
       
       scrub:true,
        markers: false,
        toggleActions: 'play pause reverse complete'
    } 
  } 
) 
gsap.fromTo(".lets__talk button" ,
{
  yPercent:50 , opacity:0 

} ,{
  delay:0.2,

yPercent:0 , opacity:1 ,


  
   
    
    scrollTrigger: {
        trigger: ".lets__talk button",
        start:"bottom bottom",
        
        
       
       scrub:true,
        markers: false,
        toggleActions: 'play pause reverse complete'
    } 
  } 
) 
gsap.fromTo(".foot2" ,
{
  yPercent:50 , opacity:0 

} ,{

yPercent:0 , opacity:1 ,


  
   
    
    scrollTrigger: {
        trigger: ".foot2",
        start:"top bottom",
        
        
       
       scrub:true,
        markers: false,
        toggleActions: 'play pause reverse complete'
    } 
  } 
) 
gsap.fromTo(".foot3" ,
{
  yPercent:50 , opacity:0 

} ,{

yPercent:0 , opacity:1 ,


  
   
    
    scrollTrigger: {
        trigger: ".foot3",
        start:"top bottom",
        
        
       
       scrub:true,
        markers: false,
        toggleActions: 'play pause reverse complete'
    } 
  } 
) 
const mask = document.querySelector('.mask');

document.addEventListener('pointermove', (pos) => {
    let x = parseInt(pos.clientX / window.innerWidth * 100);
    let y = parseInt(pos.clientY / window.innerHeight * 10);

    mask.style.setProperty('--mouse-x', x + '%');
    mask.style.setProperty('--mouse-y', y + '%'); 
});
useEffect(()=>{
  console.log(hover)
} , [hover])
  return (
    <>
    <section className="join__main">
        <div className="sub1__join__main">
            <div className="sub__sub">
                <span className='sub__sub__div1'>join our</span>
                <span className='sub__sub__div2'>jungle</span>
                <span className='sub__sub__div3'>trek</span>


            </div>

          
        </div>
        <div className="main2">
          <div className='main2__suvdiv' onMouseMove={(e)=>{
            e.preventDefault( ) ;
            setHover(true);

          }}   onMouseLeave={(e)=>{
            e.preventDefault() ;
            setHover(false) ;

          }}>
            <div>Dribble</div>
            <img className={(hover)?"socail__image__hover":"social__image"} src="./public/assets (2)/asset 21.svg" alt="" />
          </div>
          <div className='main2__suvdiv' onMouseMove={(e)=>{
            e.preventDefault( ) ;
            setHover(true);

          }}   onMouseLeave={(e)=>{
            e.preventDefault() ;
            setHover(false) ;

          }}>
            <div>LinkedIn</div>
            <img className={(hover)?"socail__image__hover":"social__image"}   src="./public/assets (2)/asset 22.svg" alt="" />
          </div>
          <div className='main2__suvdiv' onMouseMove={(e)=>{
            e.preventDefault( ) ;
            setHover(true);

          }}   onMouseLeave={(e)=>{
            e.preventDefault() ;
            setHover(false) ;

          }}>
            <div>Facebook</div>
            <img className={(hover)?"socail__image__hover":"social__image"}  src="./public/assets (2)/asset 25.svg" alt="" />
          </div>
          <div className='main2__suvdiv' onMouseMove={(e)=>{
            e.preventDefault( ) ;
            setHover(true);

          }}   onMouseLeave={(e)=>{
            e.preventDefault() ;
            setHover(false) ;

          }}>
            <div>Behance</div>
            <img className={(hover)?"socail__image__hover":"social__image"}  src="./public/assets (2)/asset 24.svg" alt="" />
          </div>
          <div className="main2__suvdiv" onMouseMove={(e)=>{
            e.preventDefault( ) ;
            setHover(true);

          }}   onMouseLeave={(e)=>{
            e.preventDefault() ;
            setHover(false) ;

          }}>
          <div>instagram</div>
           
          <img className={(hover)?"socail__image__hover":"social__image"}  src="./public/assets (2)/asset 23.svg" alt="" />
          </div>
          </div>

          
          
          
       
    </section>
    <section className='time__to__roar__main'>
      <div className='time__to__roar__main__subdiv'>
        <div className="sub__roar">
        <span className="time__to">time to</span>
        <span className='roar'>roar!</span>
        </div>
        <div className="lets__talk">
        <button className={(theme === "dark__theme")?"lets__talk__button":"lets__talk__light"} >Lets talk!</button>

        </div>
      </div>
      <div className="foot1"></div>
      <div className="foot2">
       <div><span>
        Email
        </span>
        <h4>hello@trionn.com</h4>

        </div>
       <div>
        <span>
          Call
        </span>
        <h4>+91 7827170704</h4></div>
        <div></div>
       <div className='div3'><span>
        Skype
        </span>
        <h4>Talk.trionn</h4></div>
      </div>
      <div className="foot3"></div>

      <div className="up">
      <p>©2024 TRIONN<sup>®</sup>
      </p>
      <div><img src="./public/assets (2)/asset 26.svg" alt="" /></div>
      
      </div>
  
    </section>
    <div className="mask">
      <div className='trionn__svg'><img src="public\assets (2)\asset 27.svg" alt="" />
       </div>
       </div>
    
    </>
  )
}

export default Joinus
