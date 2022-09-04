import languagesBox from './languagesBox';

export default class Weather {
  constructor(weather) {
    this.weather = weather;
    this.languagesBox = languagesBox;
  }

  getTime() {
    const now = new Date();
    document.querySelector('.info__now__location__date__time')
      .textContent = `${now.getHours()}:${(`0${now.getMinutes()}`).substr(-2)}`;
  }

  resetWeather(w) {
    const status = document.querySelectorAll('.info__now__weather__about__status');

    const now = new Date();
    const lang = document.querySelector('.control__languages__select').textContent;
    const today = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
    const infoWather = [w.list[0].weather[0].description, Math.round(w.list[0].main.feels_like), `${Math.round(w.list[0].wind.speed)} m/s`, `${w.list[0].main.humidity}%`];

    document.querySelector('.info__now__location__name').textContent = `${w.city.name}, ${w.city.country}`;
    document.querySelector('.info__now__location__date__day').textContent = `${this.languagesBox.week[lang][now.getDay()]} ${now.getDate()} ${this.languagesBox.months[lang][now.getMonth()]} `;

    document.querySelector('.info__now__weather__temperature').textContent = Math.round(w.list[0].main.temp);
    document.querySelector('.info__now__weather__img').src = `http://openweathermap.org/img/wn/${w.list[0].weather[0].icon}@2x.png`;

    Object.keys(this.languagesBox.dayWeather[lang]).forEach((item) => {
      this.languagesBox.dayWeather[lang][item][1] = infoWather[item];
    });

    for (let i = 0; i < status.length; i += 1) {
      status[i].firstElementChild.textContent = this.languagesBox.dayWeather[lang][i][0];
      status[i].lastElementChild.textContent = this.languagesBox.dayWeather[lang][i][1];
    }

    const daysTemperature = document.querySelectorAll('.info__days__block__weather__temperature');
    const daysIcon = document.querySelectorAll('.info__days__block__weather__img');
    const dates = document.querySelectorAll('.info__days__block__name');
    let count = 0;

    for (const key in w.list) {
      if (w.list[key].dt_txt.split(' ')[0] !== today && w.list[key].dt_txt.split(' ')[1] === '15:00:00') {
        dates[count].textContent = this.languagesBox.week[lang][new Date(w.list[key].dt * 1000).getDay()];
        daysTemperature[count].textContent = Math.round(w.list[key].main.temp);
        daysIcon[count].src = `http://openweathermap.org/img/wn/${w.list[key].weather[0].icon}@2x.png`;
        count += 1;
      }
      if (count > 2) {
        count = 0;
        return;
      }
    }
  }

  initWeather() {
    this.getTime();
    this.resetWeather(this.weather);
    setInterval(this.getTime, 6000);
  }
}
