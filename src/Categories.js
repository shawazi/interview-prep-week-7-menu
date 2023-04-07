import React from 'react';

const Categories = () => {
  return (
    <div className="btn-container">
      <button type="button" className="filter-btn">
        All
      </button>
      <button type="button" className="filter-btn">
        Breakfast
      </button>
      <button type="button" className="filter-btn">
        Lunch
      </button>
      <button type="button" className="filter-btn">
        Shakes
      </button>
    </div>
  );
};

export default Categories;
