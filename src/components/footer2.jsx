import React, { useState, useEffect } from 'react';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkMode);
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="btn btn-outline-secondary">
      {darkMode ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}

export default ThemeToggle;
