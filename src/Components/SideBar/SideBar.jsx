import React from 'react'
import SideBarOptions from '../SideBarComponents/SideBarOptions'
import SearchBox from '../SideBarComponents/SearchBox'
import './SideBarStyle.css'

function SideBar() {
  return (
    <>
    <div className="side-bar">
      <div className='border-top'></div>
      <div className='border-left'></div>
      <div className='border-right'></div>
        <SearchBox/>
        <SideBarOptions/>
      {/* </div> */}
      <div className='border-bottom'></div>
    </div>
    </>
  )
}

export default SideBar