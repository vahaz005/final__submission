import React from 'react';
import './Overlay.css'; // Import CSS file for styling

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