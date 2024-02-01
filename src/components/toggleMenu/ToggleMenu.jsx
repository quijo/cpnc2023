'user client'
import React, { useState } from 'react';

const ToggleMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}>Toggle Menu</button>

      {menuOpen && (
        <div>
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ToggleMenu;