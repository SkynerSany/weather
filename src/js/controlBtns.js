import ajax from './ajax';
import map from './map';
import resetWeather from './weather';
import { location, resetBackground } from './main';

const controlBtns = document.querySelectorAll('.btn_top');
const btnSearch = document.querySelector('.control__search__form__btn');
const inputSearch = document.querySelector('.control__search__form__input');
const liText = document.querySelectorAll('.table');
const wrapper = document.querySelector('.wrapper');
const switchUnit = {
  '°С': 'metric',
  '°F': 'imperial',
};
let newLocation = {
  results: {
    0: {
      components: {
        state: location.city,
        country: location.country,
      },
    },
  },
};
let unit = 'mitric';
let lang = 'en';


function dropDown(elem) {
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

function nуwWeather() {
  const weather = ajax.getWeather(newLocation.results[0].components.state,
    newLocation.results[0].components.country, lang, unit);
  resetWeather(weather);
}

liText.forEach((el) => {
  el.addEventListener('click', (event) => {
    const { target } = event;
    target.parentNode.parentNode.firstElementChild.textContent = target.textContent;
    unit = switchUnit[controlBtns[3].firstElementChild.textContent];
    lang = controlBtns[2].firstElementChild.textContent;
    nуwWeather();
  });
});

controlBtns.forEach((el, i) => {
  if (i > 1 && i < 4) {
    el.addEventListener('click', () => {
      dropDown(controlBtns[i].lastElementChild);
    });
  }
});

controlBtns[1].addEventListener('click', () => {
  resetBackground(newLocation);
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
  newLocation = ajax.getNewLocation(inputSearch.value);
  resetBackground(newLocation);
  map(newLocation.results[0].geometry);
  nуwWeather();
});
