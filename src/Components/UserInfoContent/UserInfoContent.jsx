import React from 'react'
import './UserInfoContentStyle.css'
import PersonInfo from '../UserInfoContentComponents/PersonInfo/PersonInfo'
import PersonDetails from '../UserInfoContentComponents/PersonDetails/PersonDetails'
import img from '../../assets/chat1.jfif'

function UserInfoContent({Avg,TotalPlays,TotalSongs,TotalTimeSpend,MostHour,MostSeason,TTP,TTPWK}) {
  return (
    <>
    <div className="user-info">
        <h3>User Information</h3>
        <div className="person">
            <PersonInfo img={img} name={'User Name'}/>
            <PersonDetails detail1={Avg} detail2={TotalPlays} detail3={TotalSongs} detail4={TotalTimeSpend} detail5={MostHour}  detail6={TTP}  detail7={TTPWK} detail8={MostSeason}/>
        </div>
    </div>
    </>
  )
}

export default UserInfoContent