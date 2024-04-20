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
            <div className="row mx-0 pb-5">
                {/* {
                    songData.map((e,i)=>{
                        return(
                            <>
                            <div className="col-4">
                                <SingleSong name={e.name} description={e.description}/>
                            </div>
                            </>
                        )
                    })
                } */}
        </div>
        </Container>
    <Footer/>
    </div>
    </>
  )
}

export default MoreSongs