import React, { useState, useEffect } from 'react'
import secureLocalStorage from "react-secure-storage";
import CryptoJS from 'crypto-js';
import axios from 'axios';
const MyDashboard = () => {
    const role = secureLocalStorage.getItem('setRole')
    const Username = secureLocalStorage.getItem('UserDetail')

    if (role) {
        var decryptedToken = CryptoJS.AES.decrypt(role, 'Secret Pharase');
        var UserRole = decryptedToken.toString(CryptoJS.enc.Utf8);
        var decryptedUserDetails = CryptoJS.AES.decrypt(Username, 'Secret Pharase');
        var Details = decryptedUserDetails.toString(CryptoJS.enc.Utf8);
    }
    var Link = ''
    const [totalPost, setTotalPost] = useState([]);
    const [myPost, setmyPost] = useState([]);
    const [myApprovals, setMyApprovals] = useState([]);
    const [myBlogDeleted, setMyBlogDeleted] = useState([]);
   
    { UserRole === 'Admin' ? Link = `http://localhost/Adminpendingapprovals.php` : Link = `http://localhost/pendingapprovalsCount.php?name=${Details}` }
    useEffect(() => {

        const getData = async () => {
            const res = await axios(`http://localhost/dashdetails.php?username=${Details}`);
            console.log(res.data);
            setTotalPost(res.data);
            
        };

        getData();
    }, []);
    useEffect(() => {

        const getData = async () => {
            const res = await axios(`http://localhost/mypostscount.php?username=${Details}`);
            console.log(res.data);
            setmyPost(res.data);
            
        };

        getData();
    }, []);
    useEffect(() => {
        const getData = async () => {
            const res = await axios(Link);
            console.log(res.data);
            setMyApprovals(res.data);
           
        };

        getData();
    }, []);
    useEffect(() => {

        const getData = async () => {
            const res = await axios(`http://localhost/myblogRecycleCount.php?username=${Details}`);
            console.log(res.data);
            setMyBlogDeleted(res.data);
           
        };

        getData();
    }, []);

    return (

        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>My Dashboard</h2>
            </div>

            <div className="row ">
                <div className="col-md-2">
                    <div class="card text-bg-warning" style={{ width: '18rem', height: '6rem' }}>
                        <div class="card-body">
                            <h5 class="card-title">My Deleted Posts ({myBlogDeleted})
                            </h5>
                            <a href={"/dashboard/My Deleted Posts"} class="card-link"><button class="btn btn-light">Show Deleted Posts</button></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 offset-md-1">
                    <div class="card text-bg-danger" style={{ width: '18rem', height: '6rem' }}>
                        <div class="card-body">
                            {UserRole==='Admin'?<h5 class="card-title">Pending Approvals ({myApprovals})
                            </h5> : <h5 class="card-title">My Pending Approvals ({myApprovals})
                            </h5>}
                            
                            <a href={"/dashboard/Pending Approvals"} class="card-link"><button class="btn btn-light">Pending Approvals</button></a>
                        </div>
                    </div>

                </div>
                <div className="col-md-2 offset-md-1">
                    <div class="card text-bg-info" style={{ width: '18rem', height: '6rem' }}>
                        <div class="card-body">
                            <h5 class="card-title">My Blog Posts ({myPost})
                            </h5>
                            <a href={"/dashboard/My Blog Posts"} class="card-link"><button class="btn btn-light">Show My Blog Posts</button></a>
                        </div>

                    </div>


                </div>

            </div>
            <br />
            {UserRole === 'Admin' ? <><div className='row'>
                <div className="col-md-2">
                    <div class="card text-bg-success" style={{ width: '18rem', height: '6rem' }}>
                        <div class="card-body">
                            <h5 class="card-title">Total Posts ({totalPost})
                            </h5>
                            <a href={"/dashboard/All Posts"} class="card-link"><button class="btn btn-light">Show all Posts</button></a>
                        </div>
                    </div>

                </div>
            </div></> : null}

        </main>
    )
}

export default MyDashboard
