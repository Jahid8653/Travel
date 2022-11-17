import React from 'react'
import './Login.css'
import { useFormik } from 'formik'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

const loginValidate = (formValue) => {
  let errorMsg = {};
  let validEmail = /^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$/
  let validPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&]).{8,15}$/

  if (!formValue.mail) {
    errorMsg.mail = 'Required Field'
  }
  else if (!validEmail.test(formValue.mail)) {
    errorMsg.mail = "Wrong Pattern"
  }
  //   else if(formValue.mail.length<10)
  //   {
  // errorMsg.mail='Must be more than 10 characters'
  //   }

  if (!formValue.pwd) {
    errorMsg.pwd = 'Required Field'
  }
  else if (!validPassword.test(formValue.pwd)) {
    errorMsg.pwd = "Wrong Pattern"
  }
  console.log("Error: ", errorMsg);
  return errorMsg;
}

export default function Login() {
  const navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      mail: "", pwd: ""
    },
    validate: loginValidate,
    onSubmit: (formValue) => {
      console.log("Submitted Value: ", formValue);
      let user = {
        email: formValue.mail,
        password: formValue.pwd,
      }
      Axios.post('https://prod-crud.herokuapp.com/login', user)
        .then((res) => {
          window.sessionStorage.setItem("TokenValue", res.data.token);
          alert("Login successfully")
          navigate("/booking-page");
          console.log("Axios res: ", res);
        })
        .catch((err) => {
          console.log("Axios err:", err);
        })
        }
      })
  
  return (

    <div className='login'>
      <form className='log' onSubmit={formik.handleSubmit}>
        <h1 className='cen'><b>Login</b></h1>  <br />
        <div className="bro">
          <label className='col'><b>Username:</b></label>
          <input
            type="email"
            name='mail'
            className="form-control"
            placeholder="Email"
            value={formik.values.mail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.mail && formik.errors.mail ? <span className='me'>{formik.errors.mail}</span> : null}
        </div>
        <div className="bro">
          <label className='col'><b>Password:</b></label>
          <input
            type="password"
            name='pwd'
            className="form-control"
            placeholder="Password"
            value={formik.values.pwd}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.pwd && formik.errors.pwd ? <span className='me'>{formik.errors.pwd}</span> : null}
        </div>
        <div className='logi'>
          <button type="submit" className="stl">
            <b> LOGIN </b>
          </button>
        </div>
        <p className="su">
          <a className='col' href="/registration"> <b>Sign Up!</b></a>
        </p>
      </form>
    </div>

  )
}
