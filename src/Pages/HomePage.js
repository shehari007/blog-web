import React from 'react'
import Cards from '..//Components/MainCards/MainCards'
import MainModule from '..//Components/MainModule/MainModule'
import Banner from '../Components/MainBanner/MainBanner'
const HomePage = () => {
  return (
    <div className="container">
      <Banner />
      <Cards/>
      <MainModule/>
    </div>
  )
}

export default HomePage
