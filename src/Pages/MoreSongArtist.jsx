import NavBar from '../Components/NavBar/NavBar'
import SortingArtist from '../Components/SortingComponent/SortingArtist'
import Footer from '../Components/Footer/Footer'
import { Container } from 'react-bootstrap'
// import { useEffect, useState } from 'react';
import Top20Songs from '../Components/Top/Top20/Top20Songs';
import { useEffect, useState } from 'react';
// import data from '../spotify_data.history.json'


function MoreSongArtist() {
  const [since, setSince] = useState('last year'); // Default period
  const [topSongs, setTopSongs] = useState([]);
 
  useEffect(() => {
     const artist = 'Your Artist Name'; // The artist name
     const filtered = Top20Songs(artist, since);
     setTopSongs(filtered);
  }, [since]);
 
  const handleFilterChange = (selectedPeriod) => {
     setSince(selectedPeriod);
  };
  return (
    <>
    <Container className='text-light'>        
        <NavBar path={'/artistHome'}/>
        <SortingArtist onFilterChange={handleFilterChange} />
        <h2>Top 20 Songs for {since}</h2>
        <div>
          {topSongs.map((songName, index) => (
            <div key={index}>
              <p>{songName}</p>
            </div>
          ))}
        </div>
        <Footer/>
    </Container>
    </>
  )
}

export default MoreSongArtist