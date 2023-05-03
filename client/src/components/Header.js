import "./Header.css";

function Header() {
  return (
    <div className="header-body">
      <div className="logo-box" />

      <div className="header-options">
        <div className="nav-option">
          <h2>Home</h2>
        </div>
        <div className="nav-option">
          <h2>Data Search</h2>
        </div>
        <div className="nav-option">
          <h2>Contact Us</h2>
        </div>
        <div className="nav-option">
          <h2>About</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
