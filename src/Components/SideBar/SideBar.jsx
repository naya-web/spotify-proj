import React from 'react'
import SideBarOptions from '../SideBarComponents/SideBarOptions'
import SearchBox from '../SideBarComponents/SearchBox'
// import './SideBarStyle.css'

function SideBar({path,info}) {
  return (
    <>
    <div className="side-bar">

        <SearchBox/>
        <SideBarOptions path={path} info={info}/>
      {/* </div> */}
    </div>
    </>
  )
}

export default SideBar