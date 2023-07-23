import React from 'react'
import Article from './components/article/Article';
import Navbar from './components/navbar/Navbar';
import Header from './container/header/Header'
import Brand from './components/brand/Brand'
import CTA from './components/cta/CTA';
import Blog from './container/blog/Blog'
import Footer from './container/footer/Footer'
import Possibility from './container/possibility/Possibility'
import './App.css'



const App = () => {
  return (
 <div className="App">
  <div className="gradient-bg">
    <Navbar/>
  </div>
  <Header/>
  <Brand/>
  <Possibility/>
  <CTA/>
  <Blog/>
  <Footer/>
 </div>
  )
}

export default App