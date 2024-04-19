// 3
function TotalTimePlays({dataSpotify}) {
    let totalTimePlays = 0;
  dataSpotify.map((elm) => (totalTimePlays += elm.ms_played));
  return <h2> totalTimePlays : {totalTimePlays}</h2>
}
export default TotalTimePlays

