import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

function Carousel() {


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div>
      <div
        className="carousel-height"
        style={{
          backgroundColor: "#F6BA18",
          position: "relative",
        }}
      >
        <video
          className="background-video carousel-img-overlay"
          width={"100%"}
          height={"100%"}
          autoPlay
          playsInline
          loop
          muted
          style={{
            objectFit: "fill"
          }}
        >
          <source
            src={require("../assets/carousel/banner1.mp4")}
            type="video/mp4"
          />
        </video>
        <div className=" upper-sec background-video">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 align-items-center ">
              <div className="col col-lg-7">
                <div
                  className="card border-0 text-start bg-none"
                  data-aos="zoom-in"
                  data-aos-once="true"
                >
                  <div className="card-body pricing-card-style ">
                    <div className="row">
                      <h2
                        style={{
                          color: "white",
                          fontSize: "50px",
                          fontWeight: "bold",
                          margin: 0
                        }}
                      >
                        <strong className="mob-font-size">
                          Your{" "}
                          <span style={{ color: "#1B3035" }}>
                            A-Z Amazon
                          </span>{" "}
                          Partners
                        </strong>
                      </h2>
                    </div>
                    <br />
                    <p
                      className="mob-dis-none"
                      style={{
                        color: "#1B3035",
                        fontWeight: "bolder",
                        fontSize: "23px",
                      }}
                    >
                      Why fit in when you can stand out, we are group of
                      professionals providing premium A-Z Amazon tailored
                      services from small to 8-figures brand globally.
                    </p>
                    <a href="#contact" style={{ textDecoration: "none" }}>
                      <button className="btn btn-orange ">
                        GET FREE CONSULTATION
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className=" col col-lg-5"
                data-aos="zoom-in"
                data-aos-once="true"
              >
                <img
                  className="banner"
                  alt="banner"
                  width={"100%"}
                  height={"auto"}
                  src={require("../assets/carousel/banner-1.png")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
