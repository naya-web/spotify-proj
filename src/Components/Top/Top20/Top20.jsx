// export function top20Songs(artist,since){
//     let obj = {};
//     let dateSince;
//     if(since == "since the beginning"){
//       data.forEach(song => {
//         if(song["master_metadata_album_artist_name"] ==artist)
//           obj[song["master_metadata_track_name"]] = (obj[song["master_metadata_track_name"]] || 0) + song.ms_played;
//       });
//       let top20 =getTop100(obj).slice(0,20)
//       return top20      
//     }
//     const currentDate = new Date();
//     if( since == "last year"){
//       dateSince = new Date(currentDate.setFullYear(currentDate.getFullYear() - 1));
//     }
//     else if(since == "last 6 months"){
//       dateSince = new Date(currentDate.setMonth(currentDate.getMonth() - 6));
//     }
//     else if(since = "last 4 weeks"){
//       dateSince = new Date(currentDate.setDate(currentDate.getDate() - 28));
//     }
//     let filteredData = data.filter(item => new Date(item.ts) >= dateSince);
//     filteredData.forEach(song => {
//       if(song["master_metadata_album_artist_name"] ==artist)
//         obj[song["master_metadata_track_name"]] = (obj[song["master_metadata_track_name"]] || 0) + song.ms_played;
//     });
//     let top20 =getTop100(obj).slice(0,20)
//     return top20
//   }


// function getTop100(Obj) {
//     const dataArray = Object.entries(Obj);
  
//     dataArray.sort((a, b) => b[1] - a[1]);
  
//     const top100 = dataArray.slice(0, 100);
  
  
//     const top100Names = top100.map(([item]) => item);
  
//     return top100Names;
//   }