import React from 'react'
import './SideBarOptionsStyle.css'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

function SideBarOptions({path,info}) {
  return (
    <>
    <div className='options'>
        <ul>
          <li>
            <i><FaHome /></i>
            <Link to="/">Home</Link>
          </li>
          <li>
            <i><FaUser /></i>
            <Link to={path}>{info}</Link>
          </li>
        </ul>
    </div>
    </>
  )
}

export default SideBarOptions