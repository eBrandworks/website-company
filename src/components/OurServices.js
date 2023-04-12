import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function OurServices() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div id="services" className="overflow-hidden position-relative">
      <div className="container">
        <div className="row text-center pt-5">
          <h2
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="400"
            data-aos-easing="linear"
            data-aos-delay="200"
          >
            <strong>WE WORK ON</strong>
          </h2>
          <p
            className="px-5"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="400"
            data-aos-easing="linear"
            data-aos-delay="200"
          >
            Our focus is all set to optimize your business performance!
          </p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
          <div className="col">
            <div className="card border-0 align-items-center h-100 card-hov">
              <img
                src={require("../assets/our_services/listing.png")}
                width="20%"
                height="auto"
                className="pt-3"
                data-aos="zoom-in"
                alt="web-development"
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="400"
                  data-aos-easing="linear"
                  data-aos-delay="200"
                >
                  <strong>Customized Account Management</strong>
                </h5>
                <p
                  className="card-text"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="400"
                  data-aos-easing="linear"
                  data-aos-delay="200"
                >
                  We know one fits for all formula is not for you. A dedicated
                  experienced team will handle all INS and OUT of your Amazon
                  account. This includes brand management, inventory management
                  and forecast, pricing strategy, case management, Amazon TOS
                  compliance,
                </p>
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0 align-items-center h-100 card-hov-2">
              <img
                src={require("../assets/our_services/optimise.png")}
                width="20%"
                height="auto"
                className="pt-3"
                data-aos="zoom-in"
                alt="fintech-solutions"
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="400"
                  data-aos-easing="linear"
                  data-aos-delay="200"
                >
                  <strong>Listing <br/> Optimization</strong>
                </h5>
                <p
                  className="card-text"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="400"
                  data-aos-easing="linear"
                  data-aos-delay="200"
                >
                  Listing includes all the vital information available on
                  product page. The potential buyer’s needs maximum information
                  about the product before buying, our listing optimization
                  process get done by humans for humans. The crispy emotional
                  touch will help buyer to remember your product and also
                  increase conversion rates
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0 align-items-center h-100 card-hov">
              <img
                src={require("../assets/our_services/amazon.png")}
                width="20%"
                height="auto"
                className="pt-3"
                // className="py-3"
                data-aos="zoom-in"
                alt="mobile-application-development"
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="400"
                  data-aos-easing="linear"
                  data-aos-delay="200"
                >
                  <strong>Amazon Advertisement (PPC) </strong>
                </h5>
                <p
                  className="card-text"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="400"
                  data-aos-easing="linear"
                  data-aos-delay="200"
                >
                  Running optimized advertisement campaigns on world’s largest
                  marketplace is a tricky task which can cost a fortune if not
                  done right. Amazon offers Sponsored product, Sponsored Brand,
                  Sponsored Display, and Amazon Demand Side Platform (DSP)
                  campaigns to run on any account. Our professionals know which
                  type of campaign is most suitable for your product.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0 align-items-center h-100 card-hov">
              <img
                src={require("../assets/our_services/sourcing.png")}
                width="21%"
                height="auto"
                className="pt-3"
                data-aos="zoom-in"
                alt="graphic-designing"
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="400"
                  data-aos-easing="linear"
                  data-aos-delay="200"
                >
                  <strong>Sourcing</strong>
                </h5>
                <p
                  className="card-text"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="400"
                  data-aos-easing="linear"
                  data-aos-delay="200"
                >
                  Sourcing is the second fundamental of this business A perfect
                  product with perfect design sourced at high price is a total
                  loss. Our dedicated team knows how to negotiate with suppliers
                  while maintaining top notch quality of the product.
                </p>
                <br />
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="card border-0 align-items-center h-100  card-hov">
              <img
                src={require("../assets/our_services/research.png")}
                width="20%"
                height="auto"
                className="pt-3"
                data-aos="zoom-in"
                alt="web-development"
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="400"
                  data-aos-easing="linear"
                  data-aos-delay="200"
                >
                  <strong>Product Research</strong>
                </h5>
                <p
                  className="card-text"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="400"
                  data-aos-easing="linear"
                  data-aos-delay="200"
                >
                  Amazon revolves around your product, if product is not top
                  notch nothing can save you. AT eBrand Works we make sure to
                  hunt a golden product for you through our advanced product
                  hunting process which includes competition, value
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0 align-items-center h-100 card-hov">
              <img
                src={require("../assets/our_services/copy.png")}
                width="20%"
                height="auto"
                className="pt-3"
                data-aos="zoom-in"
                alt="mobile-application-development"
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="400"
                  data-aos-easing="linear"
                  data-aos-delay="200"
                >
                  <strong>Copywriting</strong>
                </h5>
                <p
                  className="card-text"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="400"
                  data-aos-easing="linear"
                  data-aos-delay="200"
                >
                  All best sellers have one thing in common, self-explanatory
                  listing. Keyword stuffing will never help the listing to get
                  ranked. Our written listing not only identify buyer pain
                  points but also suggests how our product is different and
                  exactly what they are looking for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
