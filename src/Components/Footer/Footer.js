import React from 'react'

const Footer = () => {
  return (
    <footer className="blog-footer">
      <p>MyBlog.com Internship Project by Muhammad Sheharyar Butt 2022.</p>
      <p>{process.env.REACT_APP_PROJECT_STAGE}-Stage<br/>{process.env.REACT_APP_AXIOS_API_PHP}</p>
      <p>
        <a href="/home">Go to Home</a>
        
      </p>
    </footer>
  )
}

export default Footer
