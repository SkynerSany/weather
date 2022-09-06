import NetworkRequests from './networkRequests';
import Weather from './weather';
import Map from './map';
import ControlBtns from './controlBtns';

export default class Main {
  constructor() {
    this.networkRequests = new NetworkRequests();
    this.defaultLocation = { city: 'Minsk', country: 'BY', loc: '53.9024716,27.5618225' };
    this.location = null;
    this.weather = null;
    this.background = null;
    this.newLocation = null;
  }

  setMapModule() {
    const map = new Map(this.location);
    map.setMap();
    return map;
  }

  setControlBtnsModule(map) {
    const controlBtns = new ControlBtns(this.location, map, this.networkRequests);
    controlBtns.initBtnsEvent();
    controlBtns.resetBackground(this.location);
  }

  setWeatherModule() {
    const weather = new Weather(this.weather);
    weather.initWeather();
  }

  setStartLocatiton(location) {
    this.location = location;
    const loadWeather = new Promise((resolve) => {
      resolve(this.networkRequests.getWeather(
        this.location.city || 'Minsk',
        this.location.country || 'BY',
        'en',
        'metric',
      ));
    });

    loadWeather.then(
      (weather) => {
        if (weather.cod === '404') {
          this.setStartLocatiton(this.defaultLocation);
          return;
        }
        this.weather = weather;
        this.setWeatherModule();
        const map = this.setMapModule();
        this.setControlBtnsModule(map);
      },
    );
  }

  init() {
    document.querySelector('.wrapper').style.backgroundImage = 'url(src/assets/images/defaultImage.jpg)';

    const loadLocation = new Promise((resolve) => {
      resolve(this.networkRequests.getLocation());
    });

    loadLocation.then(
      (location) => {
        this.setStartLocatiton(location);
      },
    );
  }
}

new Main().init();
