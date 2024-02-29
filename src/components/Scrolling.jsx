import React from 'react'
import './scrolling.css' 
import Marquee from 'react-fast-marquee'


function Scrolling() {
  return (
    <>
    <section className='scrolling__main'>
        <div className="scrolling__main__top">
          <Marquee
          speed={60} 
          gradient = {false} 
          direction='left' 
          ><div className="righttoleft">
                <div><h3 className='flex'> wild ideas!—</h3>
                </div>
                <div><h3> wild ideas!—</h3>
                </div>
                <div><h3 className='flex'> wild ideas!—</h3>
                </div>
                <div><h3> wild ideas!—</h3>
                </div>
                
            </div></Marquee>
            
            

        </div>
        <div className="scrolling__main__bottom">
          <Marquee
        
          speed={60} 
          gradient = {false} 
          direction='right' 
          ><div className="righttoleft">
                <div><h3 className='flex'> wild ideas!—</h3>
                </div>
                <div><h3> wild ideas!—</h3>
                </div>
                <div><h3 className='flex'> wild ideas!—</h3>
                </div>
                <div><h3> wild ideas!—</h3>
                </div>
                
            </div></Marquee>
            
            

        </div>
        


    </section>
    |</>
  )
}

export default Scrolling
