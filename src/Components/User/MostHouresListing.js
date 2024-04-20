//get hours
function formatDateHours(dateString) {
  const date = new Date(dateString);
  // console.log(date);
  const hours = String(date.getUTCHours()).padStart(2, "0");
  //pad start to add 0 if the Hours
  return `${hours}`;
}
//MostHouresListing
//
function MostHouresListing({dataSpotify}) {
  const mostHouers = {};
  const arrForHouers = [];
  const arrForMs_played = [];
  dataSpotify.map((element) => arrForMs_played.push(element.ms_played));
  dataSpotify.map((element) => arrForHouers.push(formatDateHours(element.ts)));
  // console.log(arrForHouers);

  arrForHouers.forEach((hour, index) => {
    if (!mostHouers[hour]) {
      mostHouers[hour] = arrForMs_played[index];
    } else {
      mostHouers[hour] += arrForMs_played[index];
    }
  });
  // console.log(mostHouers);

  // Find the hour with the most ms_played
  let mostPlayedHour = 0;
  let maxMsPlayed = -1;
  Object.keys(mostHouers).forEach((hour) => {
    if (mostHouers[hour] > maxMsPlayed) {
      mostPlayedHour = hour;
      maxMsPlayed = mostHouers[hour];
    }
  });
  return ` the most our : ${mostPlayedHour}`;
}
export default MostHouresListing;
