import React from 'react'
import "./vedio.css"
import gsap from 'gsap' ;
gsap.registerPlugin(ScrollTrigger);
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Vedio() {
    gsap.fromTo(".vediowrapper video" ,
{
  borderRadius : 99999 , y :0, scaleX:0.14 ,
  scaleY:0.14

   
},
{
  y:400, borderRadius:24 , scaleX:0.8 , scaleY:0.8 ,
    duration: 1,
    
    scrollTrigger: {
        trigger: ".vediowrapper video",
       start:"bottom bottom " ,
        scrub: true,
        markers: false,
        toggleActions: 'play pause reverse complete'
    }
  }
)

  return (
    <>
    <div className="vediowrapper">
    <video loop muted playsInline autoPlay>
    <source src="./public/intro-video.mp4" type="video/mp4"/>
</video>
        </div>
        </>
  )
}

export default Vedio
