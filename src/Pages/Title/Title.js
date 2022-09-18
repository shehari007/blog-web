import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import parse from 'html-react-parser'
import { Helmet } from 'react-helmet'
import secureLocalStorage from "react-secure-storage";
import CryptoJS from 'crypto-js';

const Title = () => {
    const role = secureLocalStorage.getItem('setRole')
    const Username = secureLocalStorage.getItem('UserDetail')

    if (role) {
        var decryptedToken = CryptoJS.AES.decrypt(role, 'Secret Pharase');
        var UserRole = decryptedToken.toString(CryptoJS.enc.Utf8);
        var decryptedUserDetails = CryptoJS.AES.decrypt(Username, 'Secret Pharase');
        var username = decryptedUserDetails.toString(CryptoJS.enc.Utf8);
    }
    const params = useParams()
    const TitleName = params.title
    const [info, setInfo] = useState([]);
    const [comments, setComments] = useState([]);
    const [pictureName, setpictureName] = useState([]);
    const [emaildata, setemailData] = useState([]);
    const [commentCount, setcommentCount] = useState([]);
    const [archiveDate, setarchiveDate] = useState([]);

    useEffect(() => {

        const getUsers = async () => {
            const res = await axios(`${process.env.REACT_APP_AXIOS_API_PHP}?action=archiveDates`);
            //console.log(res.data);
            setarchiveDate(res.data);
        };

        getUsers();
    }, []);

    useEffect(() => {

        const getDetails = async () => {
            const res = await axios(`${process.env.REACT_APP_AXIOS_API_PHP}?action=commentcount&title=${TitleName}`);
            //console.log(res.data);
            setcommentCount(res.data);
        };
        getDetails();
    }, []);

    useEffect(() => {

        const getDetails = async () => {
            const res = await axios(`${process.env.REACT_APP_AXIOS_API_PHP}?action=userDetails&username=${username}`);
            //console.log(res.data);
            setemailData(res.data);
        };
        getDetails();
    }, []);

    useEffect(() => {
        //console.log(`http://localhost/img.php`)
        const getDetails = async () => {
            const res = await axios(`${process.env.REACT_APP_AXIOS_API_PHP}?action=imageData&name=${username}`);
            //console.log(res.data);
            setpictureName(res.data);
        };
        getDetails();
    }, []);

    useEffect(() => {
        const getUsers = async () => {

            const res = await axios(`${process.env.REACT_APP_AXIOS_API_PHP}?action=alltitle&title=${TitleName}`);
            setInfo(res.data);
        };
        getUsers();

    }, []);

    useEffect(() => {
        const getUsers = async () => {

            const res = await axios(`${process.env.REACT_APP_AXIOS_API_PHP}?action=getAllComments&title=${TitleName}`);
            setComments(res.data);
        };
        getUsers();

    }, []);

    var ct = new Date().toLocaleString('en-us', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

    const UploadComment = () => {

        var personRole = ''
        { UserRole === 'Admin' ? personRole = 'Admin' : UserRole === 'User' ? personRole = 'User' : personRole = 'Visitor' }
        var cm_name = ''
        { username ? cm_name = username : cm_name = document.getElementById('visitname').value }
        var emailData = ''
        { username ? emaildata.map((data) => { return emailData = data.email }) : emailData = document.getElementById('visitemail').value }
        var comment = document.getElementById('visitcm').value;
        const FormData = require('form-data');
        let data = new FormData();
        data.append('action', 'uploadComment');
        data.append('title', TitleName);
        data.append('name', cm_name);
        data.append('email', emailData);
        data.append('picture', profilelink);
        data.append('role', personRole);
        data.append('post', comment);
        data.append('timestamp', ct);

        let config = {

            method: 'post',
            baseURL: `${process.env.REACT_APP_AXIOS_API_PHP}`,
            withCredentials: false,
            data: data
        };

        axios(config).then(function (response) {
            //console.log(JSON.stringify(response.data));
            window.location.reload();
        }).catch(function (error) {
            console.log(error);
        }).then(() => {
        })
    }
    var profilelink = ''
    {
        UserRole ? pictureName.map((data) => {

            profilelink = "/" + data.filename
        }) : profilelink = "/default.jpg"
    }


    console.log(ct);
    return (

        <div className="container" style={{ marginTop: '2%' }}>

            <Helmet><title>{TitleName} - Blog Post</title></Helmet>
            <div className="row g-5">
                <div className="col-md-8">
                    {info.map((data) => {
                        var link = "/userposts/" + data.name

                        return <>
                            <h3 className="pb-4 mb-4 fst-italic border-bottom">
                                From the {data.category}!
                            </h3>
                            <article className="blog-post">
                                <h2 className="blog-post-title mb-1">{data.title}</h2>
                                <p className="blog-post-meta">{data.post_time} by <a href={link}>{data.name}</a></p>
                                <p style={{ whiteSpace: 'pre-line' }}>{parse(data.post)}</p>
                            </article>

                            <div className="row height d-flex justify-content-center align-items-center" style={{ marginBottom: '5%' }}>
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="p-3">
                                            <h4>Comments ({commentCount}) </h4>
                                        </div>


                                        {UserRole ? <div className="mt-3 d-flex flex-row align-items-center p-3 form-color"> <img src={profilelink} width="50" className="rounded-circle mr-2" style={{ marginRight: '2%' }} />
                                            <form onSubmit={UploadComment} style={{ width: '100%', height: '5%' }}><input type="text" className="form-control" id="visitcm" placeholder="Enter your comment..." required /></form>
                                        </div> : <div className="mt-3 d-flex flex-row align-items-center p-3 form-color">
                                            <img src="/default.jpg" width="50" className="rounded-circle mr-2" style={{ marginRight: '2%' }} />
                                            <form onSubmit={UploadComment} className="d-flex flex-row align-items-center">
                                                <input type="email" className="form-control" id="visitemail" placeholder="Enter your email..." required />
                                                <input type="text" className="form-control" id="visitname" placeholder="Enter your name..." required />
                                                <textarea type="text" className="form-control" id="visitcm" placeholder="Enter your comment..." required />
                                                <button type="submit" className="btn btn-primary">Add</button></form>
                                        </div>}


                                        <div className="mt-2">
                                            {comments !== '0 results[]' ?
                                                comments.map((data) => {

                                                    var piclink = data.cm_picture

                                                    return <>
                                                        <div className="d-flex flex-row p-3">
                                                            <img src={piclink} style={{ marginRight: '2%' }} width="40" height="40" className="rounded-circle mr-3" />
                                                            <div className="w-100">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="d-flex flex-row align-items-center"> <h5 className="mr-2">{data.cm_name}</h5>
                                                                    </div>
                                                                    <small>{data.cm_time}</small>
                                                                </div>
                                                                <p className="text-justify comment-text mb-0 border-bottom">{data.cm_post}</p>
                                                            </div>
                                                        </div>
                                                    </>
                                                }) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>






                        </>
                    })}


                </div>
                <div className="col-md-4">
                    <div className="position-sticky" style={{ top: '2rem' }}>
                        <div className="p-4 mb-3 bg-light rounded">
                            <h4 className="fst-italic">About</h4>
                            <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
                        </div>
                        <div className="p-4">
                            <h4 className="fst-italic">Archives</h4>
                            <ol className="list-unstyled mb-0">
                                {archiveDate.map((data) => {
                                    var link = "/archiveposts/" + data.archive_time
                                    console.log(link);
                                    return <>

                                        <li><a href={link}>{data.archive_time}</a></li>
                                    </>
                                })}
                            </ol>
                        </div>
                        <div className="p-4">
                            <h4 className="fst-italic">Elsewhere</h4>
                            <ol className="list-unstyled">
                                <li><a href="localhost:3000">GitHub</a></li>
                                <li><a href="localhost:3000">Twitter</a></li>
                                <li><a href="localhost:3000">Facebook</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}


export default Title