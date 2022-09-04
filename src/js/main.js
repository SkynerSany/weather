import NetworkRequests from './networkRequests';
import Weather from './weather';
import Map from './map';
import ControlBtns from './controlBtns';

export default class Main {
  constructor() {
    this.networkRequests = new NetworkRequests();
    this.location = null;
    this.weather = null;
    this.background = null;
    this.newLocation = null;
  }

  setMapModule() {
    const map = new Map(this.location);
    map.setMap();
    return map.map;
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

  init() {
    const loadLocation = new Promise((resolve) => {
      resolve(this.networkRequests.getLocation());
    });

    loadLocation.then(
      (location) => {
        this.location = location;
        const loadWeather = new Promise((resolve) => {
          resolve(this.networkRequests.getWeather(this.location.city, this.location.country, 'en', 'metric'));
        });

        loadWeather.then(
          (weather) => {
            this.weather = weather;
            this.setWeatherModule();
          },
        );
        const map = this.setMapModule();
        this.setControlBtnsModule(map);
      },
    );
  }
}

new Main().init();
