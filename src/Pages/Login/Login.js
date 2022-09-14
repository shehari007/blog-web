import React from 'react'
import './Login.css';
import LOGO from '..//..//Assets/login.png'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import  secureLocalStorage  from  "react-secure-storage";
import CryptoJS from 'crypto-js';
import { Helmet } from 'react-helmet';
const Login = () => {

  let history = useNavigate();

  const [formData, setFormData] = useState({
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
    data.append('action', 'login');
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
        console.log(response.data)
        let tokenStatus='';
        let UserDetails = '';
        if (response.data==='00'){
          alert('username and password wrong, try again')
        } else {
          (response.data.map((data) => {return tokenStatus = data.role}));
          (response.data.map((data) => {return UserDetails = data.name}));
            var encryptedUSerDetails = CryptoJS.AES.encrypt(UserDetails, 'Secret Pharase').toString();
            secureLocalStorage.setItem('UserDetail', encryptedUSerDetails);
          if (tokenStatus === 'Admin') {
            var encryptedTokenAdmin = CryptoJS.AES.encrypt(tokenStatus, 'Secret Pharase').toString();
            secureLocalStorage.setItem('setAuthentication', encryptedTokenAdmin);
            var encryptedRoleAdmin = CryptoJS.AES.encrypt('Admin', 'Secret Pharase').toString();
            secureLocalStorage.setItem('setRole', encryptedRoleAdmin);
            history('/home');
            window.location.reload();
          }else if (tokenStatus === 'User') {
            var encryptedTokenUser = CryptoJS.AES.encrypt(tokenStatus, 'Secret Pharase').toString();
            secureLocalStorage.setItem('setAuthentication', encryptedTokenUser);
            var encryptedRoleUser = CryptoJS.AES.encrypt('User', 'Secret Pharase').toString();
            secureLocalStorage.setItem('setRole', encryptedRoleUser);
            history('/home');
            window.location.reload();
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <main className="form-signin w-100 m-auto">
      <Helmet><title>Login - MyBlog.com</title></Helmet>
      <form>
        <img className="mb-4" src={LOGO} alt="" width="175" height="150" align="center" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" name="email" placeholder="name@example.com" onChange={onChangeInput} />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" name="password" placeholder="Password" onChange={onChangeInput} />
          <label htmlFor="floatingPassword">Password</label>
        </div>


        <button className="w-100 btn btn-lg btn-primary" type="button" onClick={SubmitForm}>Sign in</button>
        <a href='/signup'>Don't Have an account? Create a new account here..</a>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
      </form>
    </main>

  )
}

export default Login
