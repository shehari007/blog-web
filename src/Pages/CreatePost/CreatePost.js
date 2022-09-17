import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import secureLocalStorage from "react-secure-storage";
import CryptoJS from 'crypto-js';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';

const CreatePost = () => {

    let history = useNavigate();
    var status = ''
    const role = secureLocalStorage.getItem('setRole')
    const Username = secureLocalStorage.getItem('UserDetail')

    if (role) {
        var decryptedToken = CryptoJS.AES.decrypt(role, 'Secret Pharase');
        var UserRole = decryptedToken.toString(CryptoJS.enc.Utf8);
        var decryptedUserDetails = CryptoJS.AES.decrypt(Username, 'Secret Pharase');
        var username = decryptedUserDetails.toString(CryptoJS.enc.Utf8);
    }
    //console.log(username);

    { UserRole === 'Admin' ? status = 'Approved' : status = 'Pending Approval' }

    const [convertedText, setConvertedText] = useState("");
    const [Category, setCategory] = useState([]);
    const [selected, setSelected] = useState('');

    const handleChange = event => {
        //console.log('Label:', event.target.selectedOptions[0].label);
        //console.log(event.target.value);
        setSelected(event.target.value);
    };

    var dp = new Date().toLocaleString('en-us',{month:'long',day: 'numeric', year:'numeric'});
   var ard=new Date().toLocaleString('en-us',{month:'long', year:'numeric'});
   
    const postData = () => {

        var title = document.getElementById('blogtitle').value;
        var post = convertedText;
        const FormData = require('form-data');
        let data = new FormData();
        data.append('action', 'addNewBlog');
        data.append('title', title);
        data.append('post', post);
        data.append('category', selected);
        data.append('user', UserRole);
        data.append('name', username);
        data.append('status', status);
        data.append('mainDate', dp);
        data.append('archiveDate', ard);
        
        let config = {

            method: 'post',
            url: `${process.env.REACT_APP_AXIOS_API_PHP}`,
            headers: data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' }
            ,
            data: data
        }

        axios(config).then(function (response) {
            console.log(JSON.stringify(response.data));
        })
            .catch(function (error) {
                console.log(error);
            }).then(() => {
                alert('Post Added Successfully');
                {UserRole==='Admin'? history('/dashboard/My Blog Posts'): history('/dashboard/Pending Approvals')}
            })
    }

    useEffect(() => {
        const menuData = async () => {
            const res = await axios(`${process.env.REACT_APP_AXIOS_API_PHP}?action=menu`);
            console.log(res.data);
            setCategory(res.data);
        };
        menuData();
    }, []);

    

    const addCat = () => {

        var category1 = document.getElementById('categoryfield').value;
        console.log(category1);
        const FormData = require('form-data');
        let data = new FormData();
        data.append('action', 'addnewcat');
        data.append('cat', category1);
        data.append('status', status);

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
                alert('New Category Added Successfully');
                document.getElementById('categoryfield').value = '';
              
            })
    }

    const reqCat = () => {

        var category1 = document.getElementById('categoryfield').value;
        console.log(category1);
        const FormData = require('form-data');
        let data = new FormData();
        data.append('action', 'reqNewCategory');
        data.append('cat', category1);
        data.append('status', status);
        data.append('username', username);

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
                alert('New Category Requested Successfully');
                document.getElementById('categoryfield').value = '';
                
            })
    }



    return (
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Helmet><title>Create A New Blog Post</title></Helmet>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>Write A New Blog</h2>
            </div>
            <div style={{ width: '100%' }}>
                <form onSubmit={postData}>
                <label htmlFor="blogtitle" class="form-label">Blog Title</label>
                <input type="text" class="form-control" id="blogtitle" required/>
                <br />
                <select class="form-select form-select-md mb-3" aria-label=".form-select-lg example" value={selected} onChange={handleChange} required>
                    <option value="">Select Category</option>
                    {Category.map((data, index) => {
                        return <>
                            <option value={data.category} index={index}>{data.category}</option>
                        </>
                    })}
                </select>
                {UserRole==='Admin'?
                <><label htmlFor="categoryfield" className="form-label">Add New Category</label>
                <input type="text" class="form-control" id="categoryfield" /><br />
                <button className="btn btn-primary" type="submit" onClick={addCat}>Add Category</button></>
                 :
                 <><label htmlFor="categoryfield" className="form-label">Request to Add New Category</label>
                <input type="text" class="form-control" id="categoryfield" /><br />
                <button className="btn btn-primary" type="submit" onClick={reqCat}>Request</button></>
                 }
                <br />
                <br />
                <div>
                    <ReactQuill
                        theme='snow'
                        value={convertedText}
                        onChange={setConvertedText}
                        style={{ minHeight: '300px' }}
                        
                    />
                </div>
                <br />
                <button type='submit' class="btn btn-success">Create Post</button>
                </form>
            </div>
        </main>
    )
}

export default CreatePost
