import Weather from './weather';

export default class ControlBtns {
  constructor(location, map, networkRequests) {
    this.location = location;
    this.networkRequests = networkRequests;
    this.weather = new Weather();
    this.unit = 'metric';
    this.lang = 'en';
    this.newLocation = { city: this.location.city, country_code: this.location.country };
    this.map = map;
  }

  dropDown(elem) {
    const element = elem;
    if (element.style.display === 'flex') {
      element.parentNode.firstElementChild.style.display = 'block';
      element.parentNode.style.width = '3vw';
      element.style.display = 'none';
    } else {
      element.parentNode.firstElementChild.style.display = 'none';
      element.parentNode.style.width = '7vw';
      element.style.display = 'flex';
    }
  }

  newWeather() {
    const loadWeather = new Promise((resolve) => {
      resolve(this.networkRequests.getWeather(
        this.newLocation.city,
        this.newLocation.country_code,
        this.lang,
        this.unit,
      ));
    });
    loadWeather.then((weather) => {
      if (weather.cod === '404') {
        alert('Weather on this location not found');
        return;
      }
      this.weather.resetWeather(weather);
    });
  }

  resetBackground(loc = this.location) {
    const bg = new Promise((resolve) => resolve(this.networkRequests.getBackground(loc.city)));
    bg.then(
      (result) => {
        const img = document.createElement('img');
        img.src = result.urls.regular;
        img.onload = () => {
          document.querySelector('.wrapper').style.backgroundImage = `url(${result.urls.regular})`;
        };
      },
      () => {
        document.querySelector('.wrapper').style.backgroundImage = 'url(src/assets/images/defaultImage.jpg)';
      },
    );
  }

  searchLocation() {
    const inputSearch = document.querySelector('.control__search__form__input');
    if (inputSearch.value.length < 1) return;

    const loadLocation = new Promise((resolve) => resolve(this.networkRequests.getNewLocation(inputSearch.value)));

    loadLocation.then((newLocation) => {
      this.map.resetPosition(newLocation.results[0].geometry);
      this.newLocation.city = newLocation.results[0].components.city;
      this.newLocation.country_code = newLocation.results[0].components.country_code;
      this.resetBackground(this.newLocation.city);
      this.newWeather();
    });

    inputSearch.blur();
    inputSearch.style.width = '2.7vw';
    inputSearch.value = '';
  }

  addClouds(btnAddClouds) {
    const wrapper = document.querySelector('.wrapper');

    if (wrapper.classList.contains('cloud')) {
      btnAddClouds.textContent = 'Add Clouds';
      for (let i = 1; i < 5; i += 1) {
        wrapper.removeChild(document.querySelector(`.cloud${i}.clouds`));
      }
    } else {
      btnAddClouds.textContent = 'Remove Clouds';
      for (let i = 1; i < 5; i += 1) {
        const img = document.createElement('img');
        img.src = `src/assets/images/cloud-0${i}.png`;
        img.className = `cloud${i} clouds`;

        wrapper.appendChild(img);
      }
    }

    wrapper.classList.toggle('cloud');
  }

  setCurrentValue(btnSwitchLanguage, btnSwitchUnit) {
    const switchUnit = {
      '°С': 'metric',
      '°F': 'imperial',
    };

    document.querySelectorAll('.table').forEach((el) => {
      el.addEventListener('click', (event) => {
        const { target } = event;
        target.parentNode.parentNode.firstElementChild.textContent = target.textContent;
        this.unit = switchUnit[btnSwitchUnit.firstElementChild.textContent];
        this.lang = btnSwitchLanguage.firstElementChild.textContent;
        this.newWeather();
      });
    });
  }

  initBtnsEvent() {
    const btnAddClouds = document.querySelector('.constrol__animationCloudBtn');
    const btnSwitchLanguage = document.querySelector('.control__languages');
    const btnSwitchUnit = document.querySelector('.control__unit');
    const inputSearch = document.querySelector('.control__search__form__input');

    this.setCurrentValue(btnSwitchLanguage, btnSwitchUnit);

    btnSwitchLanguage.addEventListener('click', () => this.dropDown(btnSwitchLanguage.lastElementChild));
    btnSwitchUnit.addEventListener('click', () => this.dropDown(btnSwitchUnit.lastElementChild));
    btnAddClouds.addEventListener('click', () => this.addClouds(btnAddClouds));
    inputSearch.addEventListener('blur', () => { inputSearch.style.width = '2.7vw'; });
    inputSearch.addEventListener('keydown', (e) => { if (e.keyCode === 13) this.searchLocation(); });

    document.querySelector('.control__background').addEventListener('click', () => this.resetBackground(this.newLocation.city));
    document.querySelector('.control__search__form__btn').addEventListener('click', () => this.searchLocation());
    document.querySelector('.control__search__form').addEventListener('click', () => { inputSearch.style.width = '15vw'; inputSearch.focus(); });
  }
}
