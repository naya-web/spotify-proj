
  // --------1exrcise----- top 10artist

  const TopArtists = () => {
    // إنشاء كائن لتجميع إجمالي عدد المشاهدات لكل فنان
    const artists = [];

    // تجميع إجمالي عدد المشاهدات لكل فنان
    dataSpotify.forEach((item) => {
      const artistName = item.master_metadata_album_artist_name;
      const plays = item.ms_played;

      if (artists.hasOwnProperty(artistName)) {
        artists[artistName] += plays;
      } else {
        artists[artistName] = plays;
      }
    });


    const sortedArtists = Object.entries(artists)
      .sort((a, b) => b - a)
      .slice(0, 100)






    return (
      <div>
        <h2>أعلى 10 فنانين حسب إجمالي عدد المشاهدات</h2>
        <ul>
          {sortedArtists.map(([artistName, plays], index) => (
            <li key={index}>
              <span>{artistName}</span> - <span>{plays}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const the_TopArtists = TopArtists()

  // --------------exrcise 2 top 100 track----------
  function TopTracks() {

    // فرز الأغاني بناءً على وقت الاستماع
    const sortedTracks = dataSpotify.sort((a, b) => b.ms_played - a.ms_played).slice(0, 11)
    console.log(sortedTracks)

   

    return (
      <div>
        <h2>أعلى 10 أغاني حسب وقت الاستماع</h2>
        <ul>
          {sortedTracks.map((track) => (
            <li key={track._id.$oid}>
              <h3>episode_show_name :</h3>{track.episode_show_name} - <h3>ms_played :</h3>{track.ms_played}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  const O_TopTracks = TopTracks()


  // ----------------------------------------- exrcisse 3 top 10 albums

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
    const sortedAlbums = albums.sort((a, b) => b.msPlayed - a.msPlayed).slice(0, 100);
    
    return (
      <div>
        <h2>أعلى 10 ألبومات حسب وقت الاستماع</h2>
        <ul>
          {sortedAlbums.map((album, index) => (
            <li key={album.albumName}>
              {index + 1}. {album.albumName}

            </li>
          ))}
        </ul>
      </div>
    );
  }
  const O_TopAlbums = TopAlbums()
  // ----------------------------last6month top100song

  const Toop100songlast4week = () => {
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
  

  const toop100songlast6month=Toop100songlast4week()
// ------------------------toop100 song last 4 week 



const SongTable = () => {
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

  const SongTable2last4week=SongTable()

// ---------------------------top 100 song last 1 year 


const SongTablelastyear = () => {
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
const O_SongTablelastyear=SongTablelastyear()
// ------------------------------------

// dont forget do export all component ok ??