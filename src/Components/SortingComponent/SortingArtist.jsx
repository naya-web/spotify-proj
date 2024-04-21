function SortingArtist({ onFilterChange }) {
  const handleButtonClick = (period) => {
     onFilterChange(period);
  };
 
  return (
     <>
       <div className="row mx-0 py-5 justify-content-between align-items-center text-light" style={{ minHeight: "70vh" }}>
         <h1 className='text-center'>Top 20 song</h1>
         <div className="col-3 d-flex justify-content-center">
           <button className='px-3 py-2' onClick={() => handleButtonClick('last 4 weeks')}>last 4 weeks</button>
         </div>
         <div className="col-3 d-flex justify-content-center">
           <button className='px-3 py-2' onClick={() => handleButtonClick('last 6 months')}>last 6 months</button>
         </div>
         <div className="col-3 d-flex justify-content-center">
           <button className='px-3 py-2' onClick={() => handleButtonClick('last year')}>last year</button>
         </div>
         <div className="col-3 d-flex justify-content-center">
           <button className='px-3 py-2' onClick={() => handleButtonClick('since the beginning')}>last beginning</button>
         </div>
       </div>
     </>
  );
 }
 
 export default SortingArtist;
 