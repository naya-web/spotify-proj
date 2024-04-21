import React from "react";
import "./UserInfoContentStyle.css";
import PersonInfo from "../UserInfoContentComponents/PersonInfo/PersonInfo";
import PersonDetails from "../UserInfoContentComponents/PersonDetails/PersonDetails";
import img from '../Artists/photo_2024-04-21_10-22-31.jpg';

function UserInfoContent({
  PosTopArtist,
  MostSeasonListingForArtist,
  TotalDifSongForArtis,
  TotalPlaysArtis,
  TotalTimePlaysForArtis,
  PresentageOfThePlay,
}) {
  return (
    <>
      <div className="user-info">
        <h3>Artist Information</h3>
        <div className="person">
          <PersonInfo img={img} name={"Artist Info"} />
          <PersonDetails
            detail1={PosTopArtist}
            detail2={MostSeasonListingForArtist}
            detail3={TotalDifSongForArtis}
            detail4={TotalPlaysArtis}
            detail5={TotalTimePlaysForArtis}
            detail6={PresentageOfThePlay}
          />
        </div>
      </div>
    </>
  );
}

export default UserInfoContent;
