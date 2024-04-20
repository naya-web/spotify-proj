import dataSpotify from '../../../spotify_data.history.json'
import './style-toopartist.css'

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



    //   {sortedArtists.map(([artistName, plays], index) => (
    //     <li key={index}>
    //       <span>{artistName}</span> - <span>{plays}</span>
    //     </li>
    //   ))}
    // </ul> */}


    return (
      <div>
        <h2>أعلى 10 فنانين حسب إجمالي عدد المشاهدات</h2>
        
          <div className="container3">
          {sortedArtists.map(([artistName, plays], index) => (
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
export default Top100Artistsfrombegining