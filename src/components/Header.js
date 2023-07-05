
import { Link } from 'react-router-dom'

// function Header() {
//   return (
//     <div className="bg-white shadow-sm fixed-top">
//       <nav
//         className="container navbar navbar-expand-lg nav-height"
//         style={{ height: '80px' }}
//       >
//         <div className="container-fluid bg-white-mb">
// <a className="navbar-brand" href="/">
//   <h1>
//     <img
//       src={require('../assets/logo/ebrand-logo.png')}
//       alt="optiwise-logo"
//       width={150}
//     />
//   </h1>
// </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className="collapse navbar-collapse  w-100  justify-content-end"
//             id="navbarSupportedContent"
//           >
//             <form className="d-flex justify-content-center" role="search">
// <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
//   <li className="nav-item">
//     <a className="nav-link active" aria-current="page" href="/">
//       Home
//     </a>
//   </li>
//   <li className="nav-item">
//     <a className="nav-link" href="#services">
//       Services
//     </a>
//   </li>
//   <li className="nav-item">
//     <Link className="nav-link" to="/blogs">
//       Blogs
//     </Link>
//   </li>
//   <li className="nav-item">
//     <a className="nav-link" href="#about">
//       About Us
//     </a>
//   </li>
//   <li className="nav-item">
//     <Link className="nav-link" to="/team">
//       Team
//     </Link>
//   </li>

//   <li className="nav-item">
//     <a className="nav-link" href="faqs"  style={{marginRight:"15px"}}>
//       FAQ's
//     </a>
//   </li>
//   <li>
//     <button  className="btn btn-orange" type="button">

//       Contact US
//     </button>
//   </li>
// </ul>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }


import React from 'react'

function Header() {

  const hide = () => {
    const bar = document.getElementById("mynavbar")
    bar.classList.remove("show");
  }

  return (
    <React.StrictMode>
      <div className="main-navbar bg-white sticky-top shadow">
        <div className="container">
          <div className="row no-wrap">
            <div className="col">
              <div className="nav navbar py-1 navbar-light navbar-expand-md">
                <a className="navbar-brand" href="/">
                  <h1>
                    <img
                      src={require('../assets/logo/ebrand-logo.png')}
                      alt="optiwise-logo"
                      width={150}
                    />
                  </h1>
                </a>
                <button className="navbar-toggler" data-bs-target="#mynavbar" data-bs-toggle="collapse"><span
                  className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center justify-content-md-end " id="mynavbar">
                  <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#services">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/blogs">
                        Blogs
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#about">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/team">
                        Team
                      </Link>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#faqs" style={{ marginRight: "15px" }}>
                        FAQ's
                      </a>
                    </li>
                    <li>
                      <a href='#contact'>
                        <button className="btn btn-orange" type="button">
                          Contact US
                        </button>
                      </a>
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
