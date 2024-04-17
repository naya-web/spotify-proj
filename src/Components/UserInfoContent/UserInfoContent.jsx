import React from 'react'
import './UserInfoContentStyle.css'
import PersonInfo from '../UserInfoContentComponents/PersonInfo/PersonInfo'
import PersonDetails from '../UserInfoContentComponents/PersonDetails/PersonDetails'
import img from '../../assets/chat1.jfif'

function UserInfoContent() {
  return (
    <>
    <div className="user-info">
        <h3>User Information</h3>
        <div className="person">
            <PersonInfo img={img} name={'User Name'}/>
            <PersonDetails detail1={'First detail'} detail2={'Second detail'} detail3={'Third detail'} detail4={'Fourth detail'}/>
        </div>
    </div>
    </>
  )
}

export default UserInfoContent