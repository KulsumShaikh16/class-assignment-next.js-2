import React from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import hero from './page.module.css'
// import { url } from 'node:inspector/promises'

const Home = () => {
  return (
    <div>
    <Header /> 
    <div className={hero.container}>
      
   
      <h1 className={hero.heading}>Digital Marketing Services</h1>
      
      <p className={hero.para}>Digital marketing makes up the foundation of modern marketing success for small and big businesses.<br/> If you need to bring the maximum traction for your website and social media handles, you need the<br/> expertise of digital marketing strategists.</p>
      <button className={hero.button}>lets talk</button>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Home
