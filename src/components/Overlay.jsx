import React from 'react';
import './Overlay.css'; // Import CSS file for styling

function Overlay({ show, onClick, children }) {
  return (
    <div className={`overlay ${show ? 'show' : ''}`} onClick={onClick}>
      <div className="overlay-content">
        {children}
      </div>
    </div>
  );
}

export default Overlay;