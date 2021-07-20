
// https://api.nasa.gov/ Mars Rover photos
// Yesterday rover's picture or later
// get date of the day
let myDate = new Date();
let day = myDate.getDate() - 1; // for yesterday
let month = myDate.getMonth() + 1; // January is 0
let year = myDate.getFullYear();
// let yesterday = `${year}-${month}-${day}`;
// let frenchYesterday = `${day}-${month}-${year}`;
let information = '';
let roverPerseverance = 'perseverance' // curiosity
let roverCuriosity = 'curiosity' // curiosity

// search the last image on result
function search(day, month, year, rover, idImg, idPara) {
  if (day < 1) {
    day = 30
    month += -1
    if (month < 1) {
      month = 12
    }
  }
  let date = `${year}-${month}-${day}`;
  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&api_key=bWdxMIS7efw8hwvaf40hjeezP3VBBairnjziMSMp`)
  .then(result => result.json())
  .then(result => {
    if (!result.photos[0]) {
      search(day -1, month, year)
    }
    else if (result.photos[0]) {
      document.getElementById(idImg).setAttribute('src', `${result.photos[0].img_src}`);
      information = `Rover ${result.photos[0].rover.name} ${day}-${month}-${year}`;
      document.getElementById(idPara).innerHTML = `${information} | `;
      let link = document.createElement('a');
      link.href = document.getElementById(idImg).getAttribute('src');
      link.download = document.getElementById(idImg).getAttribute('src');
      link.textContent = 'Download?'
      document.getElementById(idPara).appendChild(link);
      document.title = `Last pictures from Mars ${day}-${month}-${year}`
    }
  })
  .catch(error => console.log(error.message))
}

search(day, month, year, roverCuriosity, 'curiosityImg', 'dataImgCuriosity')
search(day, month, year, roverPerseverance, 'perseveranceImg', 'dataImgPerseverance')

// TODO: Gérer les erreurs si trops de requêtes
