import dataSpotify from '../../../spotify_data.history.json'
import './style-toopartist.css'


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
             <h2>Toop 100 Artist Last 6 Month </h2>

        
        <div className="container3">
          {topArtists.map(([artistName, plays], index) => (
            <div class="card-client" key={index}>
            <div class="user-picture">
                <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
                </svg>
            </div>
            <p class="name-client">{artistName}
                <span>plays:{plays}
                </span>
            </p>
            <div class="social-media">
            
            </div>
        </div>
        
           
          ))}
          </div>
      </div>
    );
  };
  // const  O_toop100artistlast6month=toop100artistlast6month()

  export default Toop100artistlast6month