import React from 'react'
import './PersonDetailsStyle.css'

function PersonDetails({detail1,detail2,detail3,detail4,detail5,detail6,detail7,detail8}) {
  return (
    <>
    <div className="details">
        <div className="row mx-0">
            <div className="col-6 pb-3 ">
                <p className='detail'>{detail1}</p>
            </div>
            <div className='col-6 pb-3'>
                <p  className='detail'>{detail2}</p>
            </div>
            <div className='col-6 pb-3'>
                <p className='detail'>{detail3}</p>
            </div>
            <div className='col-6 pb-3'>
                <p className='detail'>{detail4}</p>
            </div>
            <div className='col-6 pb-3'>
                <p className='detail'>{detail5}</p>
            </div>
            <div className='col-6 pb-3'>
                <p className='detail'>{detail6}</p>
            </div>
            <div className='col-6 '>
                <p className='detail'>{detail7}</p>
            </div>
            <div className='col-6 '>
                <p className='detail'>{detail8}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default PersonDetails