import { createPortal } from 'react-dom';
import PropTypes from "prop-types";
import './modal.css';
import { useEffect } from 'react';
import { useCallback } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({onCloseModal, children}) => {
    const handleKeyDown = useCallback( (evt) => {
        if (evt.code === 'Escape') {
            onCloseModal();
        }
    }, [onCloseModal]) 

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
    }, [handleKeyDown]);

    useEffect(() => {
        return () => { window.removeEventListener('keydown', handleKeyDown);}
    },[handleKeyDown]);


    const handleBackdropClick = evt => {
        if (evt.currentTarget === evt.target) {
            onCloseModal();
        }
    }
    
        return createPortal(
            <div className='modal_backdrop' onClick={handleBackdropClick}>
                <div className='modal_content'>
                    {children}
                </div>
            </div>,
            modalRoot,
        );
    }


Modal.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
};