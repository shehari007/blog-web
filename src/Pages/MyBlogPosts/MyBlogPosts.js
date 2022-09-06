import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Banner from '..//..//Components/MainBanner/MainBanner'
import  secureLocalStorage  from  "react-secure-storage";
import CryptoJS from 'crypto-js'
const MyBlogPosts = () => {

    const Username = secureLocalStorage.getItem('UserDetail')
    if (Username) {
      
      var decryptedUserDetails = CryptoJS.AES.decrypt(Username, 'Secret Pharase');
      var username = decryptedUserDetails.toString(CryptoJS.enc.Utf8);
    }

  
  const [info, setInfo] = useState([]);
  console.log(info);

  useEffect(() => {

    const getUsers = async () => {
      const res = await axios(`http://localhost/myposts.php?username=${username}`);
      console.log(res.data);
      setInfo(res.data);
    };

    getUsers();
  }, []);
  
  const textStyle = {
    maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 4,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };
  return (
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <div className="row g-5">
        <div className="col-md-8">

          
        {info==='0 results[]'?<h1>no results found</h1>: 
          <>{info.map((data) => {
            const link = "/blogtitle/" + data.title
            return <>
              <article className="blog-post">
                <h2 className="blog-post-title mb-1">{data.title}</h2>
                <p className="blog-post-meta">January 1, 2021 by <a href={link}>{data.name}</a></p>
                <p style={textStyle}>{data.post}</p>
                <a href={link} >Continue reading</a> </article>
            </>
          })}</>
}
          <nav className="blog-pagination" aria-label="Pagination">
            <a className="btn btn-outline-primary rounded-pill" href="localhost:3000">Older</a>
            <a className="btn btn-outline-secondary rounded-pill disabled" href="http://localhost:3000">Newer</a>
          </nav>

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
                <li><a href="localhost:3000">March 2021</a></li>
                <li><a href="localhost:3000">February 2021</a></li>
                <li><a href="localhost:3000">January 2021</a></li>
                <li><a href="localhost:3000">December 2020</a></li>
                <li><a href="localhost:3000">November 2020</a></li>
                <li><a href="localhost:3000">October 2020</a></li>
                <li><a href="localhost:3000">September 2020</a></li>
                <li><a href="localhost:3000">August 2020</a></li>
                <li><a href="localhost:3000">July 2020</a></li>
                <li><a href="localhost:3000">June 2020</a></li>
                <li><a href="localhost:3000">May 2020</a></li>
                <li><a href="localhost:3000">April 2020</a></li>
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
      </div></div></main>
  )
}


export default MyBlogPosts
