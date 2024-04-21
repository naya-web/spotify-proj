import dataSpotify from '../../../spotify_data.history.json'
import { useEffect } from "react";

function TopAlbumslast1year() {
    useEffect(() => {
      // حساب التاريخ قبل السنه من الوقت الحالي
      const year = new Date();
      year.setFullYear(year.getFullYear() - 1);
  
    
      const albumTimes = {};
      dataSpotify.forEach((song) => {
        const ts = new Date(song.ts);
        if (ts >= year) {
          const album = song.master_metadata_album_album_name;
          const msPlayed = song.ms_played;
          if (album && album.trim() !== '' && !albumTimes[album]) {
            albumTimes[album] = msPlayed;
          }
        }
      });
  
    
      const sortedAlbums = Object.entries(albumTimes).sort((a, b) => b[1] - a[1]);
  
  
      const topAlbums = sortedAlbums
        .slice(0, 100)
        .map(([album, msPlayed]) => ({ album, msPlayed }));
  
     
      console.log(topAlbums);
    });
  
    return (
      <div>
            <h2>Toop 100 Album Last Year</h2>

        
       
      </div>
    );
  }
  // const O_TopAlbumslast1year=TopAlbumslast1year()
export default TopAlbumslast1year  