import dataSpotify from '../../../spotify_data.history.json'
import { useEffect } from "react";


function TopAlbumslast4week() {
    useEffect(() => {
      // حساب التاريخ قبل اربع اسابيع من الوقت الحالي
      const fourweek = new Date();
      fourweek.setDate(fourweek.setDate() - 28);
  
    
      const albumTimes = {};
      dataSpotify.forEach((song) => {
        const ts = new Date(song.ts);
        if (ts >= fourweek) {
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
        <h2>أفضل 100 ألبوم مرتبة حسب وقت الاستماع في الاربع اسابيع الأخيرة</h2>
        {/* فيكي تعرضيهن بالطريقه يلي بدك */}
       
      </div>
    );
  }
  // const O_TopAlbumslast4week=TopAlbumslast4week()
  export default TopAlbumslast4week