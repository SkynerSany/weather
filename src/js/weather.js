import languagesBox from './languagesBox';

export default class Weather {
  constructor(weather) {
    this.weather = weather;
    this.languagesBox = languagesBox;
  }

  setTime() {
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    document.querySelector('.info__now__location__date__time').textContent = currentTime;
  }

  getTodayWeather(...args) {
    const [weather, now] = args;
    return {
      lang: document.querySelector('.control__languages__select').textContent,
      today: `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`,
      infoWather: [
        weather.list[0].weather[0].description,
        Math.round(weather.list[0].main.feels_like),
        `${Math.round(weather.list[0].wind.speed)} m/s`,
        `${weather.list[0].main.humidity}%`,
      ],
    };
  }

  setTodayWeather(...args) {
    const [weather, now, lang] = args;
    document.querySelector('.info__now__location__name').textContent = `${weather.city.name}, ${weather.city.country}`;
    document.querySelector('.info__now__location__date__day').textContent = `${this.languagesBox.week[lang][now.getDay()]} ${now.getDate()} ${this.languagesBox.months[lang][now.getMonth()]} `;
    document.querySelector('.info__now__weather__temperature').textContent = Math.round(weather.list[0].main.temp);
    document.querySelector('.info__now__weather__img').src = `http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`;
  }

  setFutureWeather(weather, today, lang) {
    const daysTemperature = document.querySelectorAll('.info__days__block__weather__temperature');
    const daysIcon = document.querySelectorAll('.info__days__block__weather__img');
    const dates = document.querySelectorAll('.info__days__block__name');
    let count = 0;

    Object.values(weather.list).forEach((item) => {
      const [date, time] = item.dt_txt.split(' ');
      if (date !== today && time === '15:00:00' && count < 3) {
        dates[count].textContent = this.languagesBox.week[lang][new Date(item.dt * 1000).getDay()];
        daysTemperature[count].textContent = Math.round(item.main.temp);
        daysIcon[count].src = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
        count += 1;
      }
    });
  }

  resetWeather(weather) {
    const status = document.querySelectorAll('.info__now__weather__about__status');
    const now = new Date();

    const { lang, today, infoWather } = this.getTodayWeather(weather, now);
    this.setTodayWeather(weather, now, lang);

    Object.keys(this.languagesBox.dayWeather[lang]).forEach((item) => {
      this.languagesBox.dayWeather[lang][item][1] = infoWather[item];
    });

    for (let i = 0; i < status.length; i += 1) {
      [status[i].firstElementChild.textContent, status[i].lastElementChild.textContent] = this.languagesBox.dayWeather[lang][i];
    }

    this.setFutureWeather(weather, today, lang);
  }

  initWeather() {
    this.setTime();
    this.resetWeather(this.weather);
    setInterval(this.setTime, 6000);
  }
}
