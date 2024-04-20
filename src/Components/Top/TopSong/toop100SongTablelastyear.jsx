import dataSpotify from '../../../spotify_data.history.json'
import './style.css'


const Toop100SongTablelastyear = () => {
  // حساب تاريخ قبل سنة من الوقت الحالي
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  const topSongs = dataSpotify
    .filter((song, index, self) => {
      const isUnique = self.findIndex(s => s.master_metadata_track_name === song.master_metadata_track_name) === index;
      const isWithinLastYear = new Date(song.ts) >= oneYearAgo;
      return isUnique && isWithinLastYear;
    })
    .sort((a, b) => b.ms_played - a.ms_played)
    .slice(0, 100);

  return (
    <div>
      <h2>أعلى 10 أغاني حسب وقت الاستماع في السنة الأخيرة</h2>
      {/* <table>
        <thead>
          <tr>
            <th>اسم الأغنية</th>
         
            <th>اسم الألبوم</th>
          </tr>
        </thead>
        <tbody>
          {topSongs.map((song, index) => (
            <tr key={index}>
              <td>{song.master_metadata_track_name}</td>

              <td>{song.master_metadata_album_album_name}</td>
            </tr>
          ))}
        </tbody>
      </table> */}

      {/* ---------------------- */}

      <div className="containerr" >
{topSongs.map((song,index)=>(


<div class="card" key={index} >
  <div class="top">
  <div class="pfp">
    <div class="playing">
      <div class="greenline line-1"></div>
      <div class="greenline line-2"></div>
      <div class="greenline line-3"></div>
      <div class="greenline line-4"></div>
      <div class="greenline line-5"></div>
    </div>
  </div>
  <div class="texts">
  <p class="title-1">{song.master_metadata_track_name}</p>
  <p class="title-2">{song.master_metadata_album_album_name}</p>
  </div>
  </div>
  
  <div class="controls">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="24" class="volume_button">
  <path clip-rule="evenodd" d="M11.26 3.691A1.2 1.2 0 0 1 12 4.8v14.4a1.199 1.199 0 0 1-2.048.848L5.503 15.6H2.4a1.2 1.2 0 0 1-1.2-1.2V9.6a1.2 1.2 0 0 1 1.2-1.2h3.103l4.449-4.448a1.2 1.2 0 0 1 1.308-.26Zm6.328-.176a1.2 1.2 0 0 1 1.697 0A11.967 11.967 0 0 1 22.8 12a11.966 11.966 0 0 1-3.515 8.485 1.2 1.2 0 0 1-1.697-1.697A9.563 9.563 0 0 0 20.4 12a9.565 9.565 0 0 0-2.812-6.788 1.2 1.2 0 0 1 0-1.697Zm-3.394 3.393a1.2 1.2 0 0 1 1.698 0A7.178 7.178 0 0 1 18 12a7.18 7.18 0 0 1-2.108 5.092 1.2 1.2 0 1 1-1.698-1.698A4.782 4.782 0 0 0 15.6 12a4.78 4.78 0 0 0-1.406-3.394 1.2 1.2 0 0 1 0-1.698Z" fill-rule="evenodd"></path>
    </svg>
    <div class="volume">
      <div class="slider">
        <div class="green"></div>
      </div>
      <div class="circle"></div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
  <path clip-rule="evenodd" d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Zm.848-12.352a1.2 1.2 0 0 0-1.696-1.696l-3.6 3.6a1.2 1.2 0 0 0 0 1.696l3.6 3.6a1.2 1.2 0 0 0 1.696-1.696L11.297 13.2H15.6a1.2 1.2 0 1 0 0-2.4h-4.303l1.551-1.552Z" fill-rule="evenodd"></path>
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
  <path clip-rule="evenodd" d="M21.6 12a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0ZM8.4 9.6a1.2 1.2 0 1 1 2.4 0v4.8a1.2 1.2 0 1 1-2.4 0V9.6Zm6-1.2a1.2 1.2 0 0 0-1.2 1.2v4.8a1.2 1.2 0 1 0 2.4 0V9.6a1.2 1.2 0 0 0-1.2-1.2Z" fill-rule="evenodd"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
  <path clip-rule="evenodd" d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Zm4.448-10.448-3.6-3.6a1.2 1.2 0 0 0-1.696 1.696l1.551 1.552H8.4a1.2 1.2 0 1 0 0 2.4h4.303l-1.551 1.552a1.2 1.2 0 1 0 1.696 1.696l3.6-3.6a1.2 1.2 0 0 0 0-1.696Z" fill-rule="evenodd"></path>
</svg>
<div class="air"></div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" fill="none" height="20" width="24">
  <path d="M3.343 7.778a4.5 4.5 0 0 1 7.339-1.46L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.501 4.501 0 0 1-.975-4.904Z"></path>
</svg>
  </div>
  <div class="time">
    <div class="elapsed"></div>
  </div>

</div>

))}
</div>
    </div>
  );
};
export default Toop100SongTablelastyear