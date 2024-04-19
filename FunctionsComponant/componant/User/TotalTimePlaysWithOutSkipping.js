
// with 4
export default function GetTotalTimePlaysWithOutSkipping({dataSpotify}) {
  let totalTimePlays = 0;
  dataSpotify
    .filter((elem) => elem.reason_end === "trackdone")
    .map((elm) => (totalTimePlays += elm.ms_played));
    return (<h2>TotalTimePlays  : {totalTimePlays}</h2>);
}

