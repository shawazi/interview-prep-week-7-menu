import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import data from './data';

function App() {
  const [menuData, setMenuData] = useState(null);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories setMenuData={setMenuData}/>
        <Menu menuData={menuData} setMenuData={setMenuData} />
      </section>
    </main>
  );
}

export default App;
