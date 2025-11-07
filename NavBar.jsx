function NavBar({ setShowForm, showForm, darkMode, setDarkMode }) {
  return (
    <nav className={`navbar`}>
      <h1>Blog App</h1>
      <div className="nav-buttons">
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close" : "Add Blog"}
        </button>
        <button
          className="mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
