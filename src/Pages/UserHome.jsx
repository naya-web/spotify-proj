import React from 'react'
import SideBar from '../Components/SideBar/SideBar'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import CarouselCardUser from '../Components/HomeContent/CarouselCardUser.jsx';
import dataSpotify from '../spotify_data.history.json';
import { Link } from 'react-router-dom'

function UserHome() {
  return (
    <>
    <div className="container">
      <div className='row mx-0 pt-4'>
        <div className="col-3">
          <SideBar path={'/userInfo'} info={'UserInfo'}/>
        </div>
        <div className="col-9">
          <NavBar path={'/'}/>
          <div className='text-end mt-3 fs-2'>
          </div>
          <CarouselCardUser data={dataSpotify}/>
        </div>
      </div>
      <div className='d-flex justify-content-end'>
            <Link to={'/moreSongsArtist'}>
                <button className='p-3 more'>Show More</button>
            </Link>
            <Link to={'/moreSongs'}>
                <button className='p-3 more'>more songs</button>
            </Link>
        </div>
      <Footer />
      </div>
    </>
  )
}

export default UserHome