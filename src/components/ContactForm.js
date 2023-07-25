import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import emailjs from "emailjs-com";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

import validator from "validator";

function ContactForm() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ourServices, setOurServices] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [emailError, setEmailError] = useState("");

  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleChange = (e) => {
    setOurServices(e.target.value);
  };

  const validateEmail = (e) => {
    var email = e.target.value;
    // console.log(validator.isEmail(email));
    setEmail(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (validator.isEmail(email)) {
      setEmailError("");
      setName("");
      setEmail("");
      setOurServices("");
      setSubject("");
      setMessage("");

      emailjs
        .sendForm(
          "service_mudht07",
          "template_d8bes9c",
          e.target,
          "ltdhK8ov0SIdYft8H"
        )
        .then(
          function (response) {
            if (response.status === 200) {
              return setOpen(true)
            }
            navigate("/thankyou");
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            if (error) {
              //   return setError(true)
              navigate("/*");
            }
            console.log("FAILED...", error);
          }
        );
    } else {
      setEmailError("Enter valid Email!");
    }
  };
  return (
    <div id="contact">
      <div
        className="container overflow-hidden"
        //   style={{ paddingTop: state === "pricing" ? "2rem" : "0px" }}
      >
        <div className="row row-cols-1 row-cols-md-2 align-items-center">
          <div className="col" data-aos-once="true" data-aos="zoom-in">
            <div
              className="card border-0 text-start bg-none"
              data-aos="zoom-in"
              data-aos-once="true"
            >
              <div className="card-body pricing-card-style bg-none ">
                <div className="row pt-5">
                  <h2 className="mob-font-size">
                    <strong>CONTACT US</strong>
                    <p className="mt-2" style={{ color: "black" }}>
                      Let us scale your Amazon Brand
                    </p>
                  </h2>
                </div>

                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                ></Box>
                <form onSubmit={sendEmail} id="get-a-quote-form-footer">
                  <div className="row pt-2">
                    <div className="row row-cols-1">
                      <div className="card border-0 bg-none">
                        <div className="card-body ">
                          <div className="col p-r-5">
                            <TextField
                              fullWidth
                              sx={{ m: 1 }}
                              className="pb-3 font-Poppins"
                              id="standard-textarea"
                              label="Name"
                              placeholder=""
                              value={name}
                              multiline
                              onChange={(e) => setName(e.target.value)}
                              name="name"
                              required
                              variant="standard"
                            />
                          </div>

                          <div className="col p-r-5">
                            <TextField
                              fullWidth
                              sx={{ m: 1 }}
                              className="pb-3"
                              id="email"
                              label="Email"
                              placeholder=""
                              value={email}
                              onChange={(e) => validateEmail(e)}
                              name="email"
                              type="email"
                              required
                              multiline
                              variant="standard"
                            />
                            <span
                              style={{
                                // fontWeight: "bold",
                                color: "red",
                              }}
                            >
                              {emailError}
                            </span>
                          </div>
                          <div className="col p-r-5 mt-3 pb-3">
                            <FormControl
                              variant="standard"
                              fullWidth
                              // name="ourServices"
                              sx={{ m: 1 }}
                              // sx={{ m: 1, minWidth: 120 }}
                            >
                              <InputLabel id="demo-simple-select-standard-label">
                                Our Services
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={ourServices}
                                name="services"
                                onChange={handleChange}
                                label="Our Services"
                              >
                                <MenuItem
                                  value={"Customized Account Management"}
                                >
                                  Customized Account Management
                                </MenuItem>
                                <MenuItem value={"Listing Optimization"}>
                                  Listing Optimization
                                </MenuItem>
                                <MenuItem value={"Amazon Advertisement (PPC)"}>
                                  Amazon Advertisement (PPC)
                                </MenuItem>
                                <MenuItem value={"Sourcing"}>Sourcing</MenuItem>
                                <MenuItem value={"Product Research"}>
                                  Product Research
                                </MenuItem>
                                <MenuItem value={"Copywriting"}>
                                  Copywriting
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </div>
                          <div className="col p-r-5">
                            <TextField
                              fullWidth
                              sx={{ m: 1 }}
                              className="pb-3 font-Poppins"
                              id="standard-textarea"
                              label="Subject"
                              placeholder=""
                              value={subject}
                              multiline
                              onChange={(e) => setSubject(e.target.value)}
                              name="subject"
                              required
                              variant="standard"
                            />
                          </div>

                          <div className="col p-r-5 mt-3">
                            <TextField
                              fullWidth
                              sx={{ m: 1 }}
                              className="pb-3"
                              id="message"
                              label="Message"
                              placeholder=""
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              name="message"
                              type="message"
                              multiline
                              variant="standard"
                            />
                          </div>
                          <br />
                          <button
                            type="submit"
                            className="btn btn-orange rounded-0 px-4 margin-0 margin-r-30 w-50"
                            data-bs-toggle="modal"
                            style={{ marginRight: "30px", height: "40px" }}

                            // href="#exampleModalToggle"
                            // role="button"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="success"
                      sx={{ width: "100%" }}
                    >
                      Your form submitted successfully!
                    </Alert>
                  </Snackbar>
                  <Snackbar
                    error={error}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="error"
                      sx={{ width: "100%" }}
                    >
                      Please submit again!
                    </Alert>
                  </Snackbar>
                </form>
              </div>
            </div>
          </div>
          <div className="col text-start">
            <div className="card bg-none border-0 ">
              <div className="card-body p-0">
                <div className="text-center">
                  <img
                    className="mob-dis-none"
                    data-aos="zoom-in"
                    data-aos-once="true"
                    src={require("../assets/contact_us/map-vector-1.webp")}
                    alt="map-vector-1"
                  />
                  <h4 className="mb-2" style={{ color: "black" }}>
                    Follow Us :
                  </h4>
                  <ul className="list-unstyled m-0 text-center d-flex justify-content-center">
                    <a
                      className="link-light"
                      href="https://m.facebook.com/ebrandworkz/?refsrc=deprecated&_rdr"
                    >
                      <li className="ms-3" data-aos-once="true" data-aos="zoom-in">
                        <FacebookIcon
                          className="social-icon-facebook"
                          style={{ fontSize: "40" }}
                        />
                      </li>
                    </a>

                    <a className="link-light" href="#">
                      <li className="ms-3" data-aos-once="true" data-aos="zoom-in">
                        <InstagramIcon
                          className="social-icon-instagram"
                          style={{ fontSize: "40" }}
                        />
                      </li>
                    </a>

                    <a
                      className="link-light"
                      href="https://www.linkedin.com/company/ebrandworks/?originalSubdomain=pk"
                    >
                      <li className="ms-3" data-aos-once="true" data-aos="zoom-in">
                        <LinkedInIcon
                          className="social-icon-linkedin"
                          style={{ fontSize: "40" }}
                        />
                      </li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
