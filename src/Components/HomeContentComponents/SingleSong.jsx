import React from 'react'
import { FaPlay } from "react-icons/fa";
import './SingleSongStyle.css'

function SingleSong({name,description}) {
  return (
    <>
    <div className='song-info'>
        <h5>{name}</h5>
        <p>{description}</p>
        <button>
            <i><FaPlay /></i>
            Play
        </button>
    </div>
    </>
  )
}

export default SingleSong