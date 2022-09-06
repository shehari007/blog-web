import React, { useState, useEffect } from 'react'
import secureLocalStorage from "react-secure-storage";
import CryptoJS from 'crypto-js';
import axios from 'axios';
const MyDashboard = () => {
    const UserDetail = secureLocalStorage.getItem('UserDetail')
    if (UserDetail) {
        var decryptedUserDetails = CryptoJS.AES.decrypt(UserDetail, 'Secret Pharase');
        var Details = decryptedUserDetails.toString(CryptoJS.enc.Utf8);
    }

    const textStyle = {
        maxWidth: '100%',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    };
    const [totalPost, setTotalPost] = useState([]);
    const [myPost, setmyPost] = useState([]);
    const [myApprovals, setMyApprovals] = useState([]);
    //console.log(info);

    useEffect(() => {

        const getData = async () => {
            const res = await axios(`http://localhost/dashdetails.php?username=${Details}`);
            console.log(res.data);
            setTotalPost(res.data);
            //console.log(totalPost.toString())
        };

        getData();
    }, []);
    useEffect(() => {

        const getData = async () => {
            const res = await axios(`http://localhost/myposts.php?username=${Details}`);
            console.log(res.data);
            setmyPost(res.data);
            //console.log(totalPost.toString())
        };

        getData();
    }, []);
    useEffect(() => {
        const getData = async () => {
            const res = await axios(`http://localhost/pendingapprovals.php?username=${Details}`);
            console.log(res.data);
            setMyApprovals(res.data);
            //console.log(totalPost.toString())
        };

        getData();
    }, []);
    const link = "/userposts/" + Details
    return (
        
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            
            <h4>My Dashboard</h4><br />
            <div className="row ">
                <div className="col-md-2">
                    <div class="card" style={{ width: '18rem' }}>
                        <div class="card-body">
                            <h5 class="card-title">Total Posts ({totalPost})
                            </h5>
                            <a href={link} class="card-link">Show all Posts</a>
                        </div>
                    </div>
                    <div class="card" style={{ width: '18rem' }}>
                        <div class="card-body">
                            <h5 class="card-title">Pending Approvals ({myApprovals})
                            </h5>
                            <a href="#" class="card-link">Show all Pending Approvals</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 offset-md-1">
                    <div class="card" style={{ width: '18rem' }}>
                        <div class="card-body">
                            <h5 class="card-title">Pending Approvals ({myApprovals})
                            </h5>
                            <a href="#" class="card-link">Show all Pending Approvals</a>
                        </div>
                    </div>

                </div>
                
            </div>
        </main>
    )
}

export default MyDashboard
