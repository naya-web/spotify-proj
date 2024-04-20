function TotalTimePlays({dataSpotify}) {
    let totalTimePlays = 0;
  dataSpotify.map((elm) => (totalTimePlays += elm.ms_played));
  return  `totalTimePlays : ${Math.trunc(totalTimePlays/1000)}`
}
export default TotalTimePlays