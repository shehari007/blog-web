import React, { useState, useEffect } from 'react'
import axios from 'axios'
import secureLocalStorage from "react-secure-storage";
import CryptoJS from 'crypto-js';
import { Helmet } from 'react-helmet';



const MyDeletedPosts = () => {

  const role = secureLocalStorage.getItem('setRole')
  const Username = secureLocalStorage.getItem('UserDetail')

  if (role) {
    var decryptedToken = CryptoJS.AES.decrypt(role, 'Secret Pharase');
    var UserRole = decryptedToken.toString(CryptoJS.enc.Utf8);
    var decryptedUserDetails = CryptoJS.AES.decrypt(Username, 'Secret Pharase');
    var username = decryptedUserDetails.toString(CryptoJS.enc.Utf8);
  }
  var Link = ''
  const [infoStatus, setInfoStatus] = useState([]);
  console.log(infoStatus);


  useEffect(() => {

    const getDetails = async () => {
      const res = await axios(`http://localhost/pendingapprovalsPosts.php?status=${'Deleted'}&name=${username}`);
      console.log(res.data);
      setInfoStatus(res.data);
    };

    getDetails();
  }, []);

  const onRecoverAdmin = (id) => {
    const FormData = require('form-data');
    let data = new FormData();
    data.append('action', 'recoverAdmin');
    data.append('id', id);
    data.append('status', 'Approved');
    let config = {

      method: 'post',
      url: 'http://localhost/deletedRecover.php',
      headers: data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' }
      ,
      data: data
    };

    axios(config).then(function (response) {
      console.log(JSON.stringify(response.data));
    })
      .catch(function (error) {
        console.log(error);
      }).then(() => {
        alert('Successfully Recoverd')
        window.location.reload();
      })
  }
  const onRecoverUser = (id) => {
    const FormData = require('form-data');
    let data = new FormData();
    data.append('action', 'recoverUser');
    data.append('id', id);
    data.append('status', 'Pending Approval');
    let config = {

      method: 'post',
      url: 'http://localhost/deletedRecover.php',
      headers: data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' }
      ,
      data: data
    };

    axios(config).then(function (response) {
      console.log(JSON.stringify(response.data));
    })
      .catch(function (error) {
        console.log(error);
      }).then(() => {
        
        alert('Successfully Recoverd waiting for Approval')
        window.location.reload();
      })
  }

  const onDelete = (id) => {
    const FormData = require('form-data');
    let data = new FormData();
    data.append('action', 'delete');
    data.append('id', id);
    let config = {

      method: 'post',
      url: 'http://localhost/approvalsdelete.php',
      headers: data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' }
      ,
      data: data
    };

    axios(config).then(function (response) {
      console.log(JSON.stringify(response.data));
    })
      .catch(function (error) {
        console.log(error);
      }).then(() => {
        alert('Your post has been Permanently deleted')
        window.location.reload();
      })
  }

  const onDeletAll = () => {
    const FormData = require('form-data');
    let data = new FormData();
    data.append('action', 'delete');
    data.append('username', username);
    data.append('status', 'Deleted');
    let config = {

      method: 'post',
      url: 'http://localhost/deleteall.php',
      headers: data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' }
      ,
      data: data
    };

    axios(config).then(function (response) {
      console.log(JSON.stringify(response.data));
    })
      .catch(function (error) {
        console.log(error);
      }).then(() => {
        alert('All post has been Permanently deleted')
        window.location.reload();
      })
  }

  const textStyle = {
    maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };
  return (
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <Helmet><title>My Deleted Posts</title></Helmet>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2>My Deleted Posts</h2>
        {infoStatus !== '0 results[]' ? <button className="btn btn-danger" onClick={() => onDeletAll()}>Permanantly Delete All</button> : null}

      </div>
      <div className="row g-5">
        <div className="col-md-8" style={{ width: '100%' }}>
          {infoStatus === '0 results[]' ? <><h4>No Posts Found!</h4></>
            :
            <>


              <div class="table-responsive">
                <table class="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col" style={{ width: '30%' }}>Title</th>
                      <th scope="col" style={{ width: '30%' }}>Blog</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {infoStatus.map((data, index) => {

                      return <>
                        <tr>
                          <td index={index}>{index + 1}</td>
                          <td >{data.title}</td>
                          <td style={textStyle}>{data.post}</td>
                          <td>{data.status}</td>
                          <td>{UserRole === 'Admin' ? <><button className="btn btn-primary" onClick={() => onRecoverAdmin(data.id)}>Recover</button>
                            <button className="btn btn-danger" onClick={() => onDelete(data.id)}>Permanently Delete</button>
                          </> :
                            <><button className="btn btn-primary" onClick={() => onRecoverUser(data.id)}>Recover</button>
                              <button className="btn btn-danger" onClick={() => onDelete(data.id)}>Permanently Delete</button></>}</td>
                        </tr>
                      </>
                    })}
                  </tbody>
                </table>
              </div>
            </>
          }
        </div>

      </div>

    </main>
  )
}


export default MyDeletedPosts
