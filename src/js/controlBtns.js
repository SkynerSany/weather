import Weather from './weather';

export default class ControlBtns {
  constructor(location, map, networkRequests) {
    this.location = location;
    this.networkRequests = networkRequests;
    this.weather = new Weather();
    this.unit = 'mitric';
    this.lang = 'en';
    this.newLocation = {
      results: {
        0: {
          components: {
            state: this.location.city,
            country: this.location.country,
          },
        },
      },
    };
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
      resolve(this.networkRequests.getWeather(this.newLocation.results[0].components.state,
        this.newLocation.results[0].components.country, this.lang, this.unit));
    });
    loadWeather.then((weather) => {
      this.weather.resetWeather(weather);
    });
  }

  resetBackground(loc = this.location) {
    const bg = new Promise((resolve) => resolve(this.networkRequests.getBackground(loc.city)));
    bg.then((result) => {
      document.querySelector('.wrapper').style.backgroundImage = `url('${result.urls.regular}')`;
    });
  }

  initBtnsEvent() {
    const controlBtns = document.querySelectorAll('.btn_top');
    const btnSearch = document.querySelector('.control__search__form__btn');
    const inputSearch = document.querySelector('.control__search__form__input');
    const liText = document.querySelectorAll('.table');
    const wrapper = document.querySelector('.wrapper');
    const switchUnit = {
      '°С': 'metric',
      '°F': 'imperial',
    };

    liText.forEach((el) => {
      el.addEventListener('click', (event) => {
        const { target } = event;
        target.parentNode.parentNode.firstElementChild.textContent = target.textContent;
        this.unit = switchUnit[controlBtns[3].firstElementChild.textContent];
        this.lang = controlBtns[2].firstElementChild.textContent;
        this.newWeather();
      });
    });

    controlBtns.forEach((el, i) => {
      if (i > 1 && i < 4) {
        el.addEventListener('click', () => {
          this.dropDown(controlBtns[i].lastElementChild);
        });
      }
    });

    controlBtns[1].addEventListener('click', () => {
      this.resetBackground(this.newLocation);
    });

    controlBtns[0].addEventListener('click', () => {
      if (controlBtns[0].textContent === 'Cloud') {
        controlBtns[0].textContent = 'Task';
        wrapper.className += ' cloud';
        for (let i = 1; i < 5; i += 1) {
          const img = document.createElement('img');
          img.src = `src/assets/images/cloud-0${i}.png`;
          img.className = `cloud${i} clouds`;
          wrapper.appendChild(img);
        }
      } else {
        wrapper.className = wrapper.className.replace(' cloud', '');
        controlBtns[0].textContent = 'Cloud';
        for (let i = 1; i < 5; i += 1) {
          wrapper.removeChild(document.querySelector(`.cloud${i}.clouds`));
        }
      }
    });

    btnSearch.addEventListener('click', () => {
      this.newLocation = this.networkRequests.getNewLocation(inputSearch.value);
      this.resetBackground(this.newLocation);
      this.map(this.newLocation.results[0].geometry);
      this.newWeather();
    });
  }
}
