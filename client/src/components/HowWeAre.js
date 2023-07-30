import React from "react";

function HowWeAre() {
  return (
    <div id="faqs">
      <div
        className="container overflow-hidden"
        //   style={{ paddingTop: state === "pricing" ? "2rem" : "0px" }}
      >
        <div className="row row-cols-1 row-cols-md-2 align-items-center">
          <div className="col">
            {/* <div className="row row-cols-1 row-cols-md-2">
              <div className="col mob-dis-none">
                <img
                  src={require("../assets/trust_optiwise/g-2.webp")}
                  width="65%"
                  height="auto"
                  style={{ borderRadius: "10px" }}
                  alt="how-we-are-1"
                />
              </div>
              <div className="col mob-dis-none">
                <img
                  src={require("../assets/trust_optiwise/g-1.webp")}
                  width="65%"
                  height="auto"
                  alt="how-we-are-2"
                />
              </div>
            </div> */}
            {/* <div className="row row-cols-1 row-cols-md-1">
              <div className="col mob-dis-none">
                <img
                  src={require("../assets/trust_optiwise/g-5.webp")}
                  width="30%"
                  height="auto"
                  style={{
                    borderRadius: "10px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                  alt="how-we-are-3"
                />
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col mob-dis-none">
                <img
                  src={require("../assets/trust_optiwise/g-4.webp")}
                  width="65%"
                  height="auto"
                  alt="how-we-are-4"
                />
              </div>
              <div className="col">
                <img
                  src={require("../assets/trust_optiwise/g-3.webp")}
                  width="65%"
                  height="auto"
                  alt="how-we-are-5"
                />
              </div>
            </div> */}
            <img
              alt="how-work"
              width="100%"
              src={require("../assets/trust_optiwise/how-work.png")}
            />
          </div>
          <div className="col">
            <div
              className="card  border-0 text-start bg-none"
              data-aos-once="true"
              data-aos="zoom-in"
            >
              <div className="card-body pricing-card-style ">
                <div className="row py-5">
                  <h2 className="mob-font-size">
                    <strong>Frequently Asked Question <span style={{color:"#1B3035"}}>(FAQ's)</span></strong>
                  </h2>
                  <p className="m-0">
                    Where Your Business Gets Just The Right Boost!
                  </p>
                </div>

                <p>
                  <button
                    className="btn btn-orange w-100"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample1"
                    aria-expanded="false"
                    aria-controls="collapseExample1"
                  >
                    Are Amazon Agencies Really Worth the Money?
                  </button>
                </p>
                <div className="collapse" id="collapseExample1">
                  <div className="card card-body">
                    Amazon marketing agencies are organizations specializing in
                    market research and advertisement for Amazon sellers.
                  </div>
                </div>
                <p>
                  <button
                    className="btn btn-orange mt-3 w-100"
                    type="button2"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample2"
                    aria-expanded="false"
                    aria-controls="collapseExample2"
                  >
                    Result-Oriented Marketing Strategies?
                  </button>
                </p>
                <div className="collapse" id="collapseExample2">
                  <div className="card card-body">
                    Fulfilment by Amazon (FBA) refers to a packaging and
                    shipping service provided by the online
                  </div>
                </div>
                <h3>
                  <button
                    className="btn btn-orange mt-3 w-100"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample3"
                    aria-expanded="false"
                    aria-controls="collapseExample3"
                  >
                    Why Profitability is More Important Than Ranking on Amazon?
                  </button>
                </h3>
                <div className="collapse" id="collapseExample3">
                  <div className="card card-body">
                    The A9 Algorithm was introduced by Amazon as a system that
                    decides how products are …
                  </div>
                </div>
                {/* <p>
                  <button
                    className="btn btn-orange mt-3 w-100"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample4"
                    aria-expanded="false"
                    aria-controls="collapseExample4"
                  >
                    Get the Best ROI
                  </button>
                </p> */}
                {/* <div className="collapse" id="collapseExample4">
                  <div className="card card-body">
                    Some placeholder content for the collapse component. This
                    panel is hidden by default but revealed when the user
                    activates the relevant trigger.
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <p
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="400"
            data-aos-easing="linear"
            data-aos-delay="200"
          >
            We don’t just sit at the table there and then and show the
            traditional 3 or 4 packages. We take our time to see what our client
            is looking for and then we make a whole new package, catering just
            YOUR brand! We promise exceptional results when it comes to
            designing the brand strategy, building the USP, the branding and
            design to register that USP in your customer’s mind and of course
            then finally embedding all these together in your digital existence
            from your website and across all your social channels.
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default HowWeAre;
