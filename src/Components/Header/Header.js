import React, { useState, useEffect } from 'react'
import CryptoJS from 'crypto-js'
import { useNavigate } from 'react-router'
import axios from 'axios'
import  secureLocalStorage  from  "react-secure-storage";


const Header = () => {

  const tokenStatus = secureLocalStorage.getItem('setAuthentication')
  const Username = secureLocalStorage.getItem('UserDetail')
  if (tokenStatus) {
    var decryptedToken = CryptoJS.AES.decrypt(tokenStatus, 'Secret Pharase');
    var role = decryptedToken.toString(CryptoJS.enc.Utf8);
    var decryptedUserDetails = CryptoJS.AES.decrypt(Username, 'Secret Pharase');
    var username = decryptedUserDetails.toString(CryptoJS.enc.Utf8);
  }


  let history = useNavigate();

  const handleLogout = () => {

    secureLocalStorage.clear();
    history('/login');
  }
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    const menuData = async () => {
      const res = await axios('http://localhost/blog.php?action=menu');
      setMenuData(res.data);
    };
    menuData();
  }, []);


  return (
    <><header>

      <div className="px-3 py-2 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

            {role === 'Admin' ?
              <><a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">Welcome back {username}!</a>
                <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                  <li>
                    <a href="/home" className="nav-link text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="localhost:3000" className="nav-link text-white">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="localhost:3000" className="nav-link text-white">
                      Pending Approvals
                    </a>
                  </li>
                  <li>
                    <a href="localhost:3000" className="nav-link text-white">
                      Create New Post
                    </a>
                  </li>
                  <li>
                    <a href="localhost:3000" className="nav-link text-white">
                      Profile
                    </a>
                  </li>
                  <li>
                    <button type="button" onClick={handleLogout} className="btn btn-light text-dark me-2">Logout</button>

                  </li>
                </ul></>
              : role === 'User' ?
                <><a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">Welcome back {username}!</a>
                  <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                    <li>
                      <a href="/home" className="nav-link text-white">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="localhost:3000" className="nav-link text-white">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="localhost:3000" className="nav-link text-white">
                        Pending Approvals
                      </a>
                    </li>
                    <li>
                      <a href="localhost:3000" className="nav-link text-white">
                        Create New Post
                      </a>
                    </li>
                    <li>
                      <a href="localhost:3000" className="nav-link text-white">
                        Profile
                      </a>
                    </li>
                    <li>
                      <button type="button" onClick={handleLogout} className="btn btn-light text-dark me-2">Logout</button>

                    </li>
                  </ul></>
                :
                <><a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">Welcome to My BLOG</a>
                  <div className="text-end">
                    
                    <a href="/login" style={{ textDecoration: "none", color: "white" }}><button type="button" className="btn btn-success text-white me-2">Login</button></a>
                    <a href="/signup" style={{ textDecoration: "none", color: "white" }}><button type="button" className="btn btn-primary text-white me-2">Sign-up</button></a>
                  </div></>}
          </div>
        </div>
      </div>

    </header>
      <div className="container">

        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            {menuData.map((data, index) => {
              const link = ('/category/' + data.category + '');
              return (
                
                <a className="p-2 link-dark" href={link} key={index} style={{textDecoration: 'none', fontWeight: 'bold'}}>{data.category}</a>
              )
            })}
          </nav>
        </div></div></>

  )
}

export default Header
