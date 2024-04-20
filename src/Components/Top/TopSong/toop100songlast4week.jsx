import dataSpotify from '../../../spotify_data.history.json'
const toop100songlast4week = () => {
  // حساب تاريخ الأربعة أسابيع الأخيرة
  const fourWeeksAgo = new Date();
  fourWeeksAgo.setDate(fourWeeksAgo.getDate() - 28);

  const topSongs = dataSpotify
    .filter((song, index, self) => {
      const isUnique = self.findIndex(s => s.master_metadata_track_name === song.master_metadata_track_name) === index;
      const isWithinLastFourWeeks = new Date(song.ts) >= fourWeeksAgo;
      return isUnique && isWithinLastFourWeeks;
    })
    .sort((a, b) => b.ms_played - a.ms_played)
    .slice(0, 100);
    console.log(topSongs)

  return (
    <div>
      <h2>أعلى 10 أغاني حسب وقت الاستماع في الأربعة أسابيع الأخيرة</h2>
      <table>
        <thead>
          <tr>
            <th>اسم الأغنية</th>
            <th>فنان الألبوم</th>
            <th>اسم الألبوم</th>
          </tr>
        </thead>
        <tbody>
          {topSongs.map((song, index) => (
            <tr key={index}>
              <td>{song.master_metadata_track_name}</td>
              <td>{song.master_metadata_album_artist_name}</td>
              <td>{song.master_metadata_album_album_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default toop100songlast4week