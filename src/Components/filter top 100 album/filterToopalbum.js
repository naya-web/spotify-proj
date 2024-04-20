 import dataSpotify from '../../spotify_data.history.json'
 import SingleSong from '../HomeContentComponents/SingleSong';
 
  function TopAlbums() {
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
    const sortedAlbums = albums.sort((a, b) => b.msPlayed - a.msPlayed).slice(0, 10);
    
    return (
      <div>
        <h2>أعلى 10 ألبومات حسب وقت الاستماع</h2>
        {/* <ul> */}
          {sortedAlbums.map((album, index) => (
            // <li key={album.albumName}>
            //   {index + 1}. {album.albumName}
            // </li>
            <SingleSong name={album.albumName} description={album.master_metadata_track_name}/>
          ))}
        {/* </ul> */}
      </div>
    );
  }


  
  export default TopAlbums