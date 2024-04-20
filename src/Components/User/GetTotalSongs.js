// to get  numbers og all songs with out repeat it
function GetTotalSongs({ dataSpotify }) {
  const numbersOfSongs = dataSpotify.map((elm) => {
    return elm.master_metadata_track_name;
  });
  return 'TotalSongs :'+ new Set(numbersOfSongs).size;
}
export default GetTotalSongs;
