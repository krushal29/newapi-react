import { Component } from "react";
import {Link} from "react-router-dom";

export class Navbar extends Component {
  // static propTypes = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link a className="navbar-brand" to="#">
              NewsMonkey
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link a className="nav-link active" aria-current="page" to="Home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link a className="nav-link" to="/About">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link a className="nav-link" to="/business">
                    business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link a className="nav-link" to="/Entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link a className="nav-link" to="/general">
                    general
                  </Link>
                </li>
                <li className="nav-item">
                  <Link a className="nav-link" to="/health">
                    health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link a className="nav-link" to="/science">
                    science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link a className="nav-link" to="/sports">
                    sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link a className="nav-link" to="/technology">
                    technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
