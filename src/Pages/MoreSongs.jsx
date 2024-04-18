import React from 'react'
import Sorting from '../Components/SortingComponent/Sorting'
import SingleSong from '../Components/HomeContentComponents/SingleSong'
import Footer from '../Components/Footer/Footer'
import { Link } from 'react-router-dom';

function MoreSongs() {
    const songData=[
        {
        name: 'Song 1',
        description: 'Lorem, ipsum dolor.',
    },
        {
        name: 'Song 1',
        description: 'Lorem, ipsum dolor.',
    },
        {
        name: 'Song 1',
        description: 'Lorem, ipsum dolor.',
    },
        {
        name: 'Song 1',
        description: 'Lorem, ipsum dolor.',
    },
        {
        name: 'Song 1',
        description: 'Lorem, ipsum dolor.',
    },
        {
        name: 'Song 1',
        description: 'Lorem, ipsum dolor.',
    },
    {
        name: 'Song 1',
        description: 'Lorem, ipsum dolor.',
    },
    {
        name: 'Song 1',
        description: 'Lorem, ipsum dolor.',
    },
    {
        name: 'Song 1',
        description: 'Lorem, ipsum dolor.',
    },
]
  return (
    <>
    <div className="container">
        <Link to={'/'} style={{textDecoration:'none',color:'black'}}>Home</Link>
        <Sorting/>
        <div className="row mx-0 pb-5">
            {
                songData.map((e,i)=>{
                    return(
                        <>
                        <div className="col-4">
                            <SingleSong name={e.name} description={e.description}/>
                        </div>
                        </>
                    )
                })
            }
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default MoreSongs