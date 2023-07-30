import CircularProgress from '@mui/material/CircularProgress';
import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Popup from "../../components/Popup";
import { useFormik } from 'formik';
import { registrationSchema } from './Schemas'
import { BASE_URL } from './helper';
import axios from 'axios'

const initialValues = {
  username: '',
  password: '',
};

const Register = () => {
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);
  async function register() {
    console.log('register');
    setLoading(true);
    try {
      const res = await axios(`${BASE_URL}/register`, {
        method: 'post',
        data: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
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
        setRedirect(true);
      } else {
        setLoading(false);
        console.log('done');
        popup();
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: registrationSchema,
    onSubmit: (values, action) => {
      console.log(values);
      register();
      action.resetForm();
    },
  })
  const { username, password } = values

  function submit(e) {
    e.preventDefault();
    handleSubmit();
  }

  let passwordInput = document.getElementById('txtPassword'),
    icon = document.getElementById('eyeIcon');

  function togglePassword() {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      icon.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = 'password';
      icon.classList.remove("fa-eye-slash");
    }
  }

  if (redirect) {
    return <Navigate to={'/blog/login#form1'} />
  }
  return (
    <div>

      {!loading && <form className="register" id="f" onSubmit={submit}>
        <h1 className="text-center fw-bold mb-5">Register</h1>
        <input
          type="text"
          autoComplete='off'
          placeholder="Username"
          name='username'
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.username && touched.username ? <p className='errors'>{errors.username}</p> : null}
        <div className='input-group'>
          <input
            id="txtPassword"
            type="password"
            autoComplete='off'
            name='password'
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button onClick={togglePassword} type="button" id="btnToggle" className="toggle"><i id="eyeIcon" className="fa fa-eye"></i></button>
        </div>
        {errors.password && touched.password ? <p className='errors'>{errors.password}</p> : null}
        <button type='submit' className="btn btn-orange rounded-0 px-4 margin-0 margin-r-30">Register</button>
      </form>}
      {loading && <CircularProgress color="warning" style={{
        margin: '70px 0'
      }} />}
      <Popup message='Registration failed' id='popup' class='d-none' />
    </div>
  );
};

export default Register;
