function getTotalPlays(dataSpotify) {
    return dataSpotify.length;
  }
function PresentageOfThePlays({dataSpotify,artistName})
{
    const newArr=dataSpotify.filter(element=>element.master_metadata_album_artist_name===artistName)
    return (newArr.length/getTotalPlays(dataSpotify))*100+'%'
}
export default PresentageOfThePlays