import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo.svg";

function SideBar() {
  const navigate = useNavigate();

  const _returnIsActive = (path) => {
    return window.location.pathname === path ? "active" : "";
  };

  const UserMenu = (
    <div
      href="#"
      className="d-flex align-items-center justify-content-center link-body-emphasis text-decoration-none "
    >
      <span className="textAvatar me-2">A</span>
      <span>
        <strong className="text-truncate">Abhishek Ghosh</strong>
        <p className="mb-0 text-grey text-truncate">
          abhishek.ghosh@tuteck.com
        </p>
      </span>
    </div>
  );
  return (
    <nav className="d-flex flex-column flex-shrink-0 p-3 vh-100 sideBar">
      <div
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <div className="siteLogo">
          <img src={logo} alt="Logo" />
        </div>
        <a href="#" className="mobile-menu">
          <i className="bi bi-list"></i>
        </a>
      </div>
      <Nav className="nav nav-pills siteNav my-auto" as="ul">
        <Nav.Item
          as="li"
          className="nav-item"
          onClick={() => navigate("/nsso-secured/identify-particulate-1")}
        >
          <Nav.Link
            className={`d-flex nav-link ${_returnIsActive(
              "/nsso-secured/identify-particulate-1"
            )}`}
          >
            {" "}
            <i className="bi bi-check-circle-fill text-success me-2" />
            <span>Identification Particulars 1</span>
          </Nav.Link>
        </Nav.Item>
        {/* <Nav.Item
          as="li"
          className="nav-item"
          onClick={() => navigate("/nsso-secured/identify-particulate-2")}
        >
          <Nav.Link
            className={`d-flex nav-link ${_returnIsActive(
              "/nsso-secured/identify-particulate-2"
            )}`}
          >
            <i className="bi bi-question-circle-fill me-2" />
            <span>Identification Particulars 2</span>
          </Nav.Link>
        </Nav.Item> */}
        <Nav.Item
          as="li"
          className="nav-item"
          onClick={() => navigate("/nsso-secured/capital-expenditure-outlook")}
        >
          <Nav.Link
            className={`d-flex nav-link ${_returnIsActive(
              "/nsso-secured/capital-expenditure-outlook"
            )}`}
          >
            <i className="bi bi-question-circle-fill me-2" />
            <span>Capital Expenditure (CAPEX) Outlook</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          as="li"
          className="nav-item"
          onClick={() =>
            navigate("/nsso-secured/capital-expenditure-intention")
          }
        >
          <Nav.Link
            className={`d-flex nav-link ${_returnIsActive(
              "/nsso-secured/capital-expenditure-intention"
            )}`}
          >
            <i className="bi bi-question-circle-fill me-2" />
            <span>Capital Expenditure (CAPEX) Intention</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          as="li"
          className="nav-item"
          onClick={() => navigate("/nsso-secured/investment-activity-outlook")}
        >
          <Nav.Link
            className={`d-flex nav-link ${_returnIsActive(
              "/nsso-secured/investment-activity-outlook"
            )}`}
          >
            <i className="bi bi-question-circle-fill me-2" />
            <span>Investment Activity Outlook</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          as="li"
          className="nav-item"
          onClick={() => navigate("/nsso-secured/investment-activity-strategy")}
        >
          <Nav.Link
            className={`d-flex nav-link ${_returnIsActive(
              "/nsso-secured/investment-activity-strategy"
            )}`}
          >
            <i className="bi bi-question-circle-fill me-2" />
            <span>Investment Activity Strategy</span>
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <NavDropdown
        id="nav-dropdown-dark-example"
        title={UserMenu}
        menuVariant="light"
        className="profile-drop"
      >
        <NavDropdown.Item
          href="#action/3.1"
          onClick={() => {
            sessionStorage.setItem("token");
            navigate("/");
          }}
        >
          Logout
        </NavDropdown.Item>
      </NavDropdown>
    </nav>
  );
}

export default SideBar;
