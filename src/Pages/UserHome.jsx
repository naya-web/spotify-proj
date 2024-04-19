import React from 'react'
import SideBar from '../Components/SideBar/SideBar'
import NavBar from '../Components/NavBar/NavBar'
import Content from '../Components/HomeContent/Content'
import Footer from '../Components/Footer/Footer'

function UserHome() {
  return (
    <>
    <div className="container">
      <div className='row mx-0 py-4'>
        <div className="col-3">
          <SideBar/>
        </div>
        <div className="col-9">
          <NavBar/>
          <div className='text-end mt-3 fs-2'>
            {/* <GrCaretPrevious />
            <GrCaretNext /> */}
          </div>
            <Content/>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default UserHome