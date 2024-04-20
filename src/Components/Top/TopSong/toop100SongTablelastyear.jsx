import dataSpotify from '../../../spotify_data.history.json'

const Toop100SongTablelastyear = () => {
  // حساب تاريخ قبل سنة من الوقت الحالي
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  const topSongs = dataSpotify
    .filter((song, index, self) => {
      const isUnique = self.findIndex(s => s.master_metadata_track_name === song.master_metadata_track_name) === index;
      const isWithinLastYear = new Date(song.ts) >= oneYearAgo;
      return isUnique && isWithinLastYear;
    })
    .sort((a, b) => b.ms_played - a.ms_played)
    .slice(0, 100);

  return (
    <div>
      <h2>أعلى 10 أغاني حسب وقت الاستماع في السنة الأخيرة</h2>
      <table>
        <thead>
          <tr>
            <th>اسم الأغنية</th>
         
            <th>اسم الألبوم</th>
          </tr>
        </thead>
        <tbody>
          {topSongs.map((song, index) => (
            <tr key={index}>
              <td>{song.master_metadata_track_name}</td>

              <td>{song.master_metadata_album_album_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Toop100SongTablelastyear