import React from "react";
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";
import UserInfoContent from "../../Components/UserInfoContentArtis/UserInfoContent";
import Footer from "../../Components/Footer/Footer";
import MostSeasonLetingArtist from "../../Components/Artists/MostSeasonLetingArtist";
import PosTopArtists from "../../Components/Artists/PosTopArtists";
import PresentageOfThePlays from "../../Components/Artists/PresentageOfThePlays";
import TotalDifSongForArtist from "../../Components/Artists/TotalDifSongForArtist";
import TotalPlaysArtist from "../../Components/Artists/TotalPlaysArtist";
import TotalTimePlaysForArtist from "../../Components/Artists/TotalTimePlaysForArtist";
function ArtistInfo({ dataSpotify, artistName }) {
  const MostSeasonListingForArtist = (
    <MostSeasonLetingArtist dataSpotify={dataSpotify} artistName={artistName} />
  );
  const PosTopArtist = (
    <PosTopArtists dataSpotify={dataSpotify} artistName={artistName} />
  );
  const PresentageOfThePlay = (
    <PresentageOfThePlays dataSpotify={dataSpotify} artistName={artistName} />
  );
  const TotalDifSongForArtis = (
    <TotalDifSongForArtist dataSpotify={dataSpotify} artistName={artistName} />
  );
  const TotalPlaysArtis = (
    <TotalPlaysArtist dataSpotify={dataSpotify} artistName={artistName} />
  );
  const TotalTimePlaysForArtis = (
    <TotalTimePlaysForArtist
      dataSpotify={dataSpotify}
      artistName={artistName}
    />
  );
  console.log(TotalTimePlaysForArtis);
  return (
    <>
      <div className=" pt-5">
        <div className="row">
          <div className="col-3">
            <SideBar info={"Artist info"} />
          </div>
          <div className="col-9">
            <NavBar path={"/artistHome"} />
            <UserInfoContent
              MostSeasonListingForArtist={MostSeasonListingForArtist}
              PosTopArtist={PosTopArtist}
              TotalDifSongForArtis={TotalDifSongForArtis}
              TotalPlaysArtis={TotalPlaysArtis}
              TotalTimePlaysForArtis={TotalTimePlaysForArtis}
              PresentageOfThePlay={PresentageOfThePlay}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ArtistInfo;