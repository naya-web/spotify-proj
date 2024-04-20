import dataSpotify from '../../../spotify_data.history.json'
import { useEffect } from "react";

function TopAlbumslast6month() {
    useEffect(() => {
      // حساب التاريخ قبل ستة أشهر من الوقت الحالي
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  
    
      const albumTimes = {};
      dataSpotify.forEach((song) => {
        const ts = new Date(song.ts);
        if (ts >= sixMonthsAgo) {
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
        <h2>أفضل 100 ألبوم مرتبة حسب وقت الاستماع في الستة أشهر الأخيرة</h2>
        {/* فيكي تعرضيهن بالطريقه يلي بدك */}
       
      </div>
    );
  }
  // const O_TopAlbumslast6month=TopAlbumslast6month()
export default TopAlbumslast6month 