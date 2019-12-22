const body = document.querySelector('.body');

const words = ['Cloud', 'EN', 'EN', 'RU', 'BE', '°С', '°С', '°F'];
const numberOfDomWords = [3, 7, 9, 10, 11, 13, 15, 16];

const tag = ['div', 'header', 'div', 'div', 'div', 'i', 'div', 'span', 'ul', 'li', 'li', 'li',
  'div', 'span', 'ul', 'li', 'li', 'div', 'input', 'button', 'section', 'div', 'div', 'div',
  'div', 'span', 'div', 'span', 'span', 'div', 'span', 'img', 'div', 'ul', 'li', 'p', 'p', 'li',
  'p', 'p', 'li', 'p', 'p', 'li', 'p', 'p', 'div', 'div', 'span', 'div', 'span', 'img', 'div', 'span',
  'div', 'span', 'img', 'div', 'span', 'div', 'span', 'img', 'div', 'div'];

const classes = ['wrapper', 'header', 'control', 'control__task btn_top', 'control__background btn_top',
  'fa fa-undo fa-1x', 'control__languages btn_top', 'control__languages__select', 'control__languages__ul table',
  'control__languages__ul__li row', 'control__languages__ul__li row', 'control__languages__ul__li row', 'control__unit btn_top',
  'control__unit__select', 'control__unit__ul table', 'control__unit__ul__li row', 'control__unit__ul__li row',
  'control__search__form', 'control__search__form__input', 'control__search__form__btn', 'weather', 'info', 'info__now',
  'info__now__block', 'info__now__location', 'info__now__location__name', 'info__now__location__date',
  'info__now__location__date__day', 'info__now__location__date__time', 'info__now__weather', 'info__now__weather__temperature',
  'info__now__weather__img', 'info__now__about', 'info__now__weather__about', 'info__now__weather__about__status', '', '',
  'info__now__weather__about__status', '', '', 'info__now__weather__about__status', '', '', 'info__now__weather__about__status',
  '', '', 'info__days', 'info__days__block', 'info__days__block__name', 'info__days__block__weather',
  'info__days__block__weather__temperature', 'info__days__block__weather__img', 'info__days__block', 'info__days__block__name',
  'info__days__block__weather', 'info__days__block__weather__temperature', 'info__days__block__weather__img', 'info__days__block',
  'info__days__block__name', 'info__days__block__weather', 'info__days__block__weather__temperature',
  'info__days__block__weather__img', 'map', ''];

const dom = [];

tag.forEach((el, i) => {
  dom.push(document.createElement(el));
  dom[i].className = classes[i];
});

function addMore(parent, i) {
  let k = i;
  while (dom[k].className !== parent) k -= 1;
  dom[k].appendChild(dom[i]);
}

for (let i = 1; i < dom.length - 1; i += 1) {
  if (dom[i].className === 'header' || dom[i].className === 'weather') {
    dom[0].appendChild(dom[i]);
  } else if (dom[i].className.indexOf('btn_top') !== -1 || dom[i].className === 'control__search__form') {
    dom[2].appendChild(dom[i]);
  } else if (dom[i].className.indexOf('row') !== -1) {
    let k = i;
    while (dom[k].className.indexOf('table') === -1) k -= 1;
    dom[k].appendChild(dom[i]);
  } else if (dom[i].className.indexOf('table') !== -1 || dom[i].className === 'control__search__form__btn'
      || dom[i].className === 'map mapboxgl-map' || dom[i].className === 'info__now__location__date'
      || dom[i].className === 'info__days__block__weather' || dom[i].className === 'info__days__block__weather__img'
      || dom[i].className === 'info__now__location__date__time' || dom[i].className === 'info__now__weather__img') {
    dom[i - 2].appendChild(dom[i]);
  } else if (dom[i].className === 'info__now__weather__about__status') {
    addMore('info__now__weather__about', i);
  } else if (dom[i].className === 'info__days') {
    dom[21].appendChild(dom[i]);
  } else if (dom[i].className === 'map') {
    dom[i].id = 'map';
    dom[20].appendChild(dom[i]);
  } else if (dom[i].className === 'info__now__weather') {
    dom[23].appendChild(dom[i]);
  } else if (dom[i].className === 'info__now__about') {
    dom[22].appendChild(dom[i]);
  } else if (dom[i].className === 'info__days__block') {
    addMore('info__days', i);
  } else if (dom[i].tagName === 'P') {
    addMore('info__now__weather__about__status', i);
  } else {
    dom[i - 1].appendChild(dom[i]);
  }
}

(function generateWords() {
  for (let i = 0; i < numberOfDomWords.length; i += 1) {
    dom[numberOfDomWords[i]].textContent = words[i];
  }
}());

body.appendChild(dom[0]);
