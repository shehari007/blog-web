import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js'
import secureLocalStorage from "react-secure-storage";
import { Helmet } from 'react-helmet';


const NewCategory = () => {

    const UserRole = secureLocalStorage.getItem('setAuthentication')
    if (UserRole) {
        var decryptedToken = CryptoJS.AES.decrypt(UserRole, 'Secret Pharase');
        var role = decryptedToken.toString(CryptoJS.enc.Utf8);
    }

    const [infoStatus, setInfoStatus] = useState([]);

    const postData = () => {

        var category = document.getElementById('nameofcategory').value;
       // console.log(category);
        if (category !== ''){
            const FormData = require('form-data');
            let data = new FormData();
            data.append('action', 'addnewcat');
            data.append('cat', category);
            data.append('status', 'Approved');
    
            let config = {
    
                method: 'post',
                url: `${process.env.REACT_APP_AXIOS_API_PHP}`,
                headers: data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' }
                ,
                data: data
            };
    
            axios(config).then(function (response) {
                //console.log(JSON.stringify(response.data));
            })
                .catch(function (error) {
                    console.log(error);
                }).then(() => {
                    alert('New Category Added Successfully');
                    window.location.reload();
                })
        }
        }


    useEffect(() => {
        const menuData = async () => {
            const res = await axios(`${process.env.REACT_APP_AXIOS_API_PHP}?action=adminmenucat`);
            setInfoStatus(res.data);
        };
        menuData();
    }, []);

    const onDelete = (id) => {
        const FormData = require('form-data');
        let data = new FormData();
        data.append('action', 'deleteCategory');
        data.append('id', id);

        let config = {

            method: 'post',
            url: `${process.env.REACT_APP_AXIOS_API_PHP}`,
            headers: data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' }
            ,
            data: data
        };

        axios(config).then(function (response) {
            //console.log(JSON.stringify(response.data));
        })
            .catch(function (error) {
                console.log(error);
            }).then(() => {
                alert('Category Deleted Successfully')
                window.location.reload();
            })
    }
    const setData = (data) => {
        let { id, category, status } = data;
        secureLocalStorage.setItem('id', id);
        secureLocalStorage.setItem('category', category);
        secureLocalStorage.setItem('status', status);
    }
     const approveAll =() => {
        const FormData = require('form-data');
        let data = new FormData();
        data.append('action', 'approveallcat');
        data.append('status', 'Approved');

        let config = {

            method: 'post',
            url: `${process.env.REACT_APP_AXIOS_API_PHP}`,
            headers: data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' }
            ,
            data: data
        };

        axios(config).then(function (response) {
            //console.log(JSON.stringify(response.data));
        })
            .catch(function (error) {
                console.log(error);
            }).then(() => {
                alert('No pending Approvals Remaining')
                window.location.reload();
            })
     }

    return (
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Helmet><title>Add New Category</title></Helmet>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>Add New Category
                </h2>
            </div>
            <div style={{ width: '100%' }}>
                <form onSubmit={postData}>
                <label htmlFor="nameofcategory" class="form-label">Write Name of Category</label>
                <input type="text" class="form-control" id="nameofcategory" required/>
                <br />
                <button type='submit' class="btn btn-warning">Add Category</button>
                </form>
            </div>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>Category DATA
                </h2>
                <button type="button" class="btn btn-success" onClick={approveAll}>Approve All</button>
            </div>
            <table class="table table-striped table-bordered table-sm">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {infoStatus.map((data, index) => {

                        return <>

                            <tr>
                                <td index={index}>{index + 1}</td>
                                <td >{data.category}</td>
                                <td>{data.status}</td>
                                <td>{role==='Admin' && data.status === 'Pending Approval' ? <><a href="/dashboard/EditCategory">
                                    <button className="btn btn-primary" onClick={() => setData(data)}>Edit</button></a>
                                    <button className="btn btn-danger" onClick={() => onDelete(data.id)}>Delete</button>
                                    <button className="btn btn-success">Approve</button>
                                </> : role==='Admin' ? <><a href="/dashboard/EditCategory">
                                    <button className="btn btn-primary" onClick={() => setData(data)}>Edit</button></a>
                                    <button className="btn btn-danger" onClick={() => onDelete(data.id)}>Delete</button>
                                    
                                </> :
                                    null}</td>
                            </tr>
                        </>
                    })}
                </tbody>
            </table>

        </main>

    )
}

export default NewCategory
