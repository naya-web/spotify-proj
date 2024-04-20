// to get  total time all songs that will be played

function GetTotalTimePlays({dataSpotify}) {
  let totalTimePlays = 0;
  dataSpotify.map((elm) => (totalTimePlays += elm.ms_played));
  return `GetTotalTimePlays : ${Math.trunc(totalTimePlays/1000)}`;
}
export default GetTotalTimePlays
