import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import NavBar from '../../Components/NavBar/NavBar'
import Content from '../../Components/HomeContent/Content'
import Footer from '../../Components/Footer/Footer'

function ArtistHome() {
  return (
    <>
    <div className="container">
      <div className='row mx-0 py-4'>
        <div className="col-3">
          <SideBar path={'/artistInfo'} info={'Artist Info'}/>
        </div>
        <div className="col-9">
          <NavBar path={'/'}/>
          <div className='text-end mt-3 fs-2'>
          </div>
          {/* <h1>Artist home content</h1> */}
            <Content path={'/moreSongsArtist'}/>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default ArtistHome