import React from 'react'
import NavBar from '../Components/AllComponents/NavBar/NavBar'
import SideBar from '../Components/SideBar/SideBar'
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";
import Content from '../Components/Content/Content';
import Footer from '../Components/Footer/Footer';

function HomePage() {
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
            <GrCaretPrevious />
            <GrCaretNext />
          </div>
            <Content/>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default HomePage