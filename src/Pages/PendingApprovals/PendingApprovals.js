import React, { useState, useEffect } from 'react'
import axios from 'axios'
import secureLocalStorage from "react-secure-storage";
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router';

const PendingApprovals = () => {
  let history = useNavigate();
  const role = secureLocalStorage.getItem('setRole')
  const Username = secureLocalStorage.getItem('UserDetail')

  if (role) {
    var decryptedToken = CryptoJS.AES.decrypt(role, 'Secret Pharase');
    var UserRole = decryptedToken.toString(CryptoJS.enc.Utf8);
    var decryptedUserDetails = CryptoJS.AES.decrypt(Username, 'Secret Pharase');
    var username = decryptedUserDetails.toString(CryptoJS.enc.Utf8);
  }
  var Link = ''
  var Link2 = ''
  const [UserCatStatus, setUserCatStatus] = useState([]);
  const [infoStatus, setInfoStatus] = useState([]);
  console.log(infoStatus);

  {
    UserRole === 'Admin' ? Link = `http://localhost/AdminpendingapprovalsPosts.php?status=${'Pending Approval'}` :
      Link = `http://localhost/pendingapprovalsPosts.php?status=${'Pending Approval'}&name=${username}`
  }

  {
    UserRole === 'User' ? Link2 = `http://localhost/usercatdetails.php?status=${'Pending Approval'}&name=${username}` :
      Link2 = `http://localhost/adminusercatdetails.php?action=menu`
  }

  useEffect(() => {
    console.log(Link2)
    const getDetails = async () => {
      const res = await axios(Link2);
      console.log(res.data);
      setUserCatStatus(res.data);
    };

    getDetails();
  }, []);

  useEffect(() => {
    console.log(Link)
    const getDetails = async () => {
      const res = await axios(Link);
      console.log(res.data);
      setInfoStatus(res.data);
    };

    getDetails();
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

  const onCatApprove = (id) => {
    const FormData = require('form-data');
    let data = new FormData();
    data.append('action', 'approve');
    data.append('id', id);
    data.append('status', 'Approved');
    let config = {

      method: 'post',
      url: 'http://localhost/admincatapproval.php',
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
        alert('Your post has been moved to recycle bin')
        window.location.reload();
      })
  }

  const onDeleteUser = (id) => {
    const FormData = require('form-data');
    let data = new FormData();
    data.append('action', 'delete');
    data.append('id', id);
    data.append('status', 'Deleted');
    let config = {

      method: 'post',
      url: 'http://localhost/myblogRecyclebin.php',
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
        alert('Your post has been moved to recycle bin')
        window.location.reload();
      })
  }

  const onDeleteCat = (id) => {
    const FormData = require('form-data');
    let data = new FormData();
    data.append('action', 'delete');
    data.append('id', id);

    let config = {

      method: 'post',
      url: 'http://localhost/deletecategories.php',
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
        alert('Category Deleted Successfully')
        window.location.reload();
      })
  }

  const setData = (data) => {
    let { id, name, title, post, category, status } = data;
    secureLocalStorage.setItem('id', id);
    secureLocalStorage.setItem('name', name);
    secureLocalStorage.setItem('title', title);
    secureLocalStorage.setItem('post', post);
    secureLocalStorage.setItem('category', category);
    secureLocalStorage.setItem('status', status);
  }

  const setCat = (data) => {
    let { id, category, status } = data;
    secureLocalStorage.setItem('id', id);
    secureLocalStorage.setItem('category', category);
    secureLocalStorage.setItem('status', status);
    secureLocalStorage.setItem('route', 'Pending Approval');
  }


  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        {UserRole === 'Admin' ? <h2>Pending Blog Approvals</h2> : <h2>My Blogs Pending Approvals</h2>}
      </div>
      <div className="row g-5">
        <div className="col-md-8" style={{ width: '100%' }}>
          {infoStatus === '0 results[]' ? <><h4>No Pending Blog Posts Found!</h4></>
            :
            <>
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">UserName</th>
                      <th scope="col" style={{ width: '15%' }}>Title</th>
                      <th scope="col" style={{ width: '15%' }}>Blog</th>
                      <th scope="col" style={{ width: '15%' }}>Category</th>
                      <th scope="col" style={{ width: '15%' }}>Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {infoStatus.map((data, index) => {

                      return <>
                        <tr>
                          <td index={index}>{index + 1}</td>
                          <td>{data.name}</td>
                          <td >{data.title}</td>
                          <td><span className="d-inline-block text-truncate" style={{ maxWidth: '150px' }}>{data.post}</span></td>
                          <td>{data.category}</td>
                          <td>{data.status}</td>
                          <td>{UserRole === 'Admin' ? <><a href="/dashboard/EditPosts"><button className="btn btn-primary" onClick={() => setData(data)}>Edit</button></a>
                            <button className="btn btn-danger" onClick={() => onDeleteAdmin(data.id)}>Permanently Delete</button>
                            <button className="btn btn-success" onClick={() => onApprove(data.id)}>Approve</button></> :
                            <><a href="/dashboard/EditPosts"><button className="btn btn-primary" onClick={() => setData(data)}>Edit</button></a>
                              <button className="btn btn-danger" onClick={() => onDeleteUser(data.id)}>Delete</button></>}</td>
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
      <br />
      <br />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        {UserRole === 'Admin' ? <h2>Pending Category Approvals</h2> : <h2>My Category Pending Approvals</h2>}
      </div>
      <div className="row g-5">
        <div className="col-md-8" style={{ width: '100%' }}>
          {UserCatStatus === '0 cat[]' ? <><h4>No Pending Category Found!</h4></>
            :
            <>
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">UserName</th>
                      <th scope="col">Category Requested</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {UserCatStatus.map((data, index) => {

                      return <>
                        <tr>
                          <td index={index}>{index + 1}</td>
                          <td>{data.name}</td>
                          <td >{data.category}</td>
                          <td>{data.status}</td>
                          <td>{UserRole === 'Admin' ? <><a href="/dashboard/EditCategory"><button className="btn btn-primary" onClick={() => setCat(data)}>Edit</button></a>
                            <button className="btn btn-danger" onClick={() => onDeleteCat(data.id)}>Permanently Delete</button>
                            <button className="btn btn-success" onClick={() => onCatApprove(data.id)}>Approve</button></> :
                            <><a href="/dashboard/EditCategory"><button className="btn btn-primary" onClick={() => setCat(data)}>Edit</button></a>
                              <button className="btn btn-danger" onClick={() => onDeleteCat(data.id)}>Permanatly Delete</button></>}</td>
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


export default PendingApprovals
