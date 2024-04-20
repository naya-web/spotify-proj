import React from 'react'
// import TopAlbums from '../filter top 100 album/filterToopalbum'
// import TopTracks from '../filterTop100Song/FilterTop100Song'

function Sorting({onOptionChange}) {
  const handleChange = (event) => {
    onOptionChange(event.target.value);
 };
  
  return (
    <>
    <div className="row mx-0 py-5 justify-content-between align-items-center">
        <div className="col-3 d-flex justify-content-center  ">
          <div>
            <p className='px-2  py-2 border '>All Songs</p>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-center ">
          <div>          
          <label htmlFor="song-select" className="me-2">Top 10 song:</label>
          <select name="" id="song-select" onChange={handleChange}>
            <option value="last 4 weeks">last 4 weeks</option>
            <option value="last 6 months">last 6 months</option>
            <option value="last year">last year</option>
            <option value="From beginning">From beginning</option>
          </select>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-center ">
          <div>          
            <label for="song-select" class="me-2">Top 10 Artist:</label>
              <select name="" id="song-select">
                  <option value="last 4 weeks">last 4 weeks</option>
                  <option value="last 6 months">last 6 months</option>
                  <option value="last year">last year</option>
                  <option value="From beginning">From beginning</option>
              </select>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-center ">
        <div>          
            <label for="song-select" class="me-2">Top 10 Album:</label>
              <select name="" id="song-select">
                  <option value="last 4 weeks">last 4 weeks</option>
                  <option value="last 6 months">last 6 months</option>
                  <option value="last year">last year</option>
                  <option value="From beginning">From beginning</option>
              </select>
          </div>
        </div>
    </div>
    </>
  )
}

export default Sorting