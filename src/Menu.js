import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = ({menuData, setMenuData}) => {

  useEffect(() => {
    axios.get("https://cwbarry.pythonanywhere.com/menu/")
    .then(response => setMenuData(response.data.menu))
    .catch(error => console.error(error));
  }, []);


  
  console.log(menuData);

  return (
    <div className="section-center">
      {menuData && menuData.map(item => (
        <article className="menu-item" key={item.id}>
        <img src={item.img} alt={item.title} className="photo" />
        <div className="item-info">
          <header>
            <h4>{item.title}</h4>
            <h4 className="price">{item.price}</h4>
          </header>
          <p className="item-text">{item.desc}</p>
        </div>
      </article>
      ))}
    </div>
  );
};

export default Menu;
