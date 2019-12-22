import ajax from './ajax';

const bg = document.querySelector('.wrapper');
const location = ajax.getLocation();
const weather = ajax.getWeather(location.city, location.country, 'en', 'metric');

function resetBackground(loc = location) {
  bg.style.backgroundImage = `url('${ajax.getBackground(loc.city).urls.regular}')`;
}

resetBackground(location);

export {
  location,
  resetBackground,
  weather,
};
