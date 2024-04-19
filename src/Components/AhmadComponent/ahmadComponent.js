
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






// ------------------------------------toop 100 artist in last 6 month
const toop100artistlast6month = () => {
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
const  O_toop100artistlast6month=toop100artistlast6month()
// -----------------------------------toop 100 artist last 4 week 
const toop100artistlast4week = () => {
const fourweek = new Date();
fourweek.setDate(fourweek.getDate() - 28);

// حساب إجمالي عدد المرات التي تم تشغيل أغاني الفنانين
const artistPlays = dataSpotify.reduce((accumulator, song) => {
  const { master_metadata_album_artist_name, ms_played, ts } = song;
  const songDate = new Date(ts);

  if (
    songDate >= fourweek &&
    !accumulator.artists.includes(master_metadata_album_artist_name)
  ) {
    accumulator.artists.push(master_metadata_album_artist_name);
    accumulator.plays[master_metadata_album_artist_name] = ms_played;
  } else if (
    songDate >= fourweek &&
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
    <h2>أعلى 10 فنانين حسب إجمالي عدد المرات التي تم تشغيل أغانيهم في الاسابيع الاربعة  الاخيره</h2>
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
const  O_toop100artistlast4week=toop100artistlast4week()


// --------------------------------------------toop 100 artist in last 1 year
const toop100artistlast1year = () => {
  const year = new Date();
  year.setFullYear(year.getFullYear() - 1);
  
  // حساب إجمالي عدد المرات التي تم تشغيل أغاني الفنانين
  const artistPlays = dataSpotify.reduce((accumulator, song) => {
    const { master_metadata_album_artist_name, ms_played, ts } = song;
    const songDate = new Date(ts);
  
    if (
      songDate >= year &&
      !accumulator.artists.includes(master_metadata_album_artist_name)
    ) {
      accumulator.artists.push(master_metadata_album_artist_name);
      accumulator.plays[master_metadata_album_artist_name] = ms_played;
    } else if (
      songDate >= year &&
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
      <h2>أعلى 10 فنانين حسب إجمالي عدد المرات التي تم تشغيل أغانيهم في الاسابيع الاربعة  الاخيره</h2>
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
  const  O_toop100artistlast1year=toop100artistlast1year()
  
  
// -------------------------------toop 100 albums in last 4 week-----------


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
const O_TopAlbumslast4week=TopAlbumslast4week()



// -----------------------------------toop albums last 6 month


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
const O_TopAlbumslast6month=TopAlbumslast6month()

// ------------------------toop albums last 1 year



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
      <h2>أفضل 100 ألبوم مرتبة حسب وقت الاستماع في السنه الأخيرة</h2>
      {/* فيكي تعرضيهن بالطريقه يلي بدك */}
     
    </div>
  );
}
const O_TopAlbumslast1year=TopAlbumslast1year()
