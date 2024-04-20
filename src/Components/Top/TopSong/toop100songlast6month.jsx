import dataSpotify from '../../../spotify_data.history.json'

const Toop100songlast6week = () => {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  
    const topSongs = dataSpotify
    .filter((song, index, self) => {
      const isUnique = self.findIndex(s => s.master_metadata_track_name === song.master_metadata_track_name) === index;
      const isWithinLastFourWeeks = new Date(song.ts) >= sixMonthsAgo;
      return isUnique && isWithinLastFourWeeks;
    })
    .sort((a, b) => b.ms_played - a.ms_played)
    .slice(0, 10);
    return (
      <div>
        <h2>أعلى 10 أغاني حسب وقت الاستماع في الستة الأشهر الأخيرة</h2>
        <table>
          <thead>
            <tr>
              <th>اسم الأغنية</th>
              <th> تاريخ الاغنيةة</th>
              <th>اسم الألبوم</th>
            </tr>
          </thead>
          <tbody>
            {topSongs.map((song, index) => (
              <tr key={index}>
                <td>{song.master_metadata_track_name}</td>
                <td>{song.ts}</td>
                <td>{song.master_metadata_album_album_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

export default Toop100songlast6week