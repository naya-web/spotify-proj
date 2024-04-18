import './App.css';
import HomePage from './Pages/HomePage.jsx';
import UserInfo from './Pages/UserInfo.jsx';
import MoreSongs from './Pages/MoreSongs.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from "react-router-dom";
import dataSpotify from "./spotify_data.history.json"
import ReactDOM from 'react-dom';
import TopAlbums from './Components/filter top 100 album/filterToopalbum.js';


function App() {
  // -----------------------
  
  const O_TopAlbums = TopAlbums()

  // ----------------------
  return (
    <>
      <h1>hi im ahmad</h1>
      <h2>hi</h2>
      <div>{O_TopAlbums}</div>

    {/* <HomePage/> */}
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userInfo" element={<UserInfo />} />
        <Route path="/moreSongs" element={<MoreSongs />} />
        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
  
}

export default App;
