import React, { useContext } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import Popup from "../../components/Popup";
import { useFormik } from 'formik';
import { signinSchema } from './Schemas'

const initialValues = {
  Username: '',
  Password: '',
};

const Login = () => {
  const [redirect, setRedirect] = useState('o')
  const { setUserInfo } = useContext(UserContext);
  const [loading, setLoading] = useState(false)


  async function login(e) {
    // e.preventDefault();
    setLoading(true);
    const res = await fetch("http://localhost:3001/login", {
      method: 'post',
      body: JSON.stringify({ Username, Password }),
      headers: { "Content-Type": "application/json" },
      credentials: 'include',
    });

    const popup = () => {

      const btn = document.getElementById("popup");
      const X = window.scrollX;
      const Y = window.scrollY;
      window.scrollTo(0, 0);
      btn.className = "d-block"
      setTimeout(() => {
        btn.className = "d-none"
        window.scrollTo(X, Y)
      }, 2000);
    }
    if (res.status === 200) {
      res.json().then(userinfo => {
        setUserInfo(userinfo);
        setRedirect('ok');
      })
    } else {
      setRedirect('k')
      setLoading(false);
      popup();
    }
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signinSchema,
    onSubmit: (values, action) => {
      console.log(values);
      login();
      action.resetForm();
    },
  })
  const { Username, Password } = values

  function submit(e) {
    e.preventDefault();
    handleSubmit();
  }


  function togglePassword() {
    let passwordInput = document.getElementById('txtPassword'),
      icon = document.getElementById('eyeIcon');
    console.log(passwordInput)
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      icon.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = 'password';
      icon.classList.remove("fa-eye-slash");
    }
  }

  if (redirect === 'ok') {
    return <Navigate to={'/blogs'} />
  }
  return (
    <div>
      {!loading && <form id="f" className="login" onSubmit={submit}>
        <h1 className="text-center fw-bold mb-5">Login</h1>
        <input
          type="text"
          name="Username"
          placeholder="Username"
          value={values.Username}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.Username && touched.Username ? <p className='errors'>{errors.Username}</p> : null}
        <div className='input-group'>
          <input
            id="txtPassword"
            type="password"
            name="Password"
            placeholder="Password"
            value={values.Password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button onClick={togglePassword} type="button" id="btnToggle" className="toggle"><i id="eyeIcon" className="fa fa-eye"></i></button>
        </div>
        {errors.Password && touched.Password ? <p className='errors'>{errors.Password}</p> : null}
        <button type="submit" className="btn btn-orange rounded-0 px-4 margin-0 margin-r-30 ">Login</button>
      </form>}
      {loading && <CircularProgress color="warning" style={{
        margin: '70px 0'
      }} />}
      <Popup message='Wrong Credentials' id='popup' className='d-none' />
    </div>
  );
};

export default Login;
