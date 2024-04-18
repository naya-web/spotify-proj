//get month
function formatDateMonth(dateString) {
  const date = new Date(dateString);
  // console.log(date);
  const Month = String(date.getMonth()).padStart(2, "0");
  //pad start to add 0 if the Hours
  return `${Month}`;
}
function MosTSeasonOfTheYearTimeListing({dataSpotify}) {
  // const seasonOfTheYear = dataSpotify.map(element=> formatDateMonth(element.ts))
  // const mosySeason ={}
  const arrForMs_played = [];
  //get arr For ؤMs_played
  dataSpotify.map((element) => arrForMs_played.push(element.ms_played));
  //
  const seasons = {
    winter: "0",
    spring: "0",
    summer: "0",
    fall: "0",
  };
  dataSpotify.map((song) => {
    if (
      formatDateMonth(song.ts) === "1" ||
      formatDateMonth(song.ts) === "2" ||
      formatDateMonth(song.ts) === "3"
    )
      seasons.winter += song.ms_played;
    else if (
      formatDateMonth(song.ts) === "4" ||
      formatDateMonth(song.ts) === "5" ||
      formatDateMonth(song.ts) === "6"
    )
      seasons.spring += song.ms_played;
    else if (
      formatDateMonth(song.ts) === "7" ||
      formatDateMonth(song.ts) === "8" ||
      formatDateMonth(song.ts) === "9"
    )
      seasons.summer += song.ms_played;
    else if (
      formatDateMonth(song.ts) === "10" ||
      formatDateMonth(song.ts) === "11" ||
      formatDateMonth(song.ts) === "12"
    )
      seasons.fall += song.ms_played;
    return 0;
  });
  //   seasonOfTheYear.forEach((element)=>{
  //     if(!mosySeason[element])
  //    {
  //      mosySeason[element]=arrForMs_played[element]
  //     }
  //   else
  //   {
  //     mosySeason[element]+=arrForMs_played[element]
  //   }
  // })
  let maxSeason = -1;
  let seasonName = 0;
  for (const season in seasons) {
    if (seasons[season] > maxSeason) maxSeason = seasons[season];
    seasonName = season;
  }
  return <h2>`${seasonName} `;</h2>
}
export default MosTSeasonOfTheYearTimeListing
