import React from 'react'
import './ContentStyle.css'
import SingleSong from '../HomeContentComponents/SingleSong'
import { Link } from 'react-router-dom'

function Content({path}) {
    // const songData=[
    //     {
    //         name:'Song 1',
    //         description: 'Lorem, ipsum dolor',
    //     },
    //     {
    //         name:'Song 2',
    //         description: 'Lorem, ipsum dolor',
    //     },
    //     {
    //         name:'Song 3',
    //         description: 'Lorem, ipsum dolor',
    //     }
    // ]
  return (
    <>
    {/* <div className="content">
        <h3>Popular Songs</h3>
        <div className='d-flex justify-content-end me-4 mt-4'>
            <Link to={path}>
                <button className='px-2 py-1'>Show More</button>
            </Link>
        </div>
        <div className='row mx-0 pb-5 pt-3 px-3'>
                {
                    songData.map((e,i)=>{
                        return(
                            <>
                            <div className='col-4'>
                                <SingleSong key={i} name={e.name} description={e.description}/>
                            </div>
                            </>
                        )
                    })
                }
        </div>
    </div> */}
    </>
  )
}

export default Content