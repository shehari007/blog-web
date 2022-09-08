import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import secureLocalStorage from "react-secure-storage";
import CryptoJS from 'crypto-js';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

const CreatePost = () => {
    var status = ''
    const role = secureLocalStorage.getItem('setRole')
    const Username = secureLocalStorage.getItem('UserDetail')

    if (role) {
        var decryptedToken = CryptoJS.AES.decrypt(role, 'Secret Pharase');
        var UserRole = decryptedToken.toString(CryptoJS.enc.Utf8);
        var decryptedUserDetails = CryptoJS.AES.decrypt(Username, 'Secret Pharase');
        var username = decryptedUserDetails.toString(CryptoJS.enc.Utf8);
    }

    { UserRole === 'Admin' ? status = 'Approved' : status = 'Pending Approval' }

    const [convertedText, setConvertedText] = useState("");
    const [blogTitle, setBlogTitle] = useState('');
    //const [blogPost, setBlogPost] = useState("");
    const [Category, setCategory] = useState([]);
    const [selected, setSelected] = useState('');

    const handleChange = event => {
        //console.log('Label 👉️', event.target.selectedOptions[0].label);
        //console.log(event.target.value);
        setSelected(event.target.value);
    };

    const postData = () => {

        var title = document.getElementById('blogtitle').value;
        //var post = document.getElementById('blogtext').value;
        //alert(post)
        var post = convertedText;
        alert(convertedText)
        const FormData = require('form-data');
        let data = new FormData();
        data.append('action', 'add');
        data.append('title', title);
        data.append('post', post);
        data.append('category', selected);
        data.append('user', UserRole);
        data.append('name', username);
        data.append('status', status)



        let config = {

            method: 'post',
            url: 'http://localhost/createnewblog.php',
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
                alert('new post added')
                window.location.reload();
            })
    }

    useEffect(() => {
        const menuData = async () => {
            const res = await axios('http://localhost/menucategories.php?action=menu');
            console.log(res.data);
            setCategory(res.data);
        };
        menuData();
    }, []);

    return (
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>Write A New Blog</h2>
            </div>
            <div style={{ width: '100%' }}>
                <label htmlFor="blogtitle" class="form-label">Blog Title</label>
                <input type="text" class="form-control" id="blogtitle" onChange={(e) => setBlogTitle(e.target.value)} />
                <br />
                <select class="form-select form-select-sm mb-3" aria-label=".form-select-lg example" value={selected} onChange={handleChange}>
                    <option value="">Select Category</option>
                    {Category.map((data, index) => {
                        return <>
                            <option value={data.category} index={index}>{data.category}</option>
                        </>
                    })}
                </select>
                <label htmlFor="blogtext" class="form-label">Blog Data</label>

                <div>
                    <ReactQuill
                        theme='snow'
                        value={convertedText}
                        onChange={setConvertedText}
                        style={{ minHeight: '300px' }}
                    />
                </div>
                <br />
                <button type='submit' class="btn btn-success" onClick={postData}>Create Post</button>

            </div>


        </main>
    )
}

export default CreatePost
