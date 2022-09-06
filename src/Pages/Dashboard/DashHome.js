import React from 'react'
import './DashHome.css'
import Profile from '..//..//Pages/Profile/Profile'
import MyblogPost from '..//..//Pages/MyBlogPosts/MyBlogPosts'
import MyDashboard from '..//..//Pages/MyDashboard/MyDashboard'
import { useParams } from 'react-router-dom'

const DashHome = () => {
 
    const params = useParams()
    const pageName = params.Dashboard
  return (
    
      <><header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">My Blog Panel</a>
          
      </header><div className="container-fluid">
              <div className="row">
                  <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" style={{position: "relative"}}>
                      <div className="position-sticky pt-3 sidebar-sticky">
                          <ul className="nav flex-column">
                              <li className="nav-item">
                                  <a className={"nav-link"} aria-current="page" href="/dashboard/My Dashboard">
                                      <span data-feather="home" className="align-text-bottom"></span>
                                      My Dashboard
                                  </a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#">
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
                                  <a className="nav-link" href="#">
                                      <span data-feather="users" className="align-text-bottom"></span>
                                      Add New
                                  </a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#">
                                      <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                                      New Comments Approval
                                  </a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="/dashboard/profile">
                                      <span data-feather="layers" className="align-text-bottom"></span>
                                      Profile Details
                                  </a>
                              </li>
                          </ul>

                          {/*<h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                              <span>Saved reports</span>
                              <a className="link-secondary" href="#" aria-label="Add a new report">
                                  <span data-feather="plus-circle" className="align-text-bottom"></span>
                              </a>
                          </h6>
                          <ul className="nav flex-column mb-2">
                              <li className="nav-item">
                                  <a className="nav-link" href="#">
                                      <span data-feather="file-text" className="align-text-bottom"></span>
                                      Current month
                                  </a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#">
                                      <span data-feather="file-text" className="align-text-bottom"></span>
                                      Last quarter
                                  </a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#">
                                      <span data-feather="file-text" className="align-text-bottom"></span>
                                      Social engagement
                                  </a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#">
                                      <span data-feather="file-text" className="align-text-bottom"></span>
                                      Year-end sale
                                  </a>
                              </li>
  </ul>*/}
                      </div>
                  </nav>
              
          {pageName==='My Dashboard'?<MyDashboard/>: null}
          {pageName==='My Blog Posts'?<MyblogPost/>: null}
          {pageName==='profile'?<Profile/>: null}
          </div>
          </div></>
    
  )
}

export default DashHome
