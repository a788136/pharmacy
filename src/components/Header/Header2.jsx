import React, { useState } from 'react';
import "./Header2.css";
import logo from "../../assets/img/logo.png";
import tabContentCategoryImg1 from "../../assets/icons/category_icon-1.svg"
import cat1 from "../../assets/img/category-zabolevanie1.webp"
import { Link } from 'react-router-dom';


const Header2 = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [activeTab, setActiveTab] = useState(1);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    

    return (
        <div className='header2-container'>
            <div className="header2-inner">
                <img className="logo-img" src={logo} alt="" />   

                <button className="dropdown-toggle2" onClick={toggleDropdown}>
                    <div className="button-inner">
                        {showDropdown ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="7" height="7"></rect>
                                <rect x="14" y="3" width="7" height="7"></rect>
                                <rect x="14" y="14" width="7" height="7"></rect>
                                <rect x="3" y="14" width="7" height="7"></rect>
                            </svg>
                        )}
                        <span className='catalog-links'>კატალოგი</span>
                    </div>
                </button> 

                {showDropdown && (
                    <div className="dropdown-menu2">
                        <div className="tabs-container">
                            {/* Левая сторона - Категории */}
                            <div className="tabs">
                                <button 
                                    className={`tab-button ${activeTab === 1 ? 'active' : ''}`} 
                                    onClick={() => handleTabClick(1)}
                                >   
                                    <svg className={`category-tabs-img ${activeTab === 1 ? 'category-tabs-img-active' : ''}`}  width="100" height="16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1284_64769)">

                                    <g mask="url(#mask0_1284_64769)">
                                    <path d="M88.8438 57.6781C82.6531 54.8643 74.5664 53.2631 65.9664 53.1346C69.0469 47.7887 70.7031 41.6486 70.7031 35.3516C70.7031 25.9674 67.0455 17.1109 60.4041 10.4141C53.7441 3.69844 44.9164 0 35.5469 0C16.1062 0 0 15.9721 0 35.3516C0 52.7125 12.8199 67.3996 29.5045 70.2144C29.4964 70.3772 29.4923 70.5402 29.4922 70.7031V82.4219C29.4922 87.5498 33.492 92.177 40.7545 95.4508C47.2625 98.3844 55.8176 100 64.8438 100C83.533 100 100 92.9869 100 82.4219V70.7031C100 65.5738 96.0379 60.9482 88.8438 57.6781ZM5.85938 35.3516C5.85938 19.365 19.4545 5.85938 35.5469 5.85938C42.56 5.85938 49.0045 8.35391 54.0535 12.5064L12.5518 54.0082C8.36621 48.9012 5.85938 42.3875 5.85938 35.3516ZM31.5395 64.5951C25.9393 63.8666 20.8426 61.5619 16.6926 58.1537L58.1891 16.6572C62.3453 21.7492 64.8438 28.2621 64.8438 35.3516C64.8438 41.9141 62.6977 48.2654 58.7787 53.373C49.5543 54.133 36.7297 57.2375 31.5395 64.5951ZM47.0129 61.5672L75.1063 81.6338C71.8635 82.1518 68.4043 82.4219 64.8438 82.4219C47.9641 82.4219 35.3516 76.235 35.3516 70.7031C35.3516 67.4082 39.827 63.8811 47.0129 61.5672ZM94.1406 82.4219C94.1406 87.7916 82.2258 94.1406 64.8438 94.1406C47.9641 94.1406 35.3516 87.9537 35.3516 82.4219V80.6176C40.4727 84.4313 50.5639 88.2812 64.8438 88.2812C79.1102 88.2812 89.0807 84.4355 94.1406 80.6586V82.4219ZM82.6752 79.8395L54.5934 59.7811C57.7555 59.2732 61.1998 58.9844 64.8438 58.9844C82.232 58.9844 94.1406 65.3371 94.1406 70.7031C94.1406 75.085 86.9902 78.4297 82.6752 79.8395Z" fill="#fff"/>
                                    </g>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_1284_64769">
                                    <rect width="100" height="100" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
    
                                    <h2 className='category-tabs-title'>მცენარეები და ჩაები</h2>
                                </button>
                                <button 
                                    className={`tab-button ${activeTab === 2 ? 'active' : ''}`} 
                                    onClick={() => handleTabClick(2)}
                                >
                                    <svg className={`category-tabs-img ${activeTab === 2 ? 'category-tabs-img-active' : ''}`}  width="100" height="16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1284_64769)">

                                    <g mask="url(#mask0_1284_64769)">
                                    <path d="M88.8438 57.6781C82.6531 54.8643 74.5664 53.2631 65.9664 53.1346C69.0469 47.7887 70.7031 41.6486 70.7031 35.3516C70.7031 25.9674 67.0455 17.1109 60.4041 10.4141C53.7441 3.69844 44.9164 0 35.5469 0C16.1062 0 0 15.9721 0 35.3516C0 52.7125 12.8199 67.3996 29.5045 70.2144C29.4964 70.3772 29.4923 70.5402 29.4922 70.7031V82.4219C29.4922 87.5498 33.492 92.177 40.7545 95.4508C47.2625 98.3844 55.8176 100 64.8438 100C83.533 100 100 92.9869 100 82.4219V70.7031C100 65.5738 96.0379 60.9482 88.8438 57.6781ZM5.85938 35.3516C5.85938 19.365 19.4545 5.85938 35.5469 5.85938C42.56 5.85938 49.0045 8.35391 54.0535 12.5064L12.5518 54.0082C8.36621 48.9012 5.85938 42.3875 5.85938 35.3516ZM31.5395 64.5951C25.9393 63.8666 20.8426 61.5619 16.6926 58.1537L58.1891 16.6572C62.3453 21.7492 64.8438 28.2621 64.8438 35.3516C64.8438 41.9141 62.6977 48.2654 58.7787 53.373C49.5543 54.133 36.7297 57.2375 31.5395 64.5951ZM47.0129 61.5672L75.1063 81.6338C71.8635 82.1518 68.4043 82.4219 64.8438 82.4219C47.9641 82.4219 35.3516 76.235 35.3516 70.7031C35.3516 67.4082 39.827 63.8811 47.0129 61.5672ZM94.1406 82.4219C94.1406 87.7916 82.2258 94.1406 64.8438 94.1406C47.9641 94.1406 35.3516 87.9537 35.3516 82.4219V80.6176C40.4727 84.4313 50.5639 88.2812 64.8438 88.2812C79.1102 88.2812 89.0807 84.4355 94.1406 80.6586V82.4219ZM82.6752 79.8395L54.5934 59.7811C57.7555 59.2732 61.1998 58.9844 64.8438 58.9844C82.232 58.9844 94.1406 65.3371 94.1406 70.7031C94.1406 75.085 86.9902 78.4297 82.6752 79.8395Z" fill="#fff"/>
                                    </g>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_1284_64769">
                                    <rect width="100" height="100" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
    
                                    <h2 className='category-tabs-title'>მცენარეები და ჩაები</h2>
                                </button>
                                <button 
                                    className={`tab-button ${activeTab === 3 ? 'active' : ''}`} 
                                    onClick={() => handleTabClick(3)}
                                >
                                    <svg className={`category-tabs-img ${activeTab === 3 ? 'category-tabs-img-active' : ''}`} version="1.0" xmlns="http://www.w3.org/2000/svg" width="20px" height="16px" viewBox="0 0 207.000000 190.000000" preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,190.000000) scale(0.100000,-0.100000)"
                                        fill="#000000" stroke="none">
                                        <path d="M339 1887 c-79 -22 -155 -92 -180 -164 -30 -86 -4 -229 51 -278 17
                                        -15 17 -17 -2 -53 -15 -29 -18 -50 -14 -92 4 -47 10 -60 40 -87 42 -39 98 -55
                                        147 -44 33 8 38 6 48 -16 6 -13 11 -26 11 -28 0 -3 -62 -5 -138 -5 -128 0
                                        -142 -2 -189 -26 -42 -20 -57 -35 -77 -77 -14 -28 -26 -65 -26 -81 1 -40 23
                                        -102 47 -128 25 -28 87 -58 120 -58 27 0 29 -3 40 -67 22 -125 30 -151 61
                                        -213 60 -115 177 -248 283 -321 186 -126 437 -175 649 -125 90 21 82 21 150 2
                                        74 -21 391 -22 468 -2 107 29 168 81 214 182 18 41 22 67 22 154 0 58 -5 124
                                        -12 147 -15 52 -32 58 -150 58 -78 0 -83 1 -77 20 3 11 10 43 16 70 5 28 12
                                        60 14 71 4 16 14 23 45 27 164 22 202 255 55 339 -40 23 -43 23 -494 28 l-454
                                        5 -106 138 c-91 120 -103 141 -90 150 47 35 63 133 31 196 -21 43 -93 84 -139
                                        79 -29 -3 -32 -1 -43 35 -35 116 -196 199 -321 164z m141 -128 c23 -12 45 -32
                                        50 -44 5 -13 14 -26 19 -30 19 -11 12 -54 -11 -68 -165 -101 -199 -117 -219
                                        -107 -52 28 -75 124 -44 184 41 79 126 106 205 65z m260 -210 c7 -11 9 -26 7
                                        -33 -6 -16 -380 -236 -400 -236 -21 0 -39 26 -35 51 2 16 47 48 188 130 102
                                        59 195 108 207 108 13 1 27 -8 33 -20z m-30 -227 c0 -4 32 -47 70 -96 39 -48
                                        70 -92 70 -97 0 -5 -63 -9 -140 -9 l-140 0 -25 57 c-14 31 -23 59 -20 62 3 3
                                        38 24 78 48 68 40 107 53 107 35z m1202 -339 c24 -22 24 -77 -2 -103 -20 -20
                                        -33 -20 -877 -20 l-857 0 -23 22 c-27 25 -30 64 -7 96 l15 22 866 0 c792 0
                                        868 -1 885 -17z m-176 -270 c-14 -77 -13 -77 -55 -44 -62 50 -83 56 -122 36
                                        -19 -10 -62 -46 -96 -81 l-62 -63 -83 6 c-50 3 -100 1 -125 -6 -50 -14 -61
                                        -39 -70 -156 -6 -88 6 -163 37 -227 11 -23 17 -44 14 -47 -3 -3 -65 -6 -137
                                        -6 -115 1 -143 4 -217 27 -47 15 -114 44 -149 65 -77 45 -209 172 -242 232
                                        -13 24 -32 58 -41 75 -19 33 -53 140 -62 194 l-5 32 710 0 711 0 -6 -37z m-74
                                        -188 c38 -39 78 -122 78 -160 0 -36 -29 -99 -64 -140 l-25 -30 -1 97 c0 105
                                        -10 128 -55 128 -45 0 -55 -23 -55 -127 0 -96 0 -96 -20 -78 -11 10 -32 42
                                        -46 72 -22 43 -25 62 -21 98 8 53 42 110 99 166 46 44 42 45 110 -26z m-323
                                        -117 c-14 -77 17 -175 76 -247 22 -26 24 -31 10 -31 -41 0 -99 26 -128 57 -44
                                        46 -55 84 -56 181 l-1 82 54 0 53 0 -8 -42z m611 -37 c0 -90 -12 -135 -49
                                        -175 -29 -32 -94 -65 -129 -66 -22 0 -22 2 12 46 48 63 69 131 64 210 l-4 64
                                        53 0 53 0 0 -79z"/>
                                        </g>
                                    </svg>

                                    Category 3
                                </button>
                            </div>

                            {/* Правая сторона - Тексты */}
                            <div className="tab-content">
                                {activeTab === 1 && 
                                <Link to="cat1">
                                    <div className="tab-content-inner">
                                        <div className="tan-catalog-header">
                                            <div className="tab-content-heading">
                                                <img src={tabContentCategoryImg1} alt="" />
                                                <h2 className='tab-content-title'>მცენარეები და ჩაები</h2>
                                            </div>
                                            <Link to="./">
                                                <p className='catalog-category-all'>ყველას ნახვა</p>
                                            </Link>
                                        </div>
                                        
                                        <div className="tab-content-category-list">
                                            <div className="category-block">
                                                <img className='cat-img' src={cat1} alt="" />
                                                <div className="catalog__item-title">ნაწლავური პარაზიტები</div>
                                            </div>
                                            <div className="category-block">
                                                <img className='cat-img' src={cat1} alt="" />
                                                <div className="catalog__item-title">ნაწლავური პარაზიტები</div>
                                            </div>
                                            <div className="category-block">
                                                <img className='cat-img' src={cat1} alt="" />
                                                <div className="catalog__item-title">ნაწლავური პარაზიტები</div>
                                            </div>
                                            <div className="category-block">
                                                <img className='cat-img' src={cat1} alt="" />
                                                <div className="catalog__item-title">ნაწლავური პარაზიტები</div>
                                            </div>
                                            <div className="category-block">
                                                <img className='cat-img' src={cat1} alt="" />
                                                <div className="catalog__item-title">ნაწლავური პარაზიტები</div>
                                            </div>
                                            <div className="category-block">
                                                <img className='cat-img' src={cat1} alt="" />
                                                <div className="catalog__item-title">ნაწლავური პარაზიტები</div>
                                            </div>
                                            <div className="category-block">
                                                <img className='cat-img' src={cat1} alt="" />
                                                <div className="catalog__item-title">ნაწლავური პარაზიტები</div>
                                            </div>
                                            <div className="category-block">
                                                <img className='cat-img' src={cat1} alt="" />
                                                <div className="catalog__item-title">ნაწლავური პარაზიტები</div>
                                            </div>
                                            <div className="category-block">
                                                <img className='cat-img' src={cat1} alt="" />
                                                <div className="catalog__item-title">ნაწლავური პარაზიტები</div>
                                            </div>
                                            <div className="category-block">
                                                <img className='cat-img' src={cat1} alt="" />
                                                <div className="catalog__item-title">ნაწლავური პარაზიტები</div>
                                            </div>
                                            <div className="category-block">
                                                <img className='cat-img' src={cat1} alt="" />
                                                <div className="catalog__item-title">ნაწლავური პარაზიტები</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                
                                
                                
                                }
                                {activeTab === 2 && <p>Text 2</p>}
                                {activeTab === 3 && <p>Text 3</p>}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header2;
