import dataSpotify from '../../../spotify_data.history.json'
const Top100Artistsfrombegining = () => {
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
export default Top100Artistsfrombegining