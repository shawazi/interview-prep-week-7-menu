import React from 'react';
import axios from 'axios';

const Categories = ({menuData, setMenuData}) => {
  const handleFilter = (e) => {
    const filterOption = e.target.name;
    switch (filterOption) {
      case 'all':
        axios.get("https://cwbarry.pythonanywhere.com/menu/")
        .then(response => setMenuData(response.data.menu))
        .catch(error => console.error(error));
        break;
      case 'breakfast':
        axios.get("https://cwbarry.pythonanywhere.com/menu/")
        .then(response => setMenuData(response.data.menu.filter(category => category === 'breakfast')))
        .then(console.log(menuData))
        .catch(error => console.error(error));
    }
  }

  return (
    <div className="btn-container">
      <button type="button" name="all" className="filter-btn" onClick={handleFilter}>
        All
      </button>
      <button type="button" name="breakfast" className="filter-btn" onClick={handleFilter}>
        Breakfast
      </button>
      <button type="button" name="lunch" className="filter-btn" onClick={handleFilter}>
        Lunch
      </button>
      <button type="button" name="shakes" className="filter-btn" onClick={handleFilter}>
        Shakes
      </button>
    </div>
  );
};

export default Categories;
