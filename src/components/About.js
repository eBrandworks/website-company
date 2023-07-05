import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div id="about">
      <div
        className="container "
        //   style={{ paddingTop: state === "pricing" ? "2rem" : "0px" }}
      >
        <div className="row row-cols-1 row-cols-md-2 align-items-center">
          <div className="col">
            <div className="card mb-md-5 border-0 text-start bg-none">
              <div className="card-body pricing-card-style ">
                <div className="row pt-5">
                  <h2
                    className="mob-font-size"
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <strong>ABOUT US</strong>
                  </h2>
                </div>

                <p className=" m-0 about-text" data-aos="fade-up" data-aos-once="true">
                  We are a team of motivated and focused individuals and our
                  ultimate goal is result optimizations and maximum ROI. Our
                  performance marketing strategies are thorough and
                  comprehensive, we have worked in many challenging niches like
                  digital news media platforms or non-profit organizations. Our
                  USP is using unique and dedicated research patterns that give
                  us the edge over our competitors. We believe and focus on
                  building meaningful and long-term customer relationships for
                  us and for our customer’s target market as well! In today’s
                  world, when your customer has plenty of other options, our
                  focus is on training teams to ace customer relationship
                  marketing and drive sales from there! We don’t only devise
                  strategies or design platforms or websites, we train our
                  customer’s teams as well to align efforts with proven results
                  and growth!
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-md-0 p-0 mb-5">
            <img
              src={require("../assets/about_us/aws.gif")}
              width="100%"
              height="100%"
              className="about-logo"
              data-aos="fade-left"
              data-aos-once="true"
              alt="about_us_1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
