import React from 'react';
import './imager.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Imagereverse({ url, title }) {
  gsap.fromTo(
    '.right__1r',
    {
      x: -395.5,
      rotate: -10,
    },
    {
      x: 0,
      rotate: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: '.right__1r',
        start: 'top bottom',
        end: '+=500',
        scrub: 1,
        snap: {
          snapTo: "labels", 
          duration: { min: 0.2, max: 3 }, 
          delay: 0.2, 
          ease: "power1.inOut",
        },
        markers: false,
        // toggleActions: 'play start reverse reverse',
      },
    }
  );

  gsap.fromTo(
    '.left__1r',
    {
      y: 100,
    },
    {
      y: -5,
      duration: 1,
      scrollTrigger: {
        trigger: '.left__1r',
        start: 'top bottom',
        end: '+=500',
        scrub: 1,
        snap: {
          snapTo: "labels", 
          duration: { min: 0.2, max: 3 }, 
          delay: 0.2, 
          ease: "power1.inOut", 
        },
        markers: false,
        // toggleActions: 'play start reverse reverse',
      },
    }
  );

  return (
    <>
      <div className="containerr">
        <div className="sub__containerr">
          <div className="right__1r">
            <img loading="lazy" src={url} alt="" />
          </div>
          <div className="left__1r">
            <div className="leftaloner">{title}</div>
            <div className="txtr">UI Design, UX, Wireframe</div>
            <button className="b3r">View Project</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Imagereverse;
