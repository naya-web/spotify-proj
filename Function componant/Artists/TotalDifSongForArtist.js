function TotalDifSongForArtist({dataSpotify,artistName}){
const totalSongForArtist =dataSpotify.filter(element=>element.master_metadata_album_artist_name===artistName)
return new Set(totalSongForArtist).size
}
export default TotalDifSongForArtist
// const numbersOfSongs = dataSpotify.map((elm) => {
//     return elm.master_metadata_track_name;
//   });
//   return new Set(numbersOfSongs).size;