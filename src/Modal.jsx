import "./modal.css"
import React from 'react';

function Modal({ children, open }) {
  return (
    <div className={`modal ${open ? "open" : ""}`}>
      {children}
    </div>
  )
}

export default Modal;
