import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header-body">
      <div
        className="logo-box"
        onClick={() => {
          navigate("/");
        }}
      />

      <div className="header-options">
        <div
          className="nav-option"
          onClick={() => {
            navigate("/");
          }}
        >
          <h2>Home</h2>
        </div>
        <div
          className="nav-option"
          onClick={() => {
            navigate("/data-search/Josh%20Allen");
          }}
        >
          <h2>Data Search</h2>
        </div>
        <div
          className="nav-option"
          onClick={() => {
            navigate("/sql-editor");
          }}
        >
          <h2>SQL Editor</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
