// 6
function PosTopArtists({ dataSpotify, artistName }) {
    const TopArtists = (dataSpotify) => {
      // Create an object to aggregate the total number of plays for each artist
      const artists = {};
  
      // Aggregate the total number of plays for each artist
      dataSpotify.forEach((item) => {
        const name = item.master_metadata_album_artist_name;
        const plays = item.ms_played;
  
        if (artists.hasOwnProperty(name)) {
          artists[name] += plays;
        } else {
          artists[name] = plays;
        }
      });
  
      // Sort the artists by their total plays and select the top 10
      const sortedArtists = Object.entries(artists)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([artist, plays], index) => ({
          artist,
          plays,
          position: index + 1,
        }));
  
      return sortedArtists;
    };
  
    const the_TopArtists = TopArtists(dataSpotify);
  
    // Find the position of the specified artist
    const artistPosition = the_TopArtists.find((item) => item.artist === artistName)?.position;
  
    return artistPosition ? `The position of ${artistName} is ${artistPosition}` : `${artistName} is not in the top 10`;
  }
  
  export default PosTopArtists;