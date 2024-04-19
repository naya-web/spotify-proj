import React from 'react'
import './NavBarStyle.css'
import { Container } from 'react-bootstrap'
import logo from '../../assets/logo-removebg-preview.png'
import { Link } from 'react-router-dom'

function NavBar({link1,link2,path}) {
  // const navBarData=['User','Artist']
  return (
    <>
    {/* <div className='col-9 '> */}
        <Container>
      <nav class="navbar navbar-expand-md ">
          <Link to={path} class="navbar-brand d-flex align-items-center " href="#">
            <img src={logo}  alt="" />
            <h1>Spotify</h1>
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
            <li class="nav-item" >
              <Link to={'homeUser'}>{link1}</Link>
            </li>
            <li class="nav-item" >
              <Link to={''}>{link2}</Link>
            </li>
            </ul>
          </div>
      </nav>
        </Container>
    {/* </div> */}
    </>
  )
}

export default NavBar