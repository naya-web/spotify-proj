// 3
function TotalTimePlaysForArtist({dataSpotify,artistName}) {
    let totalTimePlays = 0;
    const newArr=dataSpotify.filter(element=>element.master_metadata_album_artist_name===artistName)
    newArr.map((elm) => (totalTimePlays += elm.ms_played));
    return totalTimePlays;
}
export default TotalTimePlaysForArtist