import React, { useState, useEffect } from 'react'
import axios from 'axios'
import secureLocalStorage from "react-secure-storage";
import CryptoJS from 'crypto-js'
import { Helmet } from 'react-helmet';

const MyBlogPosts = () => {

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
      const res = await axios(`${process.env.REACT_APP_AXIOS_API_PHP}?action=myBlogPosts&username=${username}`);
      console.log(res.data);
      setInfoStatus(res.data);
    };

    getUsers();
  }, []);

  const onApprove = (id) => {
    const FormData = require('form-data');
    let data = new FormData();
    data.append('action', 'approvefunction');
    data.append('id', id);
    data.append('status', 'Approved');
    let config = {

      method: 'post',
      url: `${process.env.REACT_APP_AXIOS_API_PHP}`,
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

  const onDelete = (id) => {
    const FormData = require('form-data');
    let data = new FormData();
    data.append('action', 'blogRecyclebin');
    data.append('id', id);
    data.append('status', 'Deleted');
    let config = {

      method: 'post',
      url: `${process.env.REACT_APP_AXIOS_API_PHP}`,
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
        alert('Your post has been deleted successfully')
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

  const setData = (data) => {
    let { id, name, title, post, category, status } = data;
    secureLocalStorage.setItem('id', id);
    secureLocalStorage.setItem('name', name);
    secureLocalStorage.setItem('title', title);
    secureLocalStorage.setItem('post', post);
    secureLocalStorage.setItem('category', category);
    secureLocalStorage.setItem('status', status);
}

  return (
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <Helmet><title>My Blog Posts</title></Helmet>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h2>My Blog Posts</h2>
      <a href='/dashboard/Create A New Post'><button className='btn btn-success'>Create New</button></a>
      </div>
        <div className="row g-5">
          <div className="col-md-8" style={{ width: '100%' }}>
            {infoStatus === '0 results[]' ? <><h4>No Posts Found!</h4><a href="/dashboard/Create A New Post/">Create a new post?</a></>
              :
              <>
                <div class="table-responsive">
                  <table class="table table-striped table-bordered table-sm">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col" style={{ width: '20%' }}>Title</th>
                        <th scope="col" style={{ width: '15%' }}>Blog</th>
                        <th scope="col">Status</th>
                        <th scope="col">Category</th>
                        <th scope="col">Post Time</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {infoStatus.map((data, index) => {
                        
                        return <>
                          <tr>
                            <td index={index}>{index + 1}</td>
                            <td >{data.title}</td>
                            <td><span class="d-inline-block text-truncate" style={{maxWidth: '150px'}}>{data.post}</span></td>
                            <td>{data.status}</td>
                            <td>{data.category}</td>
                            <td>{data.post_time}</td>
                            <td>{UserRole === 'Admin' ? <><a href="/dashboard/EditPosts"><button className="btn btn-primary" onClick={() => setData(data)}>Edit</button></a>
                              <button className="btn btn-danger"onClick={() => onDelete(data.id)}>Delete</button>
                              </> : 
                              <><a href="/dashboard/EditPosts"><button className="btn btn-primary" onClick={() => setData(data)}>Edit</button></a>
                                <button className="btn btn-danger" onClick={() => onDelete(data.id)}>Delete</button></>}</td>
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


export default MyBlogPosts
