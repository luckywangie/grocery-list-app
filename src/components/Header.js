import React from "react";

function Header({ isDarkMode, onToggleDarkMode }) {
  return (
    <header>
      <h1>Shopster</h1>
      <button onClick={onToggleDarkMode}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
