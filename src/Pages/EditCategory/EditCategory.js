import React from 'react'
import { useEffect, useState } from 'react';
import secureLocalStorage from "react-secure-storage";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import CryptoJS from 'crypto-js';

const EditCategory = () => {

    const role = secureLocalStorage.getItem('setRole')
  const Username = secureLocalStorage.getItem('UserDetail')

  if (role) {
    var decryptedToken = CryptoJS.AES.decrypt(role, 'Secret Pharase');
    var UserRole = decryptedToken.toString(CryptoJS.enc.Utf8);
    var decryptedUserDetails = CryptoJS.AES.decrypt(Username, 'Secret Pharase');
    var username = decryptedUserDetails.toString(CryptoJS.enc.Utf8);
  }

    let history = useNavigate();
    const [id, setID] = useState('');
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('');
    useEffect(() => {
        setID(secureLocalStorage.getItem('id'));
        setCategory(secureLocalStorage.getItem('category'));
        setStatus(secureLocalStorage.getItem('status'));
    }, []);

    const postData = () => {

        const FormData = require('form-data');
        let data = new FormData();
        data.append('action', 'update');
        data.append('id', id)
        data.append('category', category);
        data.append('status', status
        );

        let config = {

            method: 'post',
            url: 'http://localhost/editcategory.php',
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
                alert('Category successfully updated');
                //window.location.reload();
                {UserRole==='Admin' && secureLocalStorage.getItem('route')==='Pending Approval'?
                history('/dashboard/Pending Approvals'): UserRole==='Admin'?history('/dashboard/Add New Category'): history('/dashboard/Pending Approvals');}
                secureLocalStorage.removeItem('route');
                window.location.reload();
            })
    }


    return (
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>Edit Category
                </h2>
            </div>
            <div style={{ width: '100%' }}>
                <label htmlFor="id" class="form-label">id #</label>
                <input type="text" class="form-control" id="id" value={id} disabled />
                <label htmlFor="nameofcategory" class="form-label">Edit Name of Category</label>
                <input type="text" class="form-control" id="nameofcategory" value={category} onChange={(e) => setCategory(e.target.value)} />
                <label htmlFor="status" class="form-label">Status</label>
                <input type="text" class="form-control" id="status" value={status} disabled />
                <br />
                <button type='submit' class="btn btn-success" onClick={postData}>Update Category</button>
            </div>
        </main>
    )
}

export default EditCategory
