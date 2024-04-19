// 1
function TotalPlaysArtist({dataSpotify,artistName}) {
    const totalPlaysArtist = dataSpotify.filter(element=>element.master_metadata_album_artist_name===artistName)

    return totalPlaysArtist.length
}
export default TotalPlaysArtist

// const numbersOfSongs = dataSpotify.map((elm) => {
//     return elm.master_metadata_track_name;
//   });
//   return new Set(numbersOfSongs).size;