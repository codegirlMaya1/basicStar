"use client";

import React from 'react';
import './searchbar.css'; // Import the CSS file

export const SearchBar: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className="searchInputWrapper" style={{ width: '15rem', marginLeft: '1rem' }}>
      <input
        type="text"
        placeholder="Search local talent"
        className="searchInput"
        aria-label="Search local talent"
        onClick={onClick}
      />
    </div>
  );
};

export default SearchBar;