import React, { useState } from 'react';
import './secondsearchbar.css'; // Import the CSS file

const SecondSearchBar: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setDropdown(null);
  };

  const toggleDropdown = (menu: string) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <div className="searchInputWrapper" style={{ width: isFocused ? '30%' : '15rem', transition: 'width 0.3s ease-in-out', marginLeft: '1rem' }}>
      <input
        type="text"
        id="searchInput"
        placeholder="Search local talent"
        className="searchInput"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isFocused && (
        <div className="buttonContainer">
          <button className="searchButton" onClick={() => toggleDropdown('when')}>WHEN?</button>
          {dropdown === 'when' && (
            <div className="dropdownMenu">
              <p>Today</p>
              <p>Tomorrow</p>
              <p>This Week</p>
            </div>
          )}
          <button className="searchButton" onClick={() => toggleDropdown('where')}>WHERE?</button>
          {dropdown === 'where' && (
            <div className="dropdownMenu">
              <p>New York</p>
              <p>Los Angeles</p>
              <p>Chicago</p>
            </div>
          )}
          <button className="searchButton" onClick={() => toggleDropdown('who')}>WHO?</button>
          {dropdown === 'who' && (
            <div className="dropdownMenu">
              <p>John Doe</p>
              <p>Jane Smith</p>
              <p>Michael Johnson</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SecondSearchBar;