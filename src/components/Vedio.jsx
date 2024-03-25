import React from 'react'
import "./vedio.css"
import gsap from 'gsap' ;
gsap.registerPlugin(ScrollTrigger);
import { ScrollTrigger } from "gsap/ScrollTrigger";


 function Vedio() {  // gsap.fromTo(".vediowrapper video" ,
// {
//   scale:0.14 , y:0 , borderRadius:99999,
// },

//  {
//    y:300, borderRadius:12 , scaleX:1 , scaleY:1 ,
//      duration: 1,
    
//     scrollTrigger: {
//        trigger: ".vediowrapper video",
//        start:"bottom bottom " ,
//          scrub: true,
//       markers: false,
//        toggleActions: 'play pause reverse complete'   } 
//        }
//         )
// gsap.fromTo(".lion__svg" ,
// {
//   x:1168 ,
//   opacity:0 ,
// },
// {
// opacity:1,

 
//   x:980,
    
//     scrollTrigger: {
//         trigger: ".lion__svg",
//         start:"bottom bottom",
       
        
       
//        scrub:true,
//         markers: false,
//         toggleActions: 'play pause reverse complete'
//     }  
// }) 
  return (
    <>
    <div className="vediowrapper">
<video loop muted playsInline autoPlay>
    <source src="/public/intro-video.mp4" type="video/mp4"/>
</video>
   
        </div>
        <div className="lion__svg">
          
            <img src="/public/assets (2)/asset 32.svg" alt="" />
          
         
        </div>
        </>
  )
  }


export default Vedio
