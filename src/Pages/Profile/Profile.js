import React, { useState, useEffect } from 'react'
import Upload from '..//..//Components/PicUpload/Upload'
import axios from 'axios';
import secureLocalStorage from "react-secure-storage";
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router';

const Profile = () => {
  
  let history = useNavigate();
  const role = secureLocalStorage.getItem('setRole')
  const Username = secureLocalStorage.getItem('UserDetail')

  if (role) {
    var decryptedToken = CryptoJS.AES.decrypt(role, 'Secret Pharase');
    var UserRole = decryptedToken.toString(CryptoJS.enc.Utf8);
    var decryptedUserDetails = CryptoJS.AES.decrypt(Username, 'Secret Pharase');
    var username = decryptedUserDetails.toString(CryptoJS.enc.Utf8);
  }
  console.log(UserRole)

  const [dosyaname, setdosyaname] = useState([]);
  const [postCount, setMyPostCount] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {

    const getData = async () => {
      const res = await axios(`http://localhost/userdata.php`);
      console.log(res.data);
      setUserData(res.data);
    };
    getData();
  }, []);

  useEffect(() => {

    const getData = async () => {
      const res = await axios(`http://localhost/mypostscount.php?username=${username}`);
      console.log(res.data);
      setMyPostCount(res.data);
    };
    getData();
  }, []);




  const CurrentPass = () => {

    var currentpass = document.getElementById('floatingPassword').value;
    const FormData = require('form-data');
    let data = new FormData();
    data.append('action', 'pass');
    data.append('currpass', currentpass);
    data.append('name', username);

    let config = {

      method: 'post',
      url: 'http://localhost/currentpassword.php',
      headers: data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' }
      ,
      withCredentials: false,
      data: data

    };

    axios(config).then(function (response) {
      console.log(JSON.stringify(response.data));
      if (response.data !== 'true[]') {
        alert('Current Password is wrong try again');
        window.location.reload();
      } else if (response.data === 'true[]') {

        var newpassword = document.getElementById('floatingPassword1').value;
        const FormData = require('form-data');
        let data = new FormData();
        data.append('action', 'pass');
        data.append('pass', newpassword);
        data.append('name', username);

        let config = {

          method: 'post',
          url: 'http://localhost/newpassword.php',
          headers: data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' }
          ,
          withCredentials: false,
          data: data

        };

        axios(config).then(function (response) {
          console.log(JSON.stringify(response.data));
          if (response.data === true) {
            alert('Password Updated successfully')
            window.location.reload();
          } else if (response.data !== true) {
            alert('Something went wrong')
          }
        })
          .catch(function (error) {
            console.log(error);
          }).then(() => {

          })

      }
    })
      .catch(function (error) {
        console.log(error);
      }).then(() => {

      })
  }

  const CurrentEmail = () => {

    var currentemail = document.getElementById('floatingEmail').value;
    const FormData = require('form-data');
    let data = new FormData();
    data.append('action', 'pass');
    data.append('email', currentemail);
    data.append('name', username);

    let config = {

      method: 'post',
      url: 'http://localhost/currentemailaddress.php',
      headers: data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' }
      ,
      withCredentials: false,
      data: data

    };

    axios(config).then(function (response) {
      console.log(JSON.stringify(response.data));
      if (response.data !== 'true[]') {
        alert('Current Email is wrong try again');
        window.location.reload();
      } else if (response.data === 'true[]') {

        var newemail = document.getElementById('floatingEmail1').value;
        const FormData = require('form-data');
        let data = new FormData();
        data.append('action', 'pass');
        data.append('email', newemail);
        data.append('name', username);

        let config = {

          method: 'post',
          url: 'http://localhost/newemailaddress.php',
          headers: data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' }
          ,
          withCredentials: false,
          data: data

        };

        axios(config).then(function (response) {
          console.log(JSON.stringify(response.data));
          if (response.data === true) {
            alert('Email Updated successfully')
            window.location.reload();
          } else if (response.data !== true) {
            alert('Something went wrong')
          }
        })
          .catch(function (error) {
            console.log(error);
          }).then(() => {

          })

      }
    })
      .catch(function (error) {
        console.log(error);
      }).then(() => {

      })
  }

  const onDeleteUserData = (name,role) => {
    console.log(name);
    console.log(role);
    const FormData = require('form-data');
    let data = new FormData();
    data.append('action', 'delete');
    data.append('name', name);
    data.append('user', role);

    let config = {

        method: 'post',
        url: 'http://localhost/DELETEACCOUNT.php',
        withCredentials: false,
      data: data
    };

    axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
        
    })
        .catch(function (error) {
            console.log(error);
        }).then(() => {
            // alert('Category Deleted Successfully')
            // window.location.reload();
        })
}


