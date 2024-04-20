import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer';
import './HomePageStyle.css'
import bgimg from '../assets/bg.jpg'
function HomePage() {
  return (
    <>
    <div style={{backgroundImage:`url(${bgimg})`,backgroundSize:'cover',backgroundPosition:'center',height:'100vh'}}>
      <NavBar link1={'User'} link2={'Artist'} path={'/'}/>
      <div  className='main-home-content'>
        <p>Music Every Where</p>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default HomePage