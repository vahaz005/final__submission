import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import Overlay from './components/Overlay';
import Header from './components/Header';
import Home from './pages/Home';
import Menu from './pages/Menu';
import { useGlobalcontext } from './components/Appcontext';
import { debounce } from 'lodash';

function App() {
  const { theme } = useGlobalcontext();
  const { isOverlayVisible, setIsOverlayVisible } = useGlobalcontext();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  const updateMousePosition = useCallback(
    debounce((e) => {
      setMousePosition({
        x: e?.clientX,
        y: e?.clientY,
      });
    }, 200),
    []
  );

  const updateMousePositionOnScroll = useCallback(() => {
    updateMousePosition();
  }, [updateMousePosition]);

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('scroll', updateMousePositionOnScroll);

    return () => {
      // window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('scroll', updateMousePositionOnScroll);
    };
  }, [updateMousePosition, updateMousePositionOnScroll]);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: 'yellow',
      mixBlendMode: 'difference',
    },
  };

  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');

  useEffect(() => {
    document.body.setAttribute('class', theme);
  }, [theme]);



  return (
    <>
      <Header />
    <Overlay show={isOverlayVisible}  style={{ backgroundColor:  'rgb(23, 24, 26)' }}>
        <Menu />
      </Overlay>
      <Home />
    </>
  );
}

export default App;
