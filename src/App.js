import './App.css';
import HomePage from './Pages/HomePage.jsx';
import UserInfo from './Pages/UserInfo.jsx';
import UserHome from './Pages/UserHome.jsx';
import MoreSongs from './Pages/MoreSongs.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from "react-router-dom";
import ArtistHome from './Pages/ArtistHome/ArtistHome.jsx';
import ArtistInfo from './Pages/ArtistInfo/ArtistInfo.jsx';
import MoreSongArtist from './Pages/MoreSongArtist.jsx';
import dataSpotify from './spotify_data.history.json'

function App() {
  

  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homeUser" element={<UserHome />} />
        <Route path="/userInfo" element={<UserInfo dataSpotify={dataSpotify}/>} />
        <Route path="/moreSongs" element={<MoreSongs />} />
        <Route path="/artistHome" element={<ArtistHome />} />
        <Route path="/artistInfo" element={<ArtistInfo />} />
        <Route path="/moreSongsArtist" element={<MoreSongArtist />} />

      </Routes>
    </>
  );
  
}

export default App;
