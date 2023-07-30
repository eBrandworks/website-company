import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AddOns() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div
      className="overflow-hidden "
      id="pricing"
      //   style={{ paddingTop: state === "pricing" ? "2rem" : "0px" }}
    >
      {/* <div className="container"> */}
 
        <div className="overlay">
        <div className="row text-center py-5">
          <h2
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="400"
            data-aos-easing="linear"
            data-aos-delay="200"
            className="mob-font-size"
          >
            <strong>ADD ONS</strong>
          </h2>
        </div>
        <div className="container">

        <div className="row row-cols-1 row-cols-md-4 g-4 pb-5">
          <div className="col">
            <div
              className="card h-100 rounded-3 shadow-sm text-center "
              data-aos="zoom-in"
              data-aos-once="true"
            >
              {/* <img alt="img" src={require("../assets/about_us/main-g.webp")} /> */}
              <div className="card-body pricing-card-style">
                <h2 style={{fontWeight:"bolder"}}>
                3M+
                </h2>
              <p style={{color:"#1B3035",fontWeight:"bold"}}>INVESTMENT PORTFOLIO</p>
              </div>
              
            </div>
          </div>
          <div className="col">
            <div
              className="card h-100 rounded-3 shadow-sm text-center "
              data-aos="zoom-in"
              data-aos-once="true"
            >
              {/* <img alt="img" src={require("../assets/about_us/main-g.webp")} /> */}
              <div className="card-body pricing-card-style">
                <h2 style={{fontWeight:"bolder"}}>
                10M+
                </h2>
              <p style={{color:"#1B3035",fontWeight:"bold"}}>REVENUE GENERATED</p>
              </div>
              
            </div>
          </div>
          <div className="col">
            <div
              className="card h-100 rounded-3 shadow-sm text-center "
              data-aos="zoom-in"
              data-aos-once="true"
            >
              {/* <img alt="img" src={require("../assets/about_us/main-g.webp")} /> */}
              <div className="card-body pricing-card-style">
                <h2 style={{fontWeight:"bolder"}}>
                160+
                </h2>
              <p style={{color:"#1B3035",fontWeight:"bold"}}>BRAND LAUNCHES</p>
              </div>
              
            </div>
          </div>
          <div className="col">
            <div
              className="card h-100 rounded-3 shadow-sm text-center "
              data-aos="zoom-in"
              data-aos-once="true"
            >
              {/* <img alt="img" src={require("../assets/about_us/main-g.webp")} /> */}
              <div className="card-body pricing-card-style">
                <h2 style={{fontWeight:"bolder"}}>
                300+
                </h2>
              <p style={{color:"#1B3035",fontWeight:"bold"}}>STUDENTS TRAINED</p>
              </div>
              
            </div>
          </div>
        </div>
        </div>
</div>
       
   
    </div>
  );
}

export default AddOns;
