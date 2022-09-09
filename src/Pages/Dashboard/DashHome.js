import React from 'react'
import './DashHome.css'
import Profile from '..//..//Pages/Profile/Profile'
import MyblogPost from '..//..//Pages/MyBlogPosts/MyBlogPosts'
import MyDashboard from '..//..//Pages/MyDashboard/MyDashboard'
import CreatePost from '..//..//Pages/CreatePost/CreatePost'
import AllPosts from '..//..//Pages/AllPosts/AllPosts'
import MyDeletedPosts from '..//..//Pages/MyDeletedPosts/MyDeletedPosts'
import PendingApprovals from '..//..//Pages/PendingApprovals/PendingApprovals'
import EditPosts from '..//..//Pages/EditPosts/EditPosts'
import EditCategory from '..//..//Pages/EditCategory/EditCategory'
import secureLocalStorage from "react-secure-storage";
import AddNewCategory from '..//..//Pages/NewCategory/NewCategory'
import CryptoJS from 'crypto-js';
import { useParams } from 'react-router-dom'

const DashHome = () => {

    const role = secureLocalStorage.getItem('setRole')
    if (role) {
        var decryptedToken = CryptoJS.AES.decrypt(role, 'Secret Pharase');
        var UserRole = decryptedToken.toString(CryptoJS.enc.Utf8);
    }

    const params = useParams()
    const pageName = params.Dashboard

    return (

        <><header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">Usage Access: ({UserRole})</a>

        </header><div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" style={{ position: "relative" }}>
                        <div className="position-sticky pt-3 sidebar-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className={"nav-link"} aria-current="page" href="/dashboard/My Dashboard">
                                        <span data-feather="home" className="align-text-bottom"></span>
                                        My Dashboard
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/dashboard/Pending Approvals">
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        Pending Approvals
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/dashboard/My Blog Posts">
                                        <span data-feather="shopping-cart" className="align-text-bottom"></span>
                                        My Blog Posts
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/dashboard/Create A New Post">
                                        <span data-feather="users" className="align-text-bottom"></span>
                                        Create A New Post
                                    </a>
                                </li>
                                {UserRole === 'Admin' ? <><li className="nav-item">
                                    <a className="nav-link" href="/dashboard/All Posts">
                                        <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                                        All Other Posts
                                    </a>
                                </li></> : null}

                                <li className="nav-item">
                                    <a className="nav-link" href="/dashboard/My Deleted Posts">
                                        <span data-feather="layers" className="align-text-bottom"></span>
                                        My Deleted Posts
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/dashboard/Add New Category">
                                        <span data-feather="layers" className="align-text-bottom"></span>
                                        Add New Category
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/dashboard/profile">
                                        <span data-feather="layers" className="align-text-bottom"></span>
                                        Profile Details
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    {pageName === 'My Dashboard' ? <MyDashboard /> : null}
                    {pageName === 'My Blog Posts' ? <MyblogPost /> : null}
                    {pageName === 'profile' ? <Profile /> : null}
                    {pageName === 'Pending Approvals' ? <PendingApprovals /> : null}
                    {pageName === 'Create A New Post' ? <CreatePost /> : null}
                    {pageName === 'My Deleted Posts' ? <MyDeletedPosts /> : null}
                    {pageName === 'All Posts' && UserRole==='Admin' ? <AllPosts /> : null}
                    {pageName === 'Add New Category' && UserRole==='Admin'? <AddNewCategory /> : null}
                    {pageName === 'EditCategory' && UserRole==='Admin'? <EditCategory /> : null}
                    {pageName === 'EditPosts' && UserRole==='Admin'? <EditPosts /> : null}
                </div>
            </div></>

    )
}

export default DashHome
