import React from 'react'
import Annoncement from '../component/Annoncement'
import Categories from '../component/Categories'
import Navbar from '../component/Navbar'
import Slider from '../component/Slider'

import Products from '../component/Products'
import Newsletters from '../component/Newsletters'
import Footer from '../component/Footer'
const Home = () => {
  return (
    <>
      <Annoncement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletters/>
      <Footer/>
    </>
    
  )
}

export default Home