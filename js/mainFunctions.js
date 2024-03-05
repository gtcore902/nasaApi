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

/**
 * Search last pictures for the last date
 * @param {*} rover
 * @param {*} imageContainer
 * @param {*} textContainer
 * @param {*} coordinator
 */
const search = async (rover, imageContainer, textContainer, coordinator) => {
  try {
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/latest_photos?&api_key=${API_KEY}`
    );
    let datas = await response.json();
    let link = document.createElement('a');
    datas = datas.latest_photos;
    imageContainer.src = `${datas[0].img_src}`;
    imageContainer.alt = `Last picture from ${rover} on ${datas[0].earth_date}`;
    let [year, month, day] = datas[0].earth_date.split('-');
    information = `Rover ${datas[0].rover.name} on ${day}-${month}-${year}`;
    textContainer.innerHTML = `${information} | `;
    link.classList.add('content__information--link');
    link.href = `${datas[0].img_src}`;
    link.textContent = 'Download?';
    link.setAttribute('download', '');
    textContainer.appendChild(link);
    document.title += ` ${coordinator} ${datas[0].earth_date}`;
  } catch (error) {
    console.error(error);
    document.querySelector('.content').innerHTML =
      '<p>Sorry errors on server ... 😕<br /><br />Try again later !</p>';
  }
};

search('curiosity', curiosityImg, curiosityInfos, 'on');
search('perseverance', perseveranceImg, perseveranceInfos, 'and');
