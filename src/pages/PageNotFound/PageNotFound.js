import React from 'react'
import { Link } from 'react-router-dom'
import './PageNotFound.css'
import errorImage from '../../assets/404.jpg'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const PageNotFound = () => {
  return (
    <div>
      <section className="login-main-wrapper">
        <div className="main-container">
          <div className="login-process">
            <div className="login-main-container">
              <div className="icon-div">
                <Link style={{ textDecoration: 'none' }} to="/">
                  <AiOutlineCloseCircle className="close-icon" />
                </Link>
              </div>
              <div className="thankyou-wrapper">
                <h1>
                  <img
                    // data-aos="zoom-in"
                    // data-aos-duration="3000"
                    width="300px"
                    src={errorImage}
                    alt="thanks"
                  />
                </h1>
                <p>Ooops, page not found !</p>
                <Link style={{ textDecoration: 'none' }} to="/">
                  <h6>Back to home</h6>
                </Link>
                {/* <div className="clr"></div> */}
              </div>
              {/* <div className="clr"></div> */}
            </div>
          </div>
          {/* <div className="clr"></div> */}
        </div>
      </section>
    </div>
  )
}

export default PageNotFound
