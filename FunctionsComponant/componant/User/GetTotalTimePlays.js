// 3
// to get  total time all songs that will be played

function GetTotalTimePlays({dataSpotify}) {
  let totalTimePlays = 0;
  dataSpotify.map((elm) => (totalTimePlays += elm.ms_played));
  return totalTimePlays;
}
export default GetTotalTimePlays
