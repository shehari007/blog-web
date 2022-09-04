import React from 'react'
import './Signup.css';
import LOGO from '..//..//Assets/bootstrap-logo.svg'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Signup = () => {

  let history = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const onChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const SubmitForm = async (e) => {
    e.preventDefault();

    const axios = require('axios');
    const FormData = require('form-data');
    let data = new FormData();
    data.append('action', 'register');
    data.append('username', formData.username);
    data.append('email', formData.email);
    data.append('password', formData.password);

    let config = {
      method: 'post',
      url: 'http://localhost/blog.php',
      headers: data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' }
      ,
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        if (response.data === true) {
          alert('Account Created Successfully with username: ' + formData.username + '');
          history('/login')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <main className="form-signin w-100 m-auto">
      <form>
        <img className="mb-4" src={LOGO} alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
        <div className="form-floating">
          <input type="text" className="form-control" id="floatingName" name="username" onChange={onChangeInput} placeholder="Name Surname" />
          <label htmlFor="floatingName">Username</label>
        </div>
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" name="email" onChange={onChangeInput} placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" name="password" onChange={onChangeInput} placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="button" onClick={SubmitForm}>Sign in</button>
        <a href='/login'>Already have an account? Login here..</a>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
      </form>
    </main>

  )
}

export default Signup
