import React from 'react'
import { useState, useEffect} from 'react';
import axios from 'axios';
import parse from 'html-react-parser'
const MainModule = () => {

  const [info, setInfo] = useState([]);
  console.log(info);

  useEffect(() => {

    const getUsers = async () => {
      const res = await axios(`http://localhost/homepage.php`);
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
    <div className="row g-5">
    <div className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
        From the Firehose!
      </h3>
      {info === '0 results[]' ? <h1>No Posts Found!</h1> : <>
            {info.map((data) => {
              const profilePosts = "/userposts/"+ data.name
              const link = "/blogtitle/" + data.title
              return <>
                <article className="blog-post">
                  <h2 className="blog-post-title mb-1">{data.title}</h2>
                  <p className="blog-post-meta">January 1, 2021 by <a href={profilePosts}>{data.name}</a></p>
                  <p style={textStyle}>{parse(data.post)}</p>
                  <a href={link} >Continue reading</a> </article>
              </>
            })}

            <nav className="blog-pagination" aria-label="Pagination">
              <a className="btn btn-outline-primary rounded-pill" href="localhost:3000">Older</a>
              <a className="btn btn-outline-secondary rounded-pill disabled" href="http://localhost:3000">Newer</a>
            </nav></>
          }

    </div>
    <div className="col-md-4">
      <div className="position-sticky" style={{top: '2rem'}}>
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
  </div>
  )
}

export default MainModule
