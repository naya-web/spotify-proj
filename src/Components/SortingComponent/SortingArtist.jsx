import React from 'react'

function SortingArtist() {
    
  return (
    <>
    <div className="row mx-0 py-5 justify-content-between align-items-center"  style={{minHeight:"60vh"}}>
        <h1 className='text-center'>Top 20 song</h1>
        {/* <div className="col-3 d-flex justify-content-center  ">
          <div>
            <p className='px-2  py-2 border '>All Songs</p>
          </div>
        </div> */}
        <div className="d-flex justify-content-center ">
          {/* <div className='d-flex'>           */}
          <label htmlFor="song-select" className="me-2">Select the period:</label>
          <select name="" id="song-select">
            <option value="last 4 weeks">last 4 weeks</option>
            <option value="last 6 months">last 6 months</option>
            <option value="last year">last year</option>
            <option value="From beginning">From beginning</option>
          </select>
          {/* </div> */}
        </div>
        
        
    </div>
    </>
  )
}

export default SortingArtist