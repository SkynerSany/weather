!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=1)}([function(module,exports){eval("const body = document.querySelector('.body');\r\n\r\nconst words = ['Cloud', 'EN', 'EN', 'RU', 'BE', '°С', '°С', '°F'];\r\nconst numberOfDomWords = [3, 7, 9, 10, 11, 13, 15, 16];\r\n\r\nconst tag = ['div', 'header', 'div', 'div', 'div', 'i', 'div', 'span', 'ul', 'li', 'li', 'li',\r\n  'div', 'span', 'ul', 'li', 'li', 'div', 'input', 'button', 'section', 'div', 'div', 'div',\r\n  'div', 'span', 'div', 'span', 'span', 'div', 'span', 'img', 'div', 'ul', 'li', 'p', 'p', 'li',\r\n  'p', 'p', 'li', 'p', 'p', 'li', 'p', 'p', 'div', 'div', 'span', 'div', 'span', 'img', 'div', 'span',\r\n  'div', 'span', 'img', 'div', 'span', 'div', 'span', 'img', 'div', 'div'];\r\n\r\nconst classes = ['wrapper', 'header', 'control', 'control__task btn_top', 'control__background btn_top',\r\n  'fa fa-undo fa-1x', 'control__languages btn_top', 'control__languages__select', 'control__languages__ul table',\r\n  'control__languages__ul__li row', 'control__languages__ul__li row', 'control__languages__ul__li row', 'control__unit btn_top',\r\n  'control__unit__select', 'control__unit__ul table', 'control__unit__ul__li row', 'control__unit__ul__li row',\r\n  'control__search__form', 'control__search__form__input', 'control__search__form__btn', 'weather', 'info', 'info__now',\r\n  'info__now__block', 'info__now__location', 'info__now__location__name', 'info__now__location__date',\r\n  'info__now__location__date__day', 'info__now__location__date__time', 'info__now__weather', 'info__now__weather__temperature',\r\n  'info__now__weather__img', 'info__now__about', 'info__now__weather__about', 'info__now__weather__about__status', '', '',\r\n  'info__now__weather__about__status', '', '', 'info__now__weather__about__status', '', '', 'info__now__weather__about__status',\r\n  '', '', 'info__days', 'info__days__block', 'info__days__block__name', 'info__days__block__weather',\r\n  'info__days__block__weather__temperature', 'info__days__block__weather__img', 'info__days__block', 'info__days__block__name',\r\n  'info__days__block__weather', 'info__days__block__weather__temperature', 'info__days__block__weather__img', 'info__days__block',\r\n  'info__days__block__name', 'info__days__block__weather', 'info__days__block__weather__temperature',\r\n  'info__days__block__weather__img', 'map', ''];\r\n\r\nconst dom = [];\r\n\r\ntag.forEach((el, i) => {\r\n  dom.push(document.createElement(el));\r\n  dom[i].className = classes[i];\r\n});\r\n\r\nfunction addMore(parent, i) {\r\n  let k = i;\r\n  while (dom[k].className !== parent) k -= 1;\r\n  dom[k].appendChild(dom[i]);\r\n}\r\n\r\nfor (let i = 1; i < dom.length - 1; i += 1) {\r\n  if (dom[i].className === 'header' || dom[i].className === 'weather') {\r\n    dom[0].appendChild(dom[i]);\r\n  } else if (dom[i].className.indexOf('btn_top') !== -1 || dom[i].className === 'control__search__form') {\r\n    dom[2].appendChild(dom[i]);\r\n  } else if (dom[i].className.indexOf('row') !== -1) {\r\n    let k = i;\r\n    while (dom[k].className.indexOf('table') === -1) k -= 1;\r\n    dom[k].appendChild(dom[i]);\r\n  } else if (dom[i].className.indexOf('table') !== -1 || dom[i].className === 'control__search__form__btn'\r\n      || dom[i].className === 'map mapboxgl-map' || dom[i].className === 'info__now__location__date'\r\n      || dom[i].className === 'info__days__block__weather' || dom[i].className === 'info__days__block__weather__img'\r\n      || dom[i].className === 'info__now__location__date__time' || dom[i].className === 'info__now__weather__img') {\r\n    dom[i - 2].appendChild(dom[i]);\r\n  } else if (dom[i].className === 'info__now__weather__about__status') {\r\n    addMore('info__now__weather__about', i);\r\n  } else if (dom[i].className === 'info__days') {\r\n    dom[21].appendChild(dom[i]);\r\n  } else if (dom[i].className === 'map') {\r\n    dom[i].id = 'map';\r\n    dom[20].appendChild(dom[i]);\r\n  } else if (dom[i].className === 'info__now__weather') {\r\n    dom[23].appendChild(dom[i]);\r\n  } else if (dom[i].className === 'info__now__about') {\r\n    dom[22].appendChild(dom[i]);\r\n  } else if (dom[i].className === 'info__days__block') {\r\n    addMore('info__days', i);\r\n  } else if (dom[i].tagName === 'P') {\r\n    addMore('info__now__weather__about__status', i);\r\n  } else {\r\n    dom[i - 1].appendChild(dom[i]);\r\n  }\r\n}\r\n\r\n(function generateWords() {\r\n  for (let i = 0; i < numberOfDomWords.length; i += 1) {\r\n    dom[numberOfDomWords[i]].textContent = words[i];\r\n  }\r\n}());\r\n\r\nbody.appendChild(dom[0]);\r\n\n\n//# sourceURL=webpack:///./src/js/setDom.js?")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./src/js/setDom.js\nvar setDom = __webpack_require__(0);\n\n// EXTERNAL MODULE: ./src/scss/style.scss\nvar style = __webpack_require__(2);\n\n// CONCATENATED MODULE: ./src/js/ajax.js\nfunction ajax(url) {\r\n  const location = {};\r\n  const request = new XMLHttpRequest();\r\n  request.open('GET', url, false);\r\n  request.addEventListener('readystatechange', () => {\r\n    if (request.readyState === 4 && request.status === 200) {\r\n      const temp = JSON.parse(request.responseText);\r\n      for (const key in temp) {\r\n        location[key] = temp[key];\r\n      }\r\n    }\r\n  });\r\n  request.send();\r\n  return location;\r\n}\r\n\r\nconst obj = {\r\n  getLocation: () => ajax('https://ipinfo.io/json?token=b146feb3614af8'),\r\n  getWeather: (location, state, language, temperature) => ajax(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${location},${state}&lang=${language}&units=${temperature}&APPID=6ebdd0fd3d344c146430ede697227fdf`),\r\n  getBackground: (town) => ajax(`https://api.unsplash.com/photos/random?query=town,${town}&client_id=07b8adbc371366a8a45043f03b4b409735ce0ad155a68e10c8dfcddeaa261b78`),\r\n  getNewLocation: (town) => ajax(`https://api.opencagedata.com/geocode/v1/json?q=${town}&key=a7f2d1bad2c34af5ae3327dbcc36bd1b`),\r\n};\r\n\r\n/* harmony default export */ var js_ajax = (obj);\r\n\n// CONCATENATED MODULE: ./src/js/main.js\n\r\n\r\nconst bg = document.querySelector('.wrapper');\r\nconst main_location = js_ajax.getLocation();\r\nconst main_weather = js_ajax.getWeather(main_location.city, main_location.country, 'en', 'metric');\r\n\r\nfunction resetBackground(loc = main_location) {\r\n  bg.style.backgroundImage = `url('${js_ajax.getBackground(loc.city).urls.regular}')`;\r\n}\r\n\r\nresetBackground(main_location);\r\n\r\n\r\n\n// CONCATENATED MODULE: ./src/js/weather.js\n\r\n\r\nconst weather_name = document.querySelector('.info__now__location__name');\r\nconst date = document.querySelector('.info__now__location__date__day');\r\nconst time = document.querySelector('.info__now__location__date__time');\r\nconst temperature = document.querySelector('.info__now__weather__temperature');\r\nconst icon = document.querySelector('.info__now__weather__img');\r\nconst weather_status = document.querySelectorAll('.info__now__weather__about__status');\r\nconst daysTemperature = document.querySelectorAll('.info__days__block__weather__temperature');\r\nconst daysIcon = document.querySelectorAll('.info__days__block__weather__img');\r\nconst dates = document.querySelectorAll('.info__days__block__name');\r\nlet count = 0;\r\n\r\nconst week = {\r\n  EN: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],\r\n  RU: ['Пн', 'Вт', 'Ср', 'Чт', 'Пн', 'Сб', 'Вс'],\r\n  BE: ['Пн', 'Аў', 'Ср', 'Чц', 'Пн', 'Сб', 'Нд'],\r\n};\r\n\r\nconst months = {\r\n  EN: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],\r\n  RU: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],\r\n  BE: ['Сту', 'Лют', 'Сак', 'Кра', 'Тра', 'Чэр', 'Ліп', 'Жні', 'Вер', 'Кас', 'Ліс', 'Сне'],\r\n};\r\n\r\nconst dayWeather = {\r\n  EN: {\r\n    0: ['Weather:', ''],\r\n    1: ['Feels like:', ''],\r\n    2: ['Wind:', ''],\r\n    3: ['Humidity:', ''],\r\n  },\r\n  RU: {\r\n    0: ['Погода:', ''],\r\n    1: ['Ощущается:', ''],\r\n    2: ['Ветер:', ''],\r\n    3: ['Влажность:', ''],\r\n  },\r\n  BE: {\r\n    0: ['Надвор\\'е:', ''],\r\n    1: ['Адчувацца:', ''],\r\n    2: ['Вецер:', ''],\r\n    3: ['Вільготнасць:', ''],\r\n  },\r\n};\r\n\r\nfunction getTime() {\r\n  const now = new Date();\r\n  time.textContent = `${now.getHours()}:${(`0${now.getMinutes()}`).substr(-2)}`;\r\n}\r\n\r\nfunction resetWeather(w) {\r\n  const now = new Date();\r\n  const lang = document.querySelector('.control__languages__select').textContent;\r\n  const today = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;\r\n  const infoWather = [w.list[0].weather[0].description, Math.round(w.list[0].main.feels_like), `${Math.round(w.list[0].wind.speed)} m/s`, `${w.list[0].main.humidity}%`];\r\n\r\n  weather_name.textContent = `${w.city.name}, ${w.city.country}`;\r\n  date.textContent = `${week[lang][now.getDay()]} ${now.getDate()} ${months[lang][now.getMonth()]} `;\r\n\r\n  temperature.textContent = Math.round(w.list[0].main.temp);\r\n  icon.src = `http://openweathermap.org/img/wn/${w.list[0].weather[0].icon}@2x.png`;\r\n\r\n  for (let key in dayWeather[lang]) {\r\n    dayWeather[lang][key][1] = infoWather[key];\r\n  };\r\n\r\n  for (let i = 0; i < weather_status.length; i += 1) {\r\n    weather_status[i].firstElementChild.textContent = dayWeather[lang][i][0];\r\n    weather_status[i].lastElementChild.textContent = dayWeather[lang][i][1]\r\n  }\r\n\r\n  for (let key in w.list) {\r\n    if (w.list[key].dt_txt.split(' ')[0] !== today && w.list[key].dt_txt.split(' ')[1] === '15:00:00') {\r\n      dates[count].textContent = week[lang][new Date(w.list[key].dt*1000).getDay()];\r\n      daysTemperature[count].textContent = Math.round(w.list[key].main.temp);\r\n      daysIcon[count].src = `http://openweathermap.org/img/wn/${w.list[key].weather[0].icon}@2x.png`;\r\n      count += 1;\r\n    };\r\n    if (count > 2) {\r\n      count = 0;\r\n      return;\r\n    }\r\n  };\r\n}\r\n\r\ngetTime();\r\nresetWeather(main_weather);\r\nsetInterval(getTime, 6000);\r\n\r\n/* harmony default export */ var js_weather = (resetWeather);\r\n\n// CONCATENATED MODULE: ./src/js/map.js\n\r\n\r\nlet map_loc = main_location.loc.split(',').map(el => {return +el}).reverse();\r\n\r\nmapboxgl.accessToken = 'pk.eyJ1Ijoic2t5bmVyIiwiYSI6ImNrNDBhaDFocTAxb3AzZG9jNWY3Yjd4Z2cifQ.w0IAisX2wnyh_XL-Hx1Fjw';\r\nlet map = new mapboxgl.Map({\r\n  container: 'map',\r\n  center: map_loc,\r\n  zoom: 12,\r\n  style: 'mapbox://styles/mapbox/streets-v9',\r\n});\r\n\r\nconst size = 200;\r\n\r\nconst pulsingDot = {\r\n  width: size,\r\n  height: size,\r\n  data: new Uint8Array(size * size * 4),\r\n\r\n  onAdd() {\r\n    const canvas = document.createElement('canvas');\r\n    canvas.width = this.width;\r\n    canvas.height = this.height;\r\n    this.context = canvas.getContext('2d');\r\n  },\r\n\r\n  render() {\r\n    const duration = 1000;\r\n    const t = (performance.now() % duration) / duration;\r\n\r\n    const radius = (size / 2) * 0.3;\r\n    const outerRadius = (size / 2) * 0.7 * t + radius;\r\n    const { context } = this;\r\n\r\n    context.clearRect(0, 0, this.width, this.height);\r\n    context.beginPath();\r\n    context.arc(\r\n      this.width / 2,\r\n      this.height / 2,\r\n      outerRadius,\r\n      0,\r\n      Math.PI * 2,\r\n    );\r\n    context.fillStyle = `rgba(255, 200, 200,${1 - t})`;\r\n    context.fill();\r\n\r\n    context.beginPath();\r\n    context.arc(\r\n      this.width / 2,\r\n      this.height / 2,\r\n      radius,\r\n      0,\r\n      Math.PI * 2,\r\n    );\r\n    context.fillStyle = 'rgba(255, 100, 100, 1)';\r\n    context.strokeStyle = 'white';\r\n    context.lineWidth = 2 + 4 * (1 - t);\r\n    context.fill();\r\n    context.stroke();\r\n\r\n    this.data = context.getImageData(\r\n      0,\r\n      0,\r\n      this.width,\r\n      this.height,\r\n    ).data;\r\n\r\n    map.triggerRepaint();\r\n\r\n    return true;\r\n  },\r\n};\r\n\r\nfunction resetPosition(pos) {\r\n  map.setCenter(pos);\r\n}\r\n\r\n/* harmony default export */ var js_map = (resetPosition);\r\n\n// CONCATENATED MODULE: ./src/js/controlBtns.js\n\r\n\r\n\r\n\r\n\r\nconst controlBtns = document.querySelectorAll('.btn_top');\r\nconst btnSearch = document.querySelector('.control__search__form__btn');\r\nconst inputSearch = document.querySelector('.control__search__form__input');\r\nconst liText = document.querySelectorAll('.table');\r\nconst wrapper = document.querySelector('.wrapper');\r\nconst switchUnit = {\r\n  '°С': 'metric',\r\n  '°F': 'imperial',\r\n};\r\nlet newLocation = {\r\n  results: {\r\n    0: {\r\n      components: {\r\n        state: main_location.city,\r\n        country: main_location.country,\r\n      },\r\n    },\r\n  },\r\n};\r\nlet unit = 'mitric';\r\nlet lang = 'en';\r\n\r\n\r\nfunction dropDown(elem) {\r\n  const element = elem;\r\n  if (element.style.display === 'flex') {\r\n    element.parentNode.firstElementChild.style.display = 'block';\r\n    element.parentNode.style.width = '3vw';\r\n    element.style.display = 'none';\r\n  } else {\r\n    element.parentNode.firstElementChild.style.display = 'none';\r\n    element.parentNode.style.width = '7vw';\r\n    element.style.display = 'flex';\r\n  }\r\n}\r\n\r\nfunction nуwWeather() {\r\n  const weather = js_ajax.getWeather(newLocation.results[0].components.state,\r\n    newLocation.results[0].components.country, lang, unit);\r\n  js_weather(weather);\r\n}\r\n\r\nliText.forEach((el) => {\r\n  el.addEventListener('click', (event) => {\r\n    const { target } = event;\r\n    target.parentNode.parentNode.firstElementChild.textContent = target.textContent;\r\n    unit = switchUnit[controlBtns[3].firstElementChild.textContent];\r\n    lang = controlBtns[2].firstElementChild.textContent;\r\n    nуwWeather();\r\n  });\r\n});\r\n\r\ncontrolBtns.forEach((el, i) => {\r\n  if (i > 1 && i < 4) {\r\n    el.addEventListener('click', () => {\r\n      dropDown(controlBtns[i].lastElementChild);\r\n    });\r\n  }\r\n});\r\n\r\ncontrolBtns[1].addEventListener('click', () => {\r\n  resetBackground(newLocation);\r\n});\r\n\r\ncontrolBtns[0].addEventListener('click', () => {\r\n  if (controlBtns[0].textContent === 'Cloud') {\r\n    controlBtns[0].textContent = 'Task';\r\n    wrapper.className += ' cloud';\r\n    for (let i = 1; i < 5; i += 1) {\r\n      const img = document.createElement('img');\r\n      img.src = `src/assets/images/cloud-0${i}.png`;\r\n      img.className = `cloud${i} clouds`;\r\n      wrapper.appendChild(img);\r\n    }\r\n  } else {\r\n    wrapper.className = wrapper.className.replace(' cloud', '');\r\n    controlBtns[0].textContent = 'Cloud';\r\n    for (let i = 1; i < 5; i += 1) {\r\n      wrapper.removeChild(document.querySelector(`.cloud${i}.clouds`));\r\n    }\r\n  }\r\n});\r\n\r\nbtnSearch.addEventListener('click', () => {\r\n  newLocation = js_ajax.getNewLocation(inputSearch.value);\r\n  resetBackground(newLocation);\r\n  js_map(newLocation.results[0].geometry);\r\n  nуwWeather();\r\n});\r\n\n// CONCATENATED MODULE: ./src/js/app.js\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/app.js_+_5_modules?")},function(module,exports){eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/style.scss?")}]);