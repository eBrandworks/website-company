import React from "react";

const Testimonals = () => {
  return (
    <div className="py-3" style={{backgroundColor:"#f9f9f9",height:"100%"}}>
        <div className="text-center pb-4" id="testimonals">
          <h2
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="400"
            data-aos-easing="linear"
            data-aos-delay="200"
            data-aos-once="true"
            className="mob-font-size"
          >
            <strong>Our Testimonals</strong>
          </h2>
        </div>
    <div
    
      id="carouselExampleDark"
      class="carousel  slide"
      data-bs-ride="carousel"
    >
      <div className="container">
        <div class="carousel-inner" >
          <div class="carousel-item active" data-bs-interval="10000" >
            <div className="card border-0 align-items-center card-hov" style={{backgroundColor:"#f9f9f9",height:"100%"}}>
              <img
                src={require("../assets/testimonals/1.webp")}
                style={{ borderRadius: "50%" }}
                width="100px"
                height="100px"
                // className="pt-3"
                data-aos="zoom-in"
                data-aos-once="true"
                alt="mobile-application-development"
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="400"
                  data-aos-easing="linear"
                  data-aos-delay="200"
                >
                  <strong>Taylor Jay</strong>
                </h5>
                <p
                  className="card-text"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="400"
                  data-aos-easing="linear"
                  data-aos-delay="200"
                >
                  Love the Service of E Brand Works. Highly Experienced Team and
                  Perfect Work Ethics.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <div className="card border-0 align-items-center h-100 card-hov" style={{backgroundColor:"#f9f9f9",height:"100%"}}>
              <img
                src={require("../assets/testimonals/2.jpeg")}
                style={{ borderRadius: "50%" }}
                width="100px"
                height="100px"
                // className="pt-3"
                data-aos="zoom-in"
                data-aos-once="true"
                alt="mobile-application-development"
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="400"
                  data-aos-easing="linear"
                  data-aos-delay="200"
                >
                  <strong>Marion Campbell</strong>
                </h5>
                <p
                  className="card-text"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="400"
                  data-aos-easing="linear"
                  data-aos-delay="200"
                >
                  They did great job in saving my Amazon Business from Loss to
                  High profits, it was great journey with e brand works.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="card border-0 align-items-center h-100 card-hov" style={{backgroundColor:"#f9f9f9",height:"100%"}}>
              <img
                src={require("../assets/testimonals/3.jpeg")}
                style={{ borderRadius: "50%" }}
                width="100px"
                height="100px"
                // className="pt-3"
                data-aos="zoom-in"
                data-aos-once="true"
                alt="mobile-application-development"
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="400"
                  data-aos-easing="linear"
                  data-aos-delay="200"
                >
                  <strong>Garrett Kite</strong>
                </h5>
                <p
                  className="card-text"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="400"
                  data-aos-easing="linear"
                  data-aos-delay="200"
                >
                  I have used E-Brand Works Services. They are team of
                  Well-Skilled and Critical Strategists People.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" id="carousel-btn" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Testimonals;
