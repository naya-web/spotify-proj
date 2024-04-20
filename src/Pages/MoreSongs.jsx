import React, { useState } from 'react'
import Sorting from '../Components/SortingComponent/Sorting'
// import SingleSong from '../Components/HomeContentComponents/SingleSong'
import Footer from '../Components/Footer/Footer'
// import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
// import bgimg1 from '../assets/bg.jpg'
import { Container } from 'react-bootstrap';
import Toop100songlast4week from '../Components/Top/TopSong/toop100songlast4week'
import Toop100songlast6week from '../Components/Top/TopSong/toop100songlast6month';
import Top100Songfrombegining from '../Components/Top/TopSong/Top100Songfrombegining';
import Toop100SongTablelastyear from '../Components/Top/TopSong/toop100SongTablelastyear';
import Toop100artistlast4week from '../Components/Top/TopArtist/toop100artistlast4week';
import Toop100artistlast6month from '../Components/Top/TopArtist/toop100artistlast6month';
import Toop100artistlast1year from '../Components/Top/TopArtist/toop100artistlast1year';
import Top100Artistsfrombegining from '../Components/Top/TopArtist/Top100Artistsfrombegining';
import TopAlbumslast4week from '../Components/Top/TopAlbum/TopAlbumslast4week';
import TopAlbumslast6month from '../Components/Top/TopAlbum/TopAlbumslast6month';
import TopAlbumslast1year from '../Components/Top/TopAlbum/TopAlbumslast1year';
import Top100Albumsfrombigning from '../Components/Top/TopAlbum/Top100Albumsfrombigning';

function MoreSongs() {

    const [filterOption, setFilterOption] = useState('last 4 weeks');

    const handleFilterChange = (option) => {
       setFilterOption(option);
    };
  return (
    <>
    <div>
        <Container>
            <NavBar path={'/homeUser'}/>
            {/* <Link to={'/homeUser'} style={{textDecoration:'none',color:'black'}}>Home</Link> */}
            {/* <Sorting/> */}
            <Sorting onOptionChange={handleFilterChange} />
        {filterOption === 'last 4 weeks' && <Toop100songlast4week />}
        {filterOption === 'last 6 months' && <Toop100songlast6week />}
        {filterOption === 'last year' && <Toop100SongTablelastyear />}
        {filterOption === 'From beginning' && <Top100Songfrombegining />}
        {filterOption === 'Artist last 4 weeks' && <Toop100artistlast4week />}
        {filterOption === 'Artist last 6 months' && <Toop100artistlast6month />}
        {filterOption === 'Artist last year' && <Toop100artistlast1year />}
        {filterOption === 'Artist From beginning' && <Top100Artistsfrombegining />}
        {filterOption === 'Album last 4 weeks' && <TopAlbumslast4week />}
        {filterOption === 'Album last 6 months' && <TopAlbumslast6month />}
        {filterOption === 'Album last year' && <TopAlbumslast1year />}
        {filterOption === 'Album From beginning' && <Top100Albumsfrombigning />}

        </Container>
    <Footer/>
    </div>
    </>
  )
}

export default MoreSongs