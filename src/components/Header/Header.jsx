import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react'; // Импорт иконки
import "./Header.css";
import { useDispatch } from 'react-redux';
import { openModal } from '../../features/modal/modalSlice';
import address from "../../assets/icons/address.svg"
import aboutService from "../../assets/icons/about-service.svg"
import contact from "../../assets/icons/contact.svg"
import blog from "../../assets/icons/blog.svg"
import phone from "../../assets/icons/phone.svg"


const Header = () =>  {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
      dispatch(openModal()); // Используем action для открытия модального окна
  };

  const [showDropdown, setShowDropdown] = useState(false);

  // Обработчик переключения меню
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className='header'>
      <div className="header-container3">
          <div className="address-inner">
            <button className='address-button'>
              <Link className='address' to="/">
              <img className='address-img' src={address} alt="address" />
              <p className='address-text'>მისამართი</p>
              </Link>
            </button>        
          </div>

          <div className='nav'>
            <Link className='first-header-link' to="/pay-methods-faq">გადახდის პირობები</Link>
            <Link className='first-header-link' to="/checkout-faq">როგორ კეთდება შეკვეთა</Link>
            <Link className='first-header-link' to="/delivery-faq">მიწოდების პირობები</Link>

            <div className="dropdown">
              {/* Иконка бургер-меню с анимацией */}
              <button className="dropdown-toggle" onClick={toggleDropdown}>
                <div className="button-inner">
                  <Hamburger className="hamburger-react" toggled={showDropdown} toggle={setShowDropdown} size={20} rounded />
                  <span className='another-links'>სხვა</span>
                </div>
                
              </button>

              {/* Выпадающее меню */}
              {showDropdown && (
                <div className="dropdown-menu">
                  <ul className="dropdown-links-list">
                    <li className='dropdown-link'>
                      <Link to="/category1"><img src={aboutService} alt="service" />ჩვენი სერვისი</Link>
                    </li>
                    <li className='dropdown-link'>
                      <Link to="/category1"><img className='dropdown-img' src={blog} alt="blog" />ბლოგი</Link>
                    </li>
                    <li className='dropdown-link'>
                      <Link to="/category1"><img src={contact} alt="contact" />კონტაქტი</Link>
                    </li>
                  </ul>             
                  {/* Добавьте другие ссылки по необходимости */}
                </div>
              )}
            </div>
            <div className="dropdown-container">
              <button className="dropdown-button">
                <img className='address-img' src={phone} alt="phone" />
                <p className='address-text'>599002606</p>
              </button>
              <div className="dropdown-content">
                <p className='contact-dropdown-text'>ტელეფონის ნომერი</p>
                <div className="contact-dropdown-content-inner">
                  
                  <Link className='contact-dropdown-content-inner-text contact-dropdown-content-inner' to="tel:+995599002606">
                    <svg className="contact-dropdown-img" fill="none" width="16" height="16" viewBox="0 0 16 16"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6666 11.28V13.28C14.6674 13.4657 14.6294 13.6494 14.555 13.8196C14.4806 13.9897 14.3715 14.1424 14.2347 14.2679C14.0979 14.3934 13.9364 14.489 13.7605 14.5485C13.5846 14.608 13.3982 14.63 13.2133 14.6133C11.1619 14.3904 9.19131 13.6894 7.45998 12.5667C5.84919 11.5431 4.48353 10.1774 3.45998 8.56667C2.33329 6.82747 1.63214 4.84733 1.41331 2.78667C1.39665 2.60231 1.41856 2.41651 1.47764 2.24108C1.53673 2.06566 1.63169 1.90446 1.75649 1.76775C1.88128 1.63103 2.03318 1.5218 2.2025 1.44701C2.37183 1.37222 2.55487 1.33351 2.73998 1.33333H4.73998C5.06351 1.33015 5.37717 1.44472 5.62248 1.65569C5.8678 1.86666 6.02803 2.15963 6.07331 2.48C6.15772 3.12004 6.31428 3.74848 6.53998 4.35333C6.62967 4.59195 6.64908 4.85127 6.59591 5.10059C6.54274 5.3499 6.41922 5.57874 6.23998 5.76L5.39331 6.60667C6.34235 8.2757 7.72428 9.65763 9.39331 10.6067L10.24 9.76C10.4212 9.58076 10.6501 9.45723 10.8994 9.40406C11.1487 9.35089 11.408 9.3703 11.6466 9.46C12.2515 9.6857 12.8799 9.84225 13.52 9.92667C13.8438 9.97235 14.1396 10.1355 14.351 10.385C14.5624 10.6345 14.6748 10.953 14.6666 11.28Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    599002606
                  </Link>
                </div>
                
                <p className='contact-dropdown-text'>სამუშაო საათები</p>
                <p className='contact-dropdown-text-work-hours'>ყოველდღე 8:00 - 22:00</p>
                <p className='contact-dropdown-text'>ელ-ფოსტა</p>
                <button className='contact-dropdown-btn-email' onClick={() => window.location = 'mailto:info@mwvane-aftiaqi.ge'}>info@mwvane-aftiaqi.ge</button>
                <button className="contact-dropdown-btn" onClick={handleOpenModal}>
                  ზარის მოთხოვნა
                </button>
                

                  
              </div>
            </div>
          </div>
          
      </div>
    </div>
  );
};

export default Header;