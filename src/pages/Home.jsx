import React from 'react'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
import Banner from '../component/banner/banner'
import RowList from '../component/Rows/rowList/RowList'

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <RowList/>
      <Footer/>
    </>
  )
}

export default Home