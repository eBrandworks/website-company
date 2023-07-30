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
import { useNavigate } from "react-router-dom";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

import validator from "validator";

const FormModal = () => {
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
            // if (response.status === 200) {
            //   return setOpen(true)
            // }
            navigate("/thankyou");
            // console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            if (error) {
              navigate("/*");
            }
            // console.log("FAILED...", error);
          }
        );
    } else {
      setEmailError("Enter valid Email!");
    }
  };
  return (
    <div id="modal-form">
      <div
        className="card border-0 text-start m-c-form car-box-shadow w-100 text-center"
        data-aos="zoom-in"
      >
        <div className="card-body pricing-card-style ">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          ></Box>
          <form onSubmit={sendEmail}>
            <div className="mx-2">
              <div className="row row-cols-1">
                <div className="card border-0 bg-none">
                  <div className="card-body ">
                    <div className="col p-r-5">
                      <TextField
                        fullWidth
                        sx={{ m: 1 }}
                        className="pb-3"
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

                    <div className="col p-r-5 pb-3">
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
                          <MenuItem value={"Customized Account Management"}>
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
                          <MenuItem value={"Copywriting"}>Copywriting</MenuItem>
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
                      style={{
                        marginRight: "30px",
                        height: "40px",
                      }}

                      // href="#exampleModalToggle"
                      // role="button"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
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
  );
};

export default FormModal;
