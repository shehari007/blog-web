import React from 'react'
import { useEffect, useState } from 'react';
import secureLocalStorage from "react-secure-storage";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import CryptoJS from 'crypto-js';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

const role = secureLocalStorage.getItem('setRole')
const Username = secureLocalStorage.getItem('UserDetail')

if (role) {
    var decryptedToken = CryptoJS.AES.decrypt(role, 'Secret Pharase');
    var UserRole = decryptedToken.toString(CryptoJS.enc.Utf8);
    var decryptedUserDetails = CryptoJS.AES.decrypt(Username, 'Secret Pharase');
    var username = decryptedUserDetails.toString(CryptoJS.enc.Utf8);
}

const EditPosts = () => {

    let history = useNavigate();
    const [id, setID] = useState('');
    const [name, setName] = useState('');
    const [title, setTitles] = useState('');
    const [post, setPost] = useState('');
    const [categoryData, setCategoryData] = useState([]);
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('');
    //const [convertedText, setConvertedText] = useState("");
    console.log(post)

    useEffect(() => {

        setID(secureLocalStorage.getItem('id'));
        setName(secureLocalStorage.getItem('name'));
        setTitles(secureLocalStorage.getItem('title'));
        setPost(secureLocalStorage.getItem('post'));
        setCategory(secureLocalStorage.getItem('category'));
        setStatus(secureLocalStorage.getItem('status'));
    }, []);

    useEffect(() => {
        const menuData = async () => {
            const res = await axios('http://localhost/menucategories.php?action=menu');
            console.log(res.data);
            setCategoryData(res.data);
        };
        menuData();
    }, []);

    const handleChange = event => {
        //console.log('Label:', event.target.selectedOptions[0].label);
        //console.log(event.target.value);
        setCategory(event.target.value);
    };

    const postData = () => {

        const FormData = require('form-data');
        let data = new FormData();
        data.append('action', 'update');
        data.append('id', id);
        data.append('title', title);
        data.append('post', post);
        data.append('category', category);
        data.append('status', status);

        let config = {

            method: 'post',
            url: 'http://localhost/editposts.php',
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
                alert('You Post successfully updated');
                secureLocalStorage.removeItem('id');
                secureLocalStorage.removeItem('title');
                secureLocalStorage.removeItem('post');
                secureLocalStorage.removeItem('category');
                secureLocalStorage.removeItem('status');
                secureLocalStorage.removeItem('name');
                {
                    name === username ? history('/dashboard/My Blog Posts')
                    :
                    history('/dashboard/Pending Approvals')
                }

                window.location.reload();
            })
    }

    const UserpostData = () => {

        const FormData = require('form-data');
        let data = new FormData();
        data.append('action', 'update');
        data.append('id', id);
        data.append('title', title);
        data.append('post', post);
        data.append('category', category);
        data.append('status', status);

        let config = {

            method: 'post',
            url: 'http://localhost/editposts.php',
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
                alert('You Post successfully updated');
                secureLocalStorage.removeItem('id');
                secureLocalStorage.removeItem('title');
                secureLocalStorage.removeItem('post');
                secureLocalStorage.removeItem('category');
                secureLocalStorage.removeItem('status');
                secureLocalStorage.removeItem('name');
                history('/dashboard/Pending Approvals');
                window.location.reload();
            })
    }


    return (
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>Edit Blog Post
                </h2>
            </div>
            <div style={{ width: '100%' }}>
                <label htmlFor="id" class="form-label">id #</label>
                <input type="text" class="form-control" id="id" value={id} disabled />
                <label htmlFor="name" class="form-label">Username</label>
                <input type="text" class="form-control" id="name" value={name} disabled />
                <label htmlFor="status" class="form-label">Status</label>
                <input type="text" class="form-control" id="status" value={status} disabled />
                <label htmlFor="title" class="form-label">Blog Title</label>
                <input type="text" class="form-control" id="title" value={title} onChange={(e) => setTitles(e.target.value)} />
                <label htmlFor="category" class="form-label">Category</label>
                <select class="form-select form-select-md mb-3" aria-label=".form-select-lg example" value={category} onChange={handleChange}>
                    <option value="">Select Category</option>
                    {categoryData.map((data, index) => {
                        return <>
                            <option value={data.category} index={index}>{data.category}</option>
                        </>
                    })}
                </select>
                <div>
                    <ReactQuill
                        theme='snow'
                        value={post}
                        onChange={setPost}
                        style={{ minHeight: '300px' }}
                    />
                </div>
                <br />
                {UserRole === 'Admin' ? <button type='submit' class="btn btn-success" onClick={postData}>Update Post</button>
                    :
                    <button type='submit' class="btn btn-success" onClick={UserpostData}>Update Post</button>}
            </div>
        </main>
    )
}

export default EditPosts
