import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";

import "./index.css";
import { NavLink, Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="container">
        <footer className="py-4">
          <div className="row row-cols-1 row-cols-md-3 text-start">
            <div className="col px-2 mb-3">
              <h4>
                <img
                  src={require("../assets/logo/ebrand-logo.png")}
                  alt="optiwise-logo"
                  width={200}
                />
              </h4>
              <br />
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a className="nav-link border-0 p-0 text-dark cursor-pointer text-start d-flex mob-style-ft-lo">
                    <LocationOnIcon className="color-orange-icon" />
                    <label style={{
                      cursor: "pointer"
                    }} className="ms-2 ml-mob-0">
                      LG-30 Sadiq Trade Center, Gulberg-II, Lahore - Pakistan
                    </label>
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="mailto:info@ebrandworks.com"
                    className="nav-link border-0 p-0 text-dark text-start"
                  >
                    <MailIcon className="color-orange-icon" />
                    <label style={{
                      cursor: "pointer"
                    }} className="ms-2">info@ebrandworks.com</label>
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="tel:+92 336 7364035​"
                    className="nav-link border-0 p-0 text-dark text-start"
                  >
                    <PhoneIcon className="color-orange-icon" />
                    <label style={{
                      cursor: "pointer"
                    }} className="ms-2">+92 336 7364035​</label>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col mb-3">
              <h4>Our Services</h4>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <NavLink to="/" className="nav-link p-0 text-muted">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <a href="/#Services" className="nav-link p-0 text-muted">
                    Services
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/blog" className="nav-link p-0 text-muted">
                    Blogs
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/team" className="nav-link p-0 text-muted">
                    Team
                  </NavLink>
                </li>

                <li className="nav-item mb-2">
                  <Link
                    to="/#contact"
                    className="nav-link p-0 text-muted"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col mb-3">
              <form>
                <h4>Join Our Newsletter</h4>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="email"
                    className="form-control m-0"
                    placeholder="Email address"
                    required
                  />
                  <button className="btn btn-orange rounded-0" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <hr />

          <div className="row">
            <p className="card-text text-dark">
              &copy; Copyright{" "}
              <Link className="ft-nav-link" to="/">
                eBrand Works
              </Link>{" "}
              All Right Reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
