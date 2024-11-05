import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { store } from './app/store';

import Header from './components/Header/Header';
import Header2 from './components/Header/Header2';

import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';
import Modal from './components/Modal/Modal';
import ModalContent from './components/Modal/ModalContent';
import { useDispatch } from 'react-redux';
import { closeModal } from './features/modal/modalSlice';

const App = () => (
    <Provider store={store}>
        <Router>
            <Header /> 
            <Header2 /> 
            <AppRoutes />
            <Footer />
            <ModalComponent />
        </Router>
    </Provider>
);

const ModalComponent = () => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.modal.isOpen); // Получаем состояние модального окна

    const handleCloseModal = () => {
        dispatch(closeModal()); // Используем action для закрытия модального окна
    };

    return (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <ModalContent onClose={handleCloseModal} />
        </Modal>
    );
};

export default App;
