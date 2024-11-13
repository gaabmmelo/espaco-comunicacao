import "./index.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3">
        <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <span className="fs-4">
            <img className="logo-image" src={logo} />
          </span>
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Especialidades
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Equipe
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contato
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
