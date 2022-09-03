import React, { useImperativeHandle } from 'react';
import { useState, forwardRef } from 'react';
import './Modal.css';

const Modal = (props, ref) => {
    const [showModal, setShowModal] = useState(false);

    useImperativeHandle(ref, () => ({
        openModal: () => setShowModal(true),
    }));

    if (!showModal) return null;

    return (
        <div className='modal'>
            <h1>This is the Modal Component</h1>
            <button onClick={() => setShowModal(false)}>Close Modal</button>
        </div>
    );
};

export default forwardRef(Modal);
