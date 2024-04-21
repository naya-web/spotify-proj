// 7
function formatDateMonth(dateString) {
  const date = new Date(dateString);
  // console.log(date);
  const Month = String(date.getMonth()).padStart(2, "0");
  //pad start to add 0 if the Hours
  return `${Month}`;
}
function MostSeasonLetingArtist({ dataSpotify, artistName }) {
  const seasons = {
    winter: 0,
    spring: 0,
    summer: 0,
    fall: 0,
  };

  const newArr = dataSpotify.filter(
    (song) => song.master_metadata_album_artist_name === artistName
  );

  newArr.map((song) => {
    //check for month
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
  let maxSeason = -1;
  let seasonName = '';
  for (const season in seasons) {
    if (seasons[season] > maxSeason)
     maxSeason = seasons[season];
    seasonName = season;
  }
  const timeInSeconds = maxSeason / 1000;
  return ` season : ${seasonName} Time : ${timeInSeconds} `
}
export default MostSeasonLetingArtist;

