import React from "react";
import "./UserInfoContentStyle.css";
import PersonInfo from "../UserInfoContentComponents copy/PersonInfo/PersonInfo";
import PersonDetails from "../UserInfoContentComponents copy/PersonDetails/PersonDetails";
import img from "../User/photo_2024-04-21_10-22-39.jpg";

function UserInfoContent({
  Avg,
  TotalPlays,
  TotalSongs,
  TotalTimeSpend,
  MostHour,
  MostSeason,
  TTP,
  TTPWK,
}) {
  return (
    <>
      <div className="user-info">
        <h3>User Information</h3>
        <div className="person">
          <PersonInfo img={img} name={"User Name"} />
          <PersonDetails
            detail1={Avg}
            detail2={TotalPlays}
            detail3={TotalSongs}
            detail4={TotalTimeSpend}
            detail5={MostHour}
            detail6={TTP}
            detail7={TTPWK}
            detail8={MostSeason}
          />
        </div>
      </div>
    </>
  );
}

export default UserInfoContent;
