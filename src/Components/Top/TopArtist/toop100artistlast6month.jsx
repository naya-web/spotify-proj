import dataSpotify from '../../../spotify_data.history.json'

const Toop100artistlast6month = () => {
    // حساب تاريخ قبل ستة أشهر من الوقت الحالي
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  
    // حساب إجمالي عدد المرات التي تم تشغيل أغاني الفنانين
    const artistPlays = dataSpotify.reduce((accumulator, song) => {
      const { master_metadata_album_artist_name, ms_played, ts } = song;
      const songDate = new Date(ts);
  
      if (
        songDate >= sixMonthsAgo &&
        !accumulator.artists.includes(master_metadata_album_artist_name)
      ) {
        accumulator.artists.push(master_metadata_album_artist_name);
        accumulator.plays[master_metadata_album_artist_name] = ms_played;
      } else if (
        songDate >= sixMonthsAgo &&
        accumulator.artists.includes(master_metadata_album_artist_name)
      ) {
        accumulator.plays[master_metadata_album_artist_name] += ms_played;
      }
  
      return accumulator;
    }, { artists: [], plays: {} });
  
    // تحويل النتائج إلى مصفوفة قابلة للفرز
    const topArtists = Object.entries(artistPlays.plays)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 100);
  
    return (
      <div>
        <h2>أعلى 10 فنانين حسب إجمالي عدد المرات التي تم تشغيل أغانيهم في الأشهر الستة الاخيره</h2>
        <table>
          <thead>
            <tr>
              <th>اسم الفنان</th>
              <th>إجمالي عدد المرات التي تم تشغيل أغانيه</th>
            </tr>
          </thead>
          <tbody>
            {topArtists.map(([artist, plays], index) => (
              <tr key={index}>
                <td>{artist}</td>
                <td>{plays}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  // const  O_toop100artistlast6month=toop100artistlast6month()

  export default Toop100artistlast6month