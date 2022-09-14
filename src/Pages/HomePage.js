import React from 'react'
import Cards from '..//Components/MainCards/MainCards'
import MainModule from '..//Components/MainModule/MainModule'
import Banner from '../Components/MainBanner/MainBanner'
import { Helmet } from 'react-helmet'
const HomePage = () => {
  return (
    <div className="container">
      <Helmet><title>HomePage - MyBlog.com</title></Helmet>
      <Banner />
      <Cards/>
      <MainModule/>
    </div>
  )
}

export default HomePage
