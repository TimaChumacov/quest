import React from 'react';
import './App.css';

const Modal = ({active, setActive, children}) => {
    return (
        <div className={active ? "curtain active" : "curtain"} onClick = {() => setActive(false)}>
            <div className="modalContent" onClick = {e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;