import { NavLink, Link } from 'react-router-dom'
import $ from "jquery";
import React from 'react'
function Header() {

  const hide = () => {
    const bar = document.getElementById("mynavbar")
    bar.classList.remove("show");
  }
  // direct browser to top right away

  // if (window.location.hash){
  //   scroll(0, 0);
  // }
  // // takes care of some browsers issue
  // setTimeout(() => { scroll(0, 0); }, 1);

  $(() => {
    if (window.location.hash) {
      $('html,body').animate({
        scrollTop: $(window.location.hash).offset().top + 'px'
      }, 1, 'swing');
    }
  });

  // const active_Page = window.location.href;
  // console.log(active_Page);
  // console.log(document.querySelectorAll("nav a, li a"))
  // const nav_Link = document.querySelectorAll("nav a, li a").
  //   forEach(link => {
  //     if (link.href === active_Page) {
  //       link.classList.add("active")
  //     }
  //   })

  return (
    <React.StrictMode>
      <div className="main-navbar bg-white sticky-top shadow">
        <div className="container">
          <div className="row no-wrap">
            <div className="col">
              <div className="nav navbar py-1 navbar-light navbar-expand-md">
                <NavLink className="navbar-brand" to="/">
                  <h1>
                    <img
                      src={require('../assets/logo/ebrand-logo.png')}
                      alt="optiwise-logo"
                      width={160}
                    />
                  </h1>
                </NavLink>
                <button className="navbar-toggler" data-bs-target="#mynavbar" data-bs-toggle="collapse"><span
                  className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center justify-content-md-end " id="mynavbar">
                  <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
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
                      <NavLink className="nav-link" to="/blogs">
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
          </div>
        </div>
      </div>
    </React.StrictMode>
  )
}

export default Header
