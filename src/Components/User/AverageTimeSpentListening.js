// get the correct date
function formatDate(dateString) {
  const date = new Date(dateString);
  // console.log(date);
  const year = date.getFullYear();
  //pad start to add 0 if the day or the month was one number
  //January (0) + 1 = 1
  //February (1) + 1 = 2
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// to  get Total Time Plays With Out Skipping
function getTotalTimePlaysWithOutSkipping(dataSpotify) {
  let totalTimePlays = 0;
  dataSpotify
    .filter((elem) => elem.reason_end === "trackdone")
    .map((elm) => (totalTimePlays += elm.ms_played));
  return totalTimePlays;
}

function AverageTimeSpentListening({ dataSpotify }) {
  // Extract and format the ts values
  const formattedDates = dataSpotify.map((entry) => formatDate(entry.ts));
  //remove the reppet data
  const uniqueDatesSet = new Set(formattedDates);
  //return it to array
  const formattedDatesSortedBySet = [...uniqueDatesSet];
  //sort from day 0 to last day  && month 1 to 12
  const newFormattedDatesSorted = formattedDatesSortedBySet.sort((a, b) => {
    return new Date(a) - new Date(b);
  });
  // console.log(newFormattedDatesSorted);
  //remove the reppet data
  // const uniqueDatesSet = new Set(formattedDatesSorted);
  // //return it to array
  // const formattedDatesSortedBySet = [...uniqueDatesSet];
  //get the avg
  // console.log(formattedDatesSortedBySet.length);
  const av = Math.trunc((getTotalTimePlaysWithOutSkipping(dataSpotify) /newFormattedDatesSorted.length)/1000)
  return (
      `AverageTimeSpentListening ${av}`
  );
}
export default AverageTimeSpentListening;
