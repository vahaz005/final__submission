import React from 'react';
import './Overlay.css'; 
function Overlay({ show, onClick, children,style }) {
  return (
    <div className={`overlay ${show ? 'show' : ''}`} onClick={onClick} style={style}>
      <div className="overlay-content">
        {children}
      </div>
    </div>
  );
}

export default Overlay;