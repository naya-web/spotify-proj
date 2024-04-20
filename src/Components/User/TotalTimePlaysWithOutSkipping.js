export default function GetTotalTimePlaysWithOutSkipping({dataSpotify}) {
  let totalTimePlays = 0;
  dataSpotify
    .filter((elem) => elem.reason_end === "trackdone")
    .map((elm) => (totalTimePlays += elm.ms_played));
    return `TotalTimePlays Without Skipping  : ${Math.trunc(totalTimePlays/1000)}`;
}

