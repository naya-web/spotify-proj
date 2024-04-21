function SortingArtist({ onFilterChange }) {
  const handleButtonClick = (period) => {
     onFilterChange(period);
  };
 
  return (
     <>
       <div className="row mx-0 py-5 justify-content-between align-items-center artist-btns" style={{ minHeight: "" }}>
         {/* <h1 className='text-center'>Top 20 song</h1> */}
         <div className="col-3 d-flex justify-content-center">
           <button className='btn btn-dark w-75  py-3 fs-5' onClick={() => handleButtonClick('last 4 weeks')}>Last 4 weeks</button>
         </div>
         <div className="col-3 d-flex justify-content-center">
           <button className='btn btn-dark w-75  py-3 fs-5' onClick={() => handleButtonClick('last 6 months')}>Last 6 months</button>
         </div>
         <div className="col-3 d-flex justify-content-center">
           <button className='btn btn-dark w-75  py-3 fs-5' onClick={() => handleButtonClick('last year')}>Last year</button>
         </div>
         <div className="col-3 d-flex justify-content-center">
           <button className='btn btn-dark w-75  py-3 fs-5' onClick={() => handleButtonClick('since the beginning')}>Last beginning</button>
         </div>
       </div>
     </>
  );
 }
 
 export default SortingArtist;
 