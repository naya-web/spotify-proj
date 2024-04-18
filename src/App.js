import './App.css';
import HomePage from './Pages/HomePage.jsx';
import UserInfo from './Pages/UserInfo.jsx';
import MoreSongs from './Pages/MoreSongs.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';


function App() {
  return (
    <>
      <h1>hi im ahmad</h1>
      <h2>hi</h2>

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
