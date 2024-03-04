// https://api.nasa.gov/ Mars Rover photos
// get date of the day
let myDate = new Date();
let day = myDate.getDate() - 1; // for yesterday
let month = myDate.getMonth() + 1; // January is 0
let year = myDate.getFullYear();
let information = '';
let roverPerseverance = 'perseverance'; // curiosity
let roverCuriosity = 'curiosity'; // curiosity
let curiosityImg = document.getElementById('curiosityImg');
let perseveranceImg = document.getElementById('perseveranceImg');
let curiosityInfos = document.getElementById('dataImgCuriosity');
let perseveranceInfos = document.getElementById('dataImgPerseverance');
let lastPictureFromCuriosity = '';
let lastPictureFromPerseverance = '';
let lastDateCaptured = '';

const getMaxDate = async () => {
  try {
    const response = await fetch(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=0&api_key=bWdxMIS7efw8hwvaf40hjeezP3VBBairnjziMSMp'
    );
    const datas = await response.json();
    console.log(datas);
    lastDateCaptured = datas.photos[0].rover.max_date;
    search(lastDateCaptured, 'curiosity', curiosityImg, curiosityInfos);
    search(
      lastDateCaptured,
      'perseverance',
      perseveranceImg,
      perseveranceInfos
    );
  } catch (error) {
    console.log(error);
  }
};

getMaxDate();

const search = async (
  lastDateCaptured,
  rover,
  imageContainer,
  textContainer
) => {
  try {
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${lastDateCaptured}&api_key=bWdxMIS7efw8hwvaf40hjeezP3VBBairnjziMSMp`
    );
    const datas = await response.json();
    imageContainer.setAttribute('src', `${datas.photos[0].img_src}`);
    information = `Rover ${datas.photos[0].rover.name} ${lastDateCaptured}`;
    textContainer.innerHTML = `${information} | `;
    let link = document.createElement('a');
    link.href = `${datas.photos[0].img_src}`;
    link.textContent = 'Download?';
    textContainer.appendChild(link);
    document.title = `Last pictures from Mars ${lastDateCaptured}`;
  } catch (error) {
    console.error(error);
    document.getElementById('contentImg').innerHTML =
      '<p>Sorry errors on server ... 😕<br /><br />Try again later !</p>';
  }
};
