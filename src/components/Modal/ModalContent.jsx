import React, { useState } from 'react';
import axios from 'axios';

const ModalContent = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
    });
    const [statusMessage, setStatusMessage] = useState(null); // Добавляем состояние для сообщения

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'https://integralvision.ge/wpwaze2/wp-json/custom/v1/send-email',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (response.status === 200) {
                setStatusMessage('ჩვენ მივიღეთ ზარის მოთხოვნა მალე დაგიკავშირდებით');
            } else {
                setStatusMessage('შეცდომაა შეტყობინების გაგზავნისას');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            setStatusMessage('შეცდომაა შეტყობინების გაგზავნისას');
        }
    };

    return (
        <div className='modal-inner'>
            {statusMessage ? (
                <div>
                    <h2>{statusMessage}</h2>
                    <button onClick={onClose}>Закрыть</button>
                </div>
            ) : (
                <div>
                    <h2 className='email-modal-title'>დაგვიკავშირდით მეტი ინფორმაციისთვის</h2>
                    <p className='email-modal-text'>დატოვეთ თქვენი მონაცემები – ჩვენი თანამშრომლები დაგიკავშირდებიან კონსულტაციისთვის.</p>
                    <form className='email-form' onSubmit={handleSubmit}>
                        <label className='email-label'>
                            <p className='email-modal-text-p'>სახელი:</p>
                            <input className='email-input' type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </label>
                        <label className='email-label'>
                            <p className='email-modal-text-p'>ტელეფონის ნომერი:</p>
                            <input className='email-input' type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                        </label>
                        <label className='email-label'>
                            <p className='email-modal-text-p'>შეტყობინება:</p>
                            <textarea className='email-text-area' name="message" value={formData.message} onChange={handleChange} required />
                        </label>
                        <button className='email-submit-btn' type="submit">გაგზავნა</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ModalContent;
