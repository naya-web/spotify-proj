import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import NavBar from '../../Components/NavBar/NavBar'
import UserInfoContent from '../../Components/UserInfoContent/UserInfoContent'
import Footer from '../../Components/Footer/Footer'

function ArtistInfo() {
  return (
    <>
        <div className=" pt-5">
        <div className="row">
            <div className="col-3">
                <SideBar info={'Artist info'}/>
            </div>
            <div className="col-9">
                <NavBar path={'/artistHome'}/>
                <UserInfoContent/>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default ArtistInfo