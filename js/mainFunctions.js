/**
 * Documentation at https://api.nasa.gov/ Mars Rover photos
 */

let API_KEY = 'bWdxMIS7efw8hwvaf40hjeezP3VBBairnjziMSMp';
let information = '';
let curiosityImg = document.querySelector('.content__image--curiosity');
let perseveranceImg = document.querySelector('.content__image--perseverance');
let curiosityInfos = document.querySelector('.content__information--curiosity');
let perseveranceInfos = document.querySelector(
  '.content__information--perseverance'
);
let lastPictureFromCuriosity = '';
let lastPictureFromPerseverance = '';
let lastDateCaptured = '';

/**
 * Get the most recent Earth date from which photos exist
 */
const getMaxDate = async () => {
  try {
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=0&api_key=${API_KEY}`
    );
    const datas = await response.json();
    // console.log(datas);
    lastDateCaptured = datas.photos[0].rover.max_date;
    search(lastDateCaptured, 'curiosity', curiosityImg, curiosityInfos, 'on');
    search(
      lastDateCaptured,
      'perseverance',
      perseveranceImg,
      perseveranceInfos,
      'and'
    );
  } catch (error) {
    console.log(error);
  }
};

getMaxDate();

/**
 * Search last pictures for the last date
 * @param {*} lastDateCaptured
 * @param {*} rover
 * @param {*} imageContainer
 * @param {*} textContainer
 */
const search = async (
  lastDateCaptured,
  rover,
  imageContainer,
  textContainer,
  coordinator
) => {
  try {
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${lastDateCaptured}&api_key=${API_KEY}`
    );
    const datas = await response.json();
    // console.log(datas);
    imageContainer.src = `${datas.photos[0].img_src}`;
    imageContainer.alt = `Last picture from ${rover} on ${lastDateCaptured}`;
    information = `Rover ${datas.photos[0].rover.name} ${lastDateCaptured}`;
    textContainer.innerHTML = `${information} | `;
    let link = document.createElement('a');
    link.classList.add('content__information--link');
    link.href = `${datas.photos[0].img_src}`;
    link.textContent = 'Download?';
    link.setAttribute('download', '');
    textContainer.appendChild(link);
    document.title += ` ${coordinator} ${lastDateCaptured}`;
  } catch (error) {
    console.error(error);
    document.querySelector('.content').innerHTML =
      '<p>Sorry errors on server ... 😕<br /><br />Try again later !</p>';
  }
};
