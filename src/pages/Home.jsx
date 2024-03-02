import React from 'react'
import './home.css'
import { motion } from 'framer-motion';
import GsapMagnetic from '../components/gsap';
import Vedio from '../components/Vedio';
import Recent from '../components/Recent';
import Image from '../components/Image';
import Image2 from '../components/Image2';
import Imagereverse  from '../components/Imagereverse';
import Drag from '../components/Drag';
import Grid from '../components/Grid';
import Scrolling from '../components/Scrolling';

import Joinus from '../components/Joinus';
import Who from '../components/Who';
import Dribble1 from '../components/Dribble1';
import Loader from './Loader';

function Home() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Simulating a 5-second loading time
  }, []);
 

  return (
    
    <div className="App">
    {isLoading ? (
      <Loader />
    ) : (
      <div>
        {
          <>
          <div className='main'>
        <div className='main__div'>
            <div className="main__txt">
                <motion.span className='txt1'
                initial = {{opacity:0 , y:200}}
                animate = {{opacity:1 , y:0}}
                transition={{duration : 1, type : "spring"}}
                >roar in the</motion.span>
                <span className='txt2'>digital wilderness.</span>
                </div>

               
                
        </div>
        <div className="main__Para">
          <span>WE ROAR WITH SUCCESS, DELIVERING THE TRIONN®</span>
          <span>THROUGH VERSATILE DESIGN, BRANDING AND THE LATEST</span>
          <span>TECH DEVELOPMENT TO COMPANIES.</span>
          <GsapMagnetic><img src="https://trionn.com/_next/static/media/move-down.31fd25f2.svg" alt="" /></GsapMagnetic>
          
          
        </div>

        <div className="button">
                  <div className="sub__button">
                    <button className='b1'
                      initial = {{y:200,  opacity:0}}
                      animate ={
                        {
                          y:0 , opacity:1
                        }
                      }
                      transition={{duration:2}}
                      >Explore work</button>
                     
                    
                    <button className='b2'>Get in touch</button>
                      
                    
                  </div>
                </div>
    </div>
    
    <Vedio/>
   
    <Recent/>
   
     <Image url= {"./public/assets (2)/asset 4.webp"} title = {"loftloom"} top={"2rem"}/>
    <Imagereverse url={"./public/assets (2)/asset 5.webp"} title={"imusic"}/>
    <Image2 url= {"./public/assets (2)/asset 6.webp"} title = {"technis"}/>
    <Who/>
    <Grid/>
    <Drag/>
    <Scrolling/>
    <Dribble1/>

 
    <Joinus/>
    </> }
       
      </div>
    )}
  </div>
    
    
    
  )
}

export default Home
