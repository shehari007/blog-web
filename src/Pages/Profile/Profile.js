import React, { useState, useEffect } from 'react'
import Upload from '..//..//Components/PicUpload/Upload'
import axios from 'axios';
import secureLocalStorage from "react-secure-storage";
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import { Helmet } from 'react-helmet';


function MyVerticallyCenteredModal(props) {

  const [selected, setSelected] = useState('');

  const handleChange = event => {
    setSelected(event.target.value);
  };

  const AddUser = () => {

    const FormData = require('form-data');
    let data = new FormData();
    data.append('action', 'newUser');
    data.append('name', document.getElementById('username').value);
    data.append('email', document.getElementById('email').value);
    data.append('password', document.getElementById('password').value);
    data.append('role', selected);

    let config = {

      method: 'post',
      url: `${process.env.REACT_APP_AXIOS_API_PHP}`,
      headers: data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' }
      ,
      data: data
    }

    axios(config).then(function (response) {
      //console.log(JSON.stringify(response.data));
    })
      .catch(function (error) {
        console.log(error);
      }).then(() => {
        alert('User Added Successfully');
        window.location.reload();
      })
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enter User Details
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={AddUser}>
      <Modal.Body>
        
        <label>Enter Username</label>
        <input type="text" className="form-control" id="username" name="username" placeholder="Username" required/>
        <label>Enter Email Address</label>
        <input type="email" className="form-control" id="email" name="email" placeholder="Email Address" required/>
        <label>Enter Password</label>
        <input type="password" className="form-control" id="password" name="password" placeholder="Password" required/>
        <label>Select Access Level</label>
        <select class="form-select form-select-md mb-3" aria-label=".form-select-lg example" value={selected} onChange={handleChange} required>
          <option value="">Select Level</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
      </Modal.Body>
      <Modal.Footer>
        <Button type = "submit">Add</Button>
        <Button onClick={props.onHide}>Cancel</Button>
        
      </Modal.Footer>
      </form>
    </Modal>
  );
}
const Profile = () => {

  const [modalShow, setModalShow] = React.useState(false);
  let history = useNavigate();
  const role = secureLocalStorage.getItem('setRole')
  const Username = secureLocalStorage.getItem('UserDetail')

  if (role) {
    var decryptedToken = CryptoJS.AES.decrypt(role, 'Secret Pharase');
    var UserRole = decryptedToken.toString(CryptoJS.enc.Utf8);
    var decryptedUserDetails = CryptoJS.AES.decrypt(Username, 'Secret Pharase');
    var username = decryptedUserDetails.toString(CryptoJS.enc.Utf8);
  }
  //console.log(UserRole)

  const [dosyaname, setdosyaname] = useState([]);
  const [postCount, setMyPostCount] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {

    const getData = async () => {
      const res = await axios(`${process.env.REACT_APP_AXIOS_API_PHP}?action=userDetails`);
      //console.log(res.data);
      setUserData(res.data);
    };
    getData();
  }, []);

  useEffect(() => {

    const getData = async () => {
      const res = await axios(`${process.env.REACT_APP_AXIOS_API_PHP}?action=myBlogPostsCount&username=${username}`);
      //console.log(res.data);
      setMyPostCount(res.data);
    };
    getData();
  }, []);




  const CurrentPass = () => {

    var currentpass = document.getElementById('floatingPassword').value;
    const FormData = require('form-data');
    let data = new FormData();
    data.append('action', 'currentPassword');
    data.append('currpass', currentpass);
    data.append('name', username);

    let config = {

      method: 'post',
      url: `${process.env.REACT_APP_AXIOS_API_PHP}`,
      headers: data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' }
      ,
      withCredentials: false,
      data: data

    };

    axios(config).then(function (response) {
     //console.log(JSON.stringify(response.data));
      if (response.data !== 'true[]') {
        alert('Current Password is wrong try again');
        window.location.reload();
      } else if (response.data === 'true[]') {

        var newpassword = document.getElementById('floatingPassword1').value;
        const FormData = require('form-data');
        let data = new FormData();
        data.append('action', 'newPassword');
        data.append('pass', newpassword);
        data.append('name', username);

        let config = {

          method: 'post',
          url: `${process.env.REACT_APP_AXIOS_API_PHP}`,
          headers: data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' }
          ,
          withCredentials: false,
          data: data

        };

        axios(config).then(function (response) {
          //console.log(JSON.stringify(response.data));
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
    data.append('action', 'currentEmailAddress');
    data.append('email', currentemail);
    data.append('name', username);

    let config = {

      method: 'post',
      url: `${process.env.REACT_APP_AXIOS_API_PHP}`,
      headers: data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' }
      ,
      withCredentials: false,
      data: data

    };

    axios(config).then(function (response) {
      //console.log(JSON.stringify(response.data));
      if (response.data !== 'true[]') {
        alert('Current Email is wrong try again');
        window.location.reload();
      } else if (response.data === 'true[]') {

        var newemail = document.getElementById('floatingEmail1').value;
        const FormData = require('form-data');
        let data = new FormData();
        data.append('action', 'newEmailAddress');
        data.append('email', newemail);
        data.append('name', username);

        let config = {

          method: 'post',
          url: `${process.env.REACT_APP_AXIOS_API_PHP}`,
          headers: data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' }
          ,
          withCredentials: false,
          data: data

        };

        axios(config).then(function (response) {
          //console.log(JSON.stringify(response.data));
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

  const onDeleteUserData = (name, role) => {
    //console.log(name);
    //console.log(role);
    const FormData = require('form-data');
    let data = new FormData();
    data.append('action', 'deletebyAdmin');
    data.append('name', name);
    data.append('user', role);

    let config = {

      method: 'post',
      url: `${process.env.REACT_APP_AXIOS_API_PHP}`,
      withCredentials: false,
      data: data
    };

    axios(config).then(function (response) {
      //console.log(JSON.stringify(response.data));

    })
      .catch(function (error) {
        console.log(error);
      }).then(() => {
        alert('User Deleted Successfully')
        window.location.reload();
      })
  }


  const promoteAdmin = (id, name) => {

    const FormData = require('form-data');
    let data = new FormData();
    data.append('action', 'promote');
    data.append('id', id);
    data.append('role', 'Admin');
    data.append('name', name);

    let config = {

      method: 'post',
      url: `${process.env.REACT_APP_AXIOS_API_PHP}`,
      withCredentials: false,
      data: data
    };

    axios(config).then(function (response) {
      //console.log(JSON.stringify(response.data));
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
    data.append('action', 'confirmation');
    data.append('email', document.getElementById('deleteemail').value);
    data.append('pass', document.getElementById('floatingpass2').value);
    data.append('user', UserRole);
    data.append('name', username);

    let config = {

      method: 'post',
      baseURL: `${process.env.REACT_APP_AXIOS_API_PHP}`,
      withCredentials: false,
      data: data
    };

    axios(config).then(function (response) {
      //console.log(JSON.stringify(response.data));
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
    //console.log(`http://localhost/img.php`)
    const getDetails = async () => {
      const res = await axios(`${process.env.REACT_APP_AXIOS_API_PHP}?action=imageData&name=${username}`);
      //console.log(res.data);
      setdosyaname(res.data);
    };
    getDetails();
  }, []);


  var pic = ''
  {
    dosyaname !== '0 results[]' ? dosyaname.map((data) => {
      pic = "/" + data.filename

    }) : pic = "/default.jpg"
  }
  return (

    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <Helmet>
        <title>Profile Settings</title>
      </Helmet>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Profile Settings</h1>
      </div>
      <div className="d-flex justify-content-left flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">

        <label>
          <img src={pic} className="img-thumbnail" alt="..." style={{ width: '150px', height: '150px', borderRadius: '75%' }}></img>
          <Upload />
        </label>
        <ListGroup variant="flush" style={{ marginLeft: '2.5%' }}>
          <ListGroup.Item>Username: {username}</ListGroup.Item>
          <ListGroup.Item>My Total Posts: {postCount}</ListGroup.Item>
          <ListGroup.Item>Total Likes: 0</ListGroup.Item>
          <ListGroup.Item>Access Mode: {UserRole}</ListGroup.Item>
        </ListGroup>

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
            <p style={{ fontStyle: 'italic' }}>*warning! if you delete your profile,<br /> all posts, categories, access will be deleted<br />and it cannot be undone
              <br />Please make sure before deleting!*<br /></p>
          </div></> : null}
      </div>
      <div>{UserRole === 'Admin' ? <>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h4>User DATA</h4>
          <Button variant="warning" onClick={() => setModalShow(true)}>
            Add New User
          </Button>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
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
              {userData.map((data, index) => {
                return <>
                  <tr>
                    <td index={index}>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.role}</td>
                    <td>
                      {data.role !== 'Admin' ? <><button className='btn btn-danger' onClick={() => onDeleteUserData(data.name, data.role)}>Delete</button>
                        <button className='btn btn-success' onClick={() => promoteAdmin(data.id, data.name)}>Promote to Admin</button></> : null}
                    </td>
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
