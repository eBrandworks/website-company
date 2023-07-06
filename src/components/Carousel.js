import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
// import emailjs from "emailjs-com";
// import { useNavigate } from "react-router-dom";
// import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

import validator from "validator";

import "./index.css";
// import { fontWeight } from "@mui/system";

function Carousel() {
  // let navigate = useNavigate();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [ourServices, setOurServices] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");

  // const [emailError, setEmailError] = useState("");

  // const [open, setOpen] = React.useState(false);
  // const [error, setError] = React.useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };

  // const Alert = React.forwardRef(function Alert(props, ref) {
  //   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  // });

  // const handleChange = (e) => {
  //   setOurServices(e.target.value);
  // };

  // const validateEmail = (e) => {
  //   var email = e.target.value;
  //   // console.log(validator.isEmail(email));
  //   setEmail(email);
  // };

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   if (validator.isEmail(email)) {
  //     setEmailError("");
  //     setName("");
  //     setEmail("");
  //     setOurServices("");
  //     setSubject("");
  //     setMessage("");

  //     emailjs
  //       .sendForm(
  //         "service_mudht07",
  //         "template_d8bes9c",
  //         e.target,
  //         "ltdhK8ov0SIdYft8H"
  //       )
  //       .then(
  //         function (response) {
  //           // if (response.status === 200) {
  //           //   return setOpen(true)
  //           // }
  //           navigate("/thankyou");
  //           // console.log("SUCCESS!", response.status, response.text);
  //         },
  //         function (error) {
  //           if (error) {
  //             navigate("/*");
  //           }
  //           // console.log("FAILED...", error);
  //         }
  //       );
  //   } else {
  //     setEmailError("Enter valid Email!");
  //   }
  // };

  //   return (
  //     <div className="style-carousel">
  //       <div id="myCarousel">
  //         <div className="carousel-inner">
  //           <div className="carousel-item active">
  //             <div
  //               style={{
  //                 backgroundColor: "#F6BA18",
  //                 height: "auto",
  //                 width: "100%",
  //                 position: "relative",
  //               }}
  //             >
  //               <video
  //                 className="background-video carousel-img-overlay"
  //                 width={"100%"}
  //                 height={"100%"}
  //                 autoPlay
  //                 playsInline
  //                 loop
  //                 muted
  //               >
  //                 <source
  //                   src={require("../assets/carousel/banner1.mp4")}
  //                   type="video/mp4"
  //                 />
  //               </video>
  //             </div>

  //             <div className=" upper-sec background-video">
  //               <div className="container">
  //                 <div className="row row-cols-1 row-cols-md-2 align-items-center ">
  //                   <div className="col">
  //                     <div
  //                       className="card border-0 text-start bg-none"
  //                       data-aos="zoom-in"
  //                     >
  //                       <div className="card-body pricing-card-style ">
  //                         <div className="row">
  //                           <h2
  //                             style={{
  //                               color: "white",
  //                               fontSize: "60px",
  //                               fontWeight: "bold",
  //                             }}
  //                           >
  //                             <strong className="mob-font-size">
  //                               Your{" "}
  //                               <span style={{ color: "#1B3035" }}>
  //                                 A-Z Amazon
  //                               </span>{" "}
  //                               Partners
  //                             </strong>
  //                           </h2>
  //                         </div>
  //                         <br />
  //                         <p
  //                           className="mob-dis-none"
  //                           style={{
  //                             color: "#1B3035",
  //                             fontWeight: "bolder",
  //                             fontSize: "25px",
  //                           }}
  //                         >
  //                           Why fit in when you can stand out, we are group of
  //                           professionals providing premium A-Z Amazon tailored
  //                           services from small to 8-figures brand globally.
  //                         </p>
  //                         {/* <br /> */}
  //                         <button className="btn btn-orange ">
  //                           <a href="#contact" style={{ textDecoration: "none" }}>
  //                             GET FREE CONSULTATION
  //                           </a>
  //                         </button>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col" data-aos="zoom-in">
  //                     {/* <div
  //                       className="card border-0 text-start m-c-form car-box-shadow"
  //                       data-aos="zoom-in"
  //                     >
  //                       <div className="card-body pricing-card-style ">
  //                         <Box
  //                           component="form"
  //                           sx={{
  //                             "& .MuiTextField-root": { m: 1, width: "25ch" },
  //                           }}
  //                           noValidate
  //                           autoComplete="off"
  //                         ></Box>
  //                         <form onSubmit={sendEmail}>
  //                           <div className="mx-2">
  //                             <div className="row row-cols-1">
  //                               <div className="card border-0 bg-none">
  //                                 <div className="card-body ">
  //                                   <div className="col p-r-5">
  //                                     <TextField
  //                                       fullWidth
  //                                       sx={{ m: 1 }}
  //                                       className="pb-3"
  //                                       id="standard-textarea"
  //                                       label="Name"
  //                                       placeholder=""
  //                                       value={name}
  //                                       multiline
  //                                       onChange={(e) => setName(e.target.value)}
  //                                       name="name"
  //                                       required
  //                                       variant="standard"
  //                                     />
  //                                   </div>

  //                                   <div className="col p-r-5">
  //                                     <TextField
  //                                       fullWidth
  //                                       sx={{ m: 1 }}
  //                                       className="pb-3"
  //                                       id="email"
  //                                       label="Email"
  //                                       placeholder=""
  //                                       value={email}
  //                                       onChange={(e) => validateEmail(e)}
  //                                       name="email"
  //                                       type="email"
  //                                       required
  //                                       multiline
  //                                       variant="standard"
  //                                     />
  //                                     <span
  //                                       style={{
  //                                         // fontWeight: "bold",
  //                                         color: "red",
  //                                       }}
  //                                     >
  //                                       {emailError}
  //                                     </span>
  //                                   </div>

  //                                   <div className="col p-r-5 pb-3">
  //                                     <FormControl
  //                                       variant="standard"
  //                                       fullWidth
  //                                       // name="ourServices"
  //                                       sx={{ m: 1 }}
  //                                       // sx={{ m: 1, minWidth: 120 }}
  //                                     >
  //                                       <InputLabel id="demo-simple-select-standard-label">
  //                                         Our Services
  //                                       </InputLabel>
  //                                       <Select
  //                                         labelId="demo-simple-select-standard-label"
  //                                         id="demo-simple-select-standard"
  //                                         value={ourServices}
  //                                         name="services"
  //                                         onChange={handleChange}
  //                                         label="Our Services"
  //                                       >
  //                                         <MenuItem value={"Customized Account Management"}>
  //                                         Customized Account Management
  //                                         </MenuItem>
  //                                         <MenuItem value={"Listing Optimization"}>
  //                                         Listing Optimization
  //                                         </MenuItem>
  //                                         <MenuItem value={"Amazon Advertisement (PPC)"}>
  //                                         Amazon Advertisement (PPC)
  //                                         </MenuItem>
  //                                         <MenuItem value={"Sourcing"}>
  //                                         Sourcing
  //                                         </MenuItem>
  //                                         <MenuItem
  //                                           value={
  //                                             "Product Research"
  //                                           }
  //                                         >
  //                                           Product Research
  //                                         </MenuItem>
  //                                         <MenuItem value={"Copywriting"}>Copywriting</MenuItem>
  //                                       </Select>
  //                                     </FormControl>
  //                                   </div>
  //                                   <div className="col p-r-5">
  //                                     <TextField
  //                                       fullWidth
  //                                       sx={{ m: 1 }}
  //                                       className="pb-3 font-Poppins"
  //                                       id="standard-textarea"
  //                                       label="Subject"
  //                                       placeholder=""
  //                                       value={subject}
  //                                       multiline
  //                                       onChange={(e) =>
  //                                         setSubject(e.target.value)
  //                                       }
  //                                       name="subject"
  //                                       required
  //                                       variant="standard"
  //                                     />
  //                                   </div>

  //                                   <div className="col p-r-5 mt-3">
  //                                     <TextField
  //                                       fullWidth
  //                                       sx={{ m: 1 }}
  //                                       className="pb-3"
  //                                       id="message"
  //                                       label="Message"
  //                                       placeholder=""
  //                                       value={message}
  //                                       onChange={(e) =>
  //                                         setMessage(e.target.value)
  //                                       }
  //                                       name="message"
  //                                       type="message"
  //                                       multiline
  //                                       variant="standard"
  //                                     />
  //                                   </div>
  //                                   <br />
  //                                   <button
  //                                     type="submit"
  //                                     className="btn btn-orange rounded-0 px-4 margin-0 margin-r-30 w-50"
  //                                     data-bs-toggle="modal"
  //                                     style={{
  //                                       marginRight: "30px",
  //                                       height: "40px",
  //                                     }}

  //                                     // href="#exampleModalToggle"
  //                                     // role="button"
  //                                   >
  //                                     Send
  //                                   </button>
  //                                 </div>
  //                               </div>
  //                             </div>
  //                           </div>
  //                           <Snackbar
  //                             open={open}
  //                             autoHideDuration={6000}
  //                             onClose={handleClose}
  //                           >
  //                             <Alert
  //                               onClose={handleClose}
  //                               severity="success"
  //                               sx={{ width: "100%" }}
  //                             >
  //                               Your form submitted successfully!
  //                             </Alert>
  //                           </Snackbar>
  //                           <Snackbar
  //                             error={error}
  //                             autoHideDuration={6000}
  //                             onClose={handleClose}
  //                           >
  //                             <Alert
  //                               onClose={handleClose}
  //                               severity="error"
  //                               sx={{ width: "100%" }}
  //                             >
  //                               Please submit again!
  //                             </Alert>
  //                           </Snackbar>
  //                         </form>
  //                       </div>
  //                     </div> */}
  //                     <img
  //                       alt="banner"
  //                       width={"100%"}
  //                       height={"auto"}
  //                       src={require("../assets/carousel/banner-1.png")}
  //                     />
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  return (
    <div>
      <div
        className="carousel-height"
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
                          margin:0
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
