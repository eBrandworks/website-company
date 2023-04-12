import React, { useEffect } from "react";
import "./ThankU.css";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ThankU = () => {
  const fbPixelTrack = () => {
    window.fbq("track", "Lead");
  };
  useEffect(() => {
    fbPixelTrack();
  }, []);

  return (
    <div>
      <section className="login-main-wrapper">
        <div className="main-container">
          <div className="login-process">
            <div className="login-main-container">
              <div className="icon-div">
                <Link style={{ textDecoration: "none" }} to="/">
                  <AiOutlineCloseCircle className="close-icon" />
                </Link>
              </div>
              <div className="thankyou-wrapper">
                <h1>
                  <img
                    // data-aos="zoom-in"
                    // data-aos-duration="1000"
                    width="300px"
                    src="http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png"
                    alt="thanks"
                  />
                </h1>
                <p>for contacting eBrand Works, we will get in touch with you soon</p>
                <Link style={{ textDecoration: "none" }} to="/">
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
  );
};

export default ThankU;
