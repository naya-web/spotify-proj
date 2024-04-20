import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import SortingArtist from '../Components/SortingComponent/SortingArtist'
import Footer from '../Components/Footer/Footer'
import { Container } from 'react-bootstrap'

function MoreSongArtist() {
    
  return (
    <>
    <Container>        
        <NavBar path={'/artistHome'}/>
        <SortingArtist/>
        <Footer/>
    </Container>
    </>
  )
}

export default MoreSongArtist