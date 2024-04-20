import React from "react";
import SideBar from "../Components/SideBar/SideBar";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import UserInfoContent from "../Components/UserInfoContent/UserInfoContent";
import "../Pages/UserInfo.css";
import AverageTimeSpentListening from "../Components/User/AverageTimeSpentListening";
import GetTotalPlays from "../Components/User/GetTotalPlays";
import GetTotalSongs from "../Components/User/GetTotalSongs";
import GetTotalTimePlays from "../Components/User/GetTotalTimePlays";
import MostHouresListing from "../Components/User/MostHouresListing";
import MostSeasonOfTheYearTimeListing from "../Components/User/MostSeasonOfTheYearTimeListing";
import TotalTimePlays from "../Components/User/TotalTimePlays";
import TotalTimePlaysWithOutSkipping from "../Components/User/TotalTimePlaysWithOutSkipping"
function UserInfo({ dataSpotify }) {
  const Avg = <AverageTimeSpentListening dataSpotify={dataSpotify} />;
  const TotalPlays = <GetTotalPlays dataSpotify={dataSpotify} />;
  const TotalSongs = <GetTotalSongs dataSpotify={dataSpotify} />;
  const TotalTimeSpend = <GetTotalTimePlays dataSpotify={dataSpotify} />;
  const MostHour = <MostHouresListing dataSpotify={dataSpotify} />;
  const MostSeason = <MostSeasonOfTheYearTimeListing dataSpotify={dataSpotify} />
  const TTP = <TotalTimePlays dataSpotify={dataSpotify} />
  const TTPWK = <TotalTimePlaysWithOutSkipping  dataSpotify={dataSpotify} />
  
  return (
    <>
      <div className=" pt-5 ">
        <div className="row">
          <div className="col-3">
            <SideBar info={'User Info'} />
          </div>
          <div className="col-9">
            <NavBar path={"/homeUser"} />
            <UserInfoContent
              Avg={Avg}
              TotalPlays={TotalPlays}
              TotalSongs={TotalSongs}
              TotalTimeSpend={TotalTimeSpend}
              MostHour={MostHour}
              MostSeason={MostSeason}
              TTP={TTP}
              TTPWK={TTPWK}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserInfo;
