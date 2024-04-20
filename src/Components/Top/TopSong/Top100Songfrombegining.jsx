import dataSpotify from '../../../spotify_data.history.json'

function Top100Songfrombegining() {

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
  export default Top100Songfrombegining 