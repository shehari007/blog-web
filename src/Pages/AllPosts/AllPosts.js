import React, { useState, useEffect } from 'react'
import axios from 'axios'
import secureLocalStorage from "react-secure-storage";
import CryptoJS from 'crypto-js'
const AllPosts = () => {

  const role = secureLocalStorage.getItem('setRole')
  const Username = secureLocalStorage.getItem('UserDetail')

  if (role) {
    var decryptedToken = CryptoJS.AES.decrypt(role, 'Secret Pharase');
    var UserRole = decryptedToken.toString(CryptoJS.enc.Utf8);
    var decryptedUserDetails = CryptoJS.AES.decrypt(Username, 'Secret Pharase');
    var username = decryptedUserDetails.toString(CryptoJS.enc.Utf8);
  }


  const [infoStatus, setInfoStatus] = useState([]);
  console.log(infoStatus);

  useEffect(() => {

    const getUsers = async () => {
      const res = await axios(`http://localhost/allposts.php`);
      console.log(res.data);
      setInfoStatus(res.data);
    };

    getUsers();
  }, []);

  const onApprove = (id) => {
    const FormData = require('form-data');
    let data = new FormData();
    data.append('action', 'approve');
    data.append('id', id);
    data.append('status', 'Approved');
    let config = {

      method: 'post',
      url: 'http://localhost/approvefunction.php',
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
        window.location.reload();
      })
  }

  const onDeleteAdmin = (id) => {
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
        alert('Your post has been deleted permanently')
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
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2>All Blog Posts</h2>
      </div>
      <div className="row g-5">
        <div className="col-md-8" style={{ width: '100%' }}>
          {infoStatus === '0 results[]' ? <><h1>No Posts Found!</h1></>
            :
            <>


              <div class="table-responsive">
                <table class="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">UserName</th>
                      <th scope="col" style={{ width: '20%' }}>Title</th>
                      <th scope="col" style={{ width: '30%' }}>Blog</th>
                      <th scope="col">Status</th>
                      <th scope="col">Categpry</th>
                      <th scope="col" style={{ width: '5%' }}>Access</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {infoStatus.map((data, index) => {

                      return <>
                        <tr>
                          <td index={index}>{index + 1}</td>
                          <td>{data.name}</td>
                          <td>{data.title}</td>
                          <td style={textStyle}>{data.post}</td>
                          <td>{data.status}</td>
                          <td>{data.category}</td>
                          <td style={{ maxWidth: '20%' }}>{data.user}</td>
                          <td>{UserRole === 'Admin' && data.status === 'Pending Approval' ? <><button className="btn btn-primary">Edit</button>
                            <button className="btn btn-danger" onClick={() => onDeleteAdmin(data.id)}>Permanently Delete</button>
                            <button className="btn btn-success" onClick={() => onApprove(data.id)}>Approve</button>
                          </> : UserRole === 'Admin' ? <><button className="btn btn-primary">Edit</button>

                            <button className="btn btn-danger" onClick={() => onDeleteAdmin(data.id)}>Permanently Delete</button>
                          </> : null}</td>
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


export default AllPosts
