import React from 'react'

function Sorting() {
  return (
    <>
    <div className="row mx-0 py-5 justify-content-between ">
        <div className="col-4 d-flex justify-content-center ">
            <button className='px-2 w-50 py-2'>All Songs</button>
        </div>
        <div className="col-4 d-flex justify-content-center ">
        <button className='px-2 py-2 w-50'>Sort by hours</button>
        </div>
        <div className="col-4 d-flex justify-content-center ">
            <button className='px-2 py-2 w-50'>Sort by plays count</button>
        </div>
    </div>
    </>
  )
}

export default Sorting