const promoteAdmin = (id,name) => {
  
  const FormData = require('form-data');
  let data = new FormData();
  data.append('action', 'promote');
  data.append('id', id );
  data.append('role', 'Admin' );
  data.append('name', name);

  let config = {

      method: 'post',
      url: 'http://localhost/promoteadmin.php',
      withCredentials: false,
      data: data
  };

  axios(config).then(function (response) {
      console.log(JSON.stringify(response.data));
      alert(name + 'Promoted successfully')
      window.location.reload();
      
  })
      .catch(function (error) {
          console.log(error);
      }).then(() => {
          
      })
}

  const DELETEACCOUNT = () => {

    const FormData = require('form-data');
    let data = new FormData();
    data.append('action', 'confirm');
    data.append('email', document.getElementById('deleteemail').value);
    data.append('pass', document.getElementById('floatingpass2').value);
    data.append('user', UserRole);
    data.append('name', username);

    let config = {

      method: 'post',
      baseURL: 'http://localhost/DELETEACCOUNT.php',
      withCredentials: false,
      data: data
    };

    axios(config).then(function (response) {
      console.log(JSON.stringify(response.data));
      if (response.data !== 'true[]') {
        alert('Email or Password is incorrect, try again');
      } else if (response.data === 'true[]') {
        alert('Account deleted successfully')
        secureLocalStorage.clear();
        history('/signup');
      }
    }).catch(function (error) {
      console.log(error);
    }).then(() => {
    })
  }

  useEffect(() => {
    console.log(`http://localhost/img.php`)
    const getDetails = async () => {
      const res = await axios(`http://localhost/img.php?name=${username}`);
      console.log(res.data);
      setdosyaname(res.data);
    };
    getDetails();
  }, []);


  var pic = ''
  {dosyaname !== '0 results[]' ? dosyaname.map((data) => {
    pic = "/" + data.filename

  }) : pic = "/default.jpg"}
  return (

    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Profile Settings</h1>
      </div>
      <div className="d-flex justify-content-left flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        
        <label>
          <img src={pic} className="img-thumbnail" alt="..." style={{ width: '150px', height: '150px', borderRadius: '75%' }}></img>
          <Upload />
        </label>

        <ul>
          <li>Username: {username}</li>
          <li>My Total Posts: {postCount}</li>
          <li>Total Likes: 0</li>
          <li>Access Mode: {UserRole}</li>
        </ul>

      </div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Security Settings</h1>
      </div>
      <div className="d-flex justify-content-left flex-wrap flex-md-nowrap align-items-center pt-3 pb-5 mb-6 border-bottom">
        <div style={{ maxWidth: '30%' }}>
          <h4>Change Password</h4>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" name="password" placeholder="Password" />
            <label htmlFor="floatingPassword">Enter Current Password</label>
          </div>
          <br />
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword1" name="password" placeholder="Password" />
            <label htmlFor="floatingPassword">Enter New Password</label>
          </div>
          <br />
          <button type="submit" className='btn btn-primary' onClick={CurrentPass}>Change Password</button>
        </div>
        <div style={{ maxWidth: '50%', marginLeft: '10%' }}>
          <h4>Change Email Address</h4>
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingEmail" name="email" placeholder="email" />
            <label htmlFor="floatingPassword">Enter Current Email</label>
          </div>
          <br />
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingEmail1" name="email" placeholder="email" />
            <label htmlFor="floatingPassword">Enter New Email</label>
          </div>
          <br />
          <button type="submit" className='btn btn-primary' onClick={CurrentEmail}>Change Email</button>
        </div>
        {UserRole !== 'Admin' ? <>
          <div style={{ maxWidth: '50%', marginLeft: '10%' }}>
            <h4>Delete Account</h4>
            <div className="form-floating">
              <input type="email" className="form-control" id="deleteemail" name="email" placeholder="email" />
              <label htmlFor="deletemail">Enter Current Email</label>
            </div>
            <br />
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingpass2" name="pass" placeholder="email" />
              <label htmlFor="floatingPass1">Enter Current Password</label>
            </div>
            <br />
            <button type="submit" className='btn btn-danger' onClick={DELETEACCOUNT}>Delete Account</button>

          </div>
          <div style={{ maxWidth: '50%', marginLeft: '10%' }}>
            <p style={{ fontStyle: 'italic' }}>*warning! if you delete your profile,<br/> all posts, categories, access will be deleted<br />and it cannot be undone
              <br/>Please make sure before deleting!*<br /></p>
          </div></> : null}
      </div>
      <div>{UserRole === 'Admin' ? <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4>User DATA</h4>
      </div>
          <div className="table-responsive">
            <table className="table table-striped table-bordered table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col" style={{ width: '20%' }}>Username</th>
                  <th scope="col" style={{ width: '15%' }}>Email</th>
                  <th scope="col">Access</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((data, index) =>{
                  return <>
                  <tr>
                  <td index={index}>{index+1}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.role}</td>
                  <td><button className='btn btn-danger'onClick={() => onDeleteUserData(data.name, data.role)}>Delete</button>
                  <button className='btn btn-success'onClick={() => promoteAdmin(data.id,data.name)}>Promote to Admin</button></td>
                  </tr>
                  </>
                })}
              </tbody>
            </table>
          </div>
        </> : null}</div>
    </main>
  )
}

export default Profile
