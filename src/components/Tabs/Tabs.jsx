import React, { useState } from 'react';
import './Tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="tabs-container">
      {/* Левая сторона - Категории */}
      <div className="tabs">
        <button 
          className={`tab-button ${activeTab === 1 ? 'active' : ''}`} 
          onClick={() => handleTabClick(1)}
        >
          Category 1
        </button>
        <button 
          className={`tab-button ${activeTab === 2 ? 'active' : ''}`} 
          onClick={() => handleTabClick(2)}
        >
          Category 2
        </button>
        <button 
          className={`tab-button ${activeTab === 3 ? 'active' : ''}`} 
          onClick={() => handleTabClick(3)}
        >
          Category 3
        </button>
      </div>

      {/* Правая сторона - Тексты */}
      <div className="tab-content">
        {activeTab === 1 && <p>Text 1</p>}
        {activeTab === 2 && <p>Text 2</p>}
        {activeTab === 3 && <p>Text 3</p>}
      </div>
    </div>
  );
};

export default Tabs;
