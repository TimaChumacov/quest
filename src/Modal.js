import React from 'react';
import './App.css';

const Modal = ({active, setActive, children}) => {
    return (
        <div className={active ? "curtain" : "curtain disabled"} onClick = {() => setActive(false)}>
            <div className="modalContent" onClick = {e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;