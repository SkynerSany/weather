import { weather } from './main';

const name = document.querySelector('.info__now__location__name');
const date = document.querySelector('.info__now__location__date__day');
const time = document.querySelector('.info__now__location__date__time');
const temperature = document.querySelector('.info__now__weather__temperature');
const icon = document.querySelector('.info__now__weather__img');
const status = document.querySelectorAll('.info__now__weather__about__status');
const daysTemperature = document.querySelectorAll('.info__days__block__weather__temperature');
const daysIcon = document.querySelectorAll('.info__days__block__weather__img');
const dates = document.querySelectorAll('.info__days__block__name');
let count = 0;

const week = {
  EN: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
  RU: ['Пн', 'Вт', 'Ср', 'Чт', 'Пн', 'Сб', 'Вс'],
  BE: ['Пн', 'Аў', 'Ср', 'Чц', 'Пн', 'Сб', 'Нд'],
};

const months = {
  EN: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  RU: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
  BE: ['Сту', 'Лют', 'Сак', 'Кра', 'Тра', 'Чэр', 'Ліп', 'Жні', 'Вер', 'Кас', 'Ліс', 'Сне'],
};

const dayWeather = {
  EN: {
    0: ['Weather:', ''],
    1: ['Feels like:', ''],
    2: ['Wind:', ''],
    3: ['Humidity:', ''],
  },
  RU: {
    0: ['Погода:', ''],
    1: ['Ощущается:', ''],
    2: ['Ветер:', ''],
    3: ['Влажность:', ''],
  },
  BE: {
    0: ['Надвор\'е:', ''],
    1: ['Адчувацца:', ''],
    2: ['Вецер:', ''],
    3: ['Вільготнасць:', ''],
  },
};

function getTime() {
  const now = new Date();
  time.textContent = `${now.getHours()}:${(`0${now.getMinutes()}`).substr(-2)}`;
}

function resetWeather(w) {
  const now = new Date();
  const lang = document.querySelector('.control__languages__select').textContent;
  const today = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
  const infoWather = [w.list[0].weather[0].description, Math.round(w.list[0].main.feels_like), `${Math.round(w.list[0].wind.speed)} m/s`, `${w.list[0].main.humidity}%`];

  name.textContent = `${w.city.name}, ${w.city.country}`;
  date.textContent = `${week[lang][now.getDay()]} ${now.getDate()} ${months[lang][now.getMonth()]} `;

  temperature.textContent = Math.round(w.list[0].main.temp);
  icon.src = `http://openweathermap.org/img/wn/${w.list[0].weather[0].icon}@2x.png`;

  for (let key in dayWeather[lang]) {
    dayWeather[lang][key][1] = infoWather[key];
  };

  for (let i = 0; i < status.length; i += 1) {
    status[i].firstElementChild.textContent = dayWeather[lang][i][0];
    status[i].lastElementChild.textContent = dayWeather[lang][i][1]
  }

  for (let key in w.list) {
    if (w.list[key].dt_txt.split(' ')[0] !== today && w.list[key].dt_txt.split(' ')[1] === '15:00:00') {
      dates[count].textContent = week[lang][new Date(w.list[key].dt*1000).getDay()];
      daysTemperature[count].textContent = Math.round(w.list[key].main.temp);
      daysIcon[count].src = `http://openweathermap.org/img/wn/${w.list[key].weather[0].icon}@2x.png`;
      count += 1;
    };
    if (count > 2) {
      count = 0;
      return;
    }
  };
}

getTime();
resetWeather(weather);
setInterval(getTime, 6000);

export default resetWeather;
