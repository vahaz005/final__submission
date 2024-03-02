import React from 'react'
import './grid.css'
import gsap from 'gsap' ;
gsap.registerPlugin(ScrollTrigger);
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Grid() {
   let tl = gsap.timeline(
    {scrollTrigger:{
        trigger:".main41" ,
        start:'top bottom' ,
        end:"bottom bottom" ,
        scrub:1 ,
    }}
    
)
tl.from(".main41" ,{
    xPercent:-100 ,
    opacity:0 ,
    duration:0.5,
rotate:-45,
    

})
tl.to(".main41" , {
    xPercent:0 ,
    opacity:1 ,
    rotate:0


})
let tl2 = gsap.timeline(
    {scrollTrigger:{
        trigger:".main43" ,
        start:'top bottom' ,
        end:"bottom bottom" ,
        scrub:1 ,
    }}
    
)
tl2.from(".main43" ,{
    xPercent:-100 ,
    opacity:0 ,
    duration:0.5,
rotate:-45,
    

})
tl2.to(".main43" , {
    xPercent:0 ,
    opacity:1 ,
    rotate:0


})  
let tl3 = gsap.timeline(
    {scrollTrigger:{
        trigger:".main42" ,
        start:'top bottom' ,
        end:"bottom bottom" ,
        scrub:1 ,
    }}
    
)
tl3.from(".main42" ,{
    xPercent:100 ,
    opacity:0 ,
    duration:0.5,
rotate:45,
    

})
tl3.to(".main42" , {
    xPercent:0 ,
    opacity:1 ,
    rotate:0


}) 
let tl4 = gsap.timeline(
    {scrollTrigger:{
        trigger:".main44" ,
        start:'top bottom' ,
        end:"bottom bottom" ,
        scrub:1 ,
    }}
    
)
tl4.from(".main44" ,{
    xPercent:100 ,
    opacity:0 ,
    duration:0.5,
rotate:45,
    

})
tl4.to(".main44" , {
    xPercent:0 ,
    opacity:1 ,
    rotate:0


}) 

  return (
    <>
    <section className='gridsection'>
        <div className="subgrid">
            <div className="main41">
                <div className='mainsub1'>
                    <div>
                        <div className='mainsub2'>5</div>
                        <div className='mainsub2'>0</div>
                        <span className='supper'>
                            <div className='supper_sub'>+</div>
                        </span>
                    </div>
                    <div className="currsub">"awards &"
                    <br></br>
                    " recognition"
                    </div>
                </div>

            </div>
            <div className="main42">
 <div className='mainsub1'>
                    <div>
                        <div className='mainsub2'>5</div>
                        <div className='mainsub2'>0</div>
                        <span className='supper'>
                            <div className='supper_sub'>+</div>
                        </span>
                    </div>
                    <div className="currsub">"awards &"
                    <br></br>
                    " recognition"
                    </div>
                </div>
            </div>
            <div className="main43">
                 <div className='mainsub1'>
                    <div>
                        <div className='mainsub2'>5</div>
                        <div className='mainsub2'>0</div>
                        <span className='supper'>
                            <div className='supper_sub'>+</div>
                        </span>
                    </div>
                    <div className="currsub">"awards &"
                    <br></br>
                    " recognition"
                    </div>
                </div>

            </div>
            
            <div className="main44">
 <div className='mainsub1'>
                    <div>
                        <div className='mainsub2'>5</div>
                        <div className='mainsub2'>0</div>
                        <span className='supper'>
                            <div className='supper_sub'>+</div>
                        </span>
                    </div>
                    <div className="currsub">"awards &"
                    <br></br>
                    " recognition"
                    </div>
                </div>
            </div>




        </div>
    </section>

    </>
  )
}

export default Grid
