import React from 'react'
import SideBar from '../Components/SideBar/SideBar'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import UserInfoContent from '../Components/UserInfoContent/UserInfoContent'

function UserInfo() {
  return (
    <>
    <div className="container pt-4">
        <div className="row">
            <div className="col-3">
                <SideBar/>
            </div>
            <div className="col-9">
                <NavBar path={'/homeUser'}/>
                <UserInfoContent/>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default UserInfo