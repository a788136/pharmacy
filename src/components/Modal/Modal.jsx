import React from 'react';
import './Modal.css'; // Импортируем стили для модального окна

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // Не отображаем модальное окно, если оно закрыто

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
                {children} {/* Контент, переданный в модальное окно */}
            </div>
        </div>
    );
};

export default Modal;