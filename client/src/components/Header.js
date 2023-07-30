import { NavLink, Link } from 'react-router-dom'
import $ from "jquery";
import React from 'react'

function Header() {

  const hide = () => {
    const bar = document.getElementById("mynavbar")
    bar.classList.remove("show");
  }

  $(() => {
    if (window.location.hash) {
      $('html,body').animate({
        scrollTop: $(window.location.hash).offset().top + 'px'
      }, 1, 'swing');
    }
  });

  return (
    <React.StrictMode>
      <div className="main-navbar bg-white sticky-top shadow">
        <div className="container">
          <div className="row no-wrap">
            <div className="col">
              <nav className="navbar fixed-top py-1 sticky-top navbar-light">
                <div className="container">

                  <NavLink className="navbar-brand" to="/">
                    <h1>
                      <img
                        src={require('../assets/logo/ebrand-logo.png')}
                        alt="optiwise-logo"
                        width={160}
                      />
                    </h1>
                  </NavLink>
                  <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header py-2 px-3">
                      <NavLink className="navbar-brand" to="/">
                        <h1>
                          <img
                            src={require('../assets/logo/ebrand-logo.png')}
                            alt="optiwise-logo"
                            width={160}
                          />
                        </h1>
                      </NavLink>
                      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body py-2 px-3">
                      <ul className="navbar-nav ">
                        <li className="nav-item">
                          <NavLink className="nav-link" activeclassname="active" onClick={hide} to="/">
                            Home
                          </NavLink>
                        </li>
                        <li className="nav-item" onClick={hide}>
                          <Link className="nav-link" to="/#Services">
                            Services
                          </Link>
                        </li>
                        <li className="nav-item" onClick={hide}>
                          <NavLink className="nav-link" to="/blog">
                            Blogs
                          </NavLink>
                        </li>
                        <li className="nav-item" onClick={hide}>
                          <Link className="nav-link" to="/#about">
                            About Us
                          </Link>
                        </li>
                        <li className="nav-item" onClick={hide}>
                          <NavLink className="nav-link" to="/team">
                            Team
                          </NavLink>
                        </li>

                        <li className="nav-item" onClick={hide}>
                          <Link className="nav-link" to="/#Faqs" style={{ marginRight: "15px" }}>
                            FAQ's
                          </Link>
                        </li>
                        <li className="nav-item" onClick={hide}>
                          <Link to='/#contact'>
                            <button className="btn btn-orange" type="button">
                              Contact US
                            </button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  )
}

export default Header
