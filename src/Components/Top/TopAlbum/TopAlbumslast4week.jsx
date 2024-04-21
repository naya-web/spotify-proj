import dataSpotify from '../../../spotify_data.history.json'
import { useEffect } from "react";
import './style-toopalbum.css'


function TopAlbumslast4week() {
  const data = dataSpotify;

  // إنشاء كائن لتجميع بيانات الألبومات
  const albumMap = {};

  // حساب وقت الاستماع لكل ألبوم
  data.forEach((track) => {
    const albumName = track.master_metadata_album_album_name;
    const msPlayed = track.ms_played;

    if (!albumMap[albumName]) {
      albumMap[albumName] = 0;
    }

    albumMap[albumName] += msPlayed;
  });

  // تحويل الكائن إلى مصفوفة من الألبومات
  const albums = Object.keys(albumMap).map((albumName) => ({
    albumName,
    msPlayed: albumMap[albumName],
  }));

  // فرز الألبومات بناءً على وقت الاستماع
  const sortedAlbums = albums.sort((a, b) => b.msPlayed - a.msPlayed).slice(0, 100);

  return (
    <div>
      <h2>Toop 100 Album Last 4 week</h2>
      <ul>
        <div className="container4">
        {sortedAlbums.map((album, index) => (
          <li key={album.albumName}>
           
  
          </li>
        ))}
        </div>
      </ul>





      
    </div>
  );
  }
  // const O_TopAlbumslast4week=TopAlbumslast4week()
  export default TopAlbumslast4week