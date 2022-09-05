/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fancy-weather/./src/scss/style.scss?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setDom */ \"./src/js/setDom.js\");\n/* harmony import */ var _setDom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_setDom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ \"./src/js/main.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://fancy-weather/./src/js/app.js?");

/***/ }),

/***/ "./src/js/controlBtns.js":
/*!*******************************!*\
  !*** ./src/js/controlBtns.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ControlBtns)\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/js/weather.js\");\n\r\n\r\nclass ControlBtns {\r\n  constructor(location, map, networkRequests) {\r\n    this.location = location;\r\n    this.networkRequests = networkRequests;\r\n    this.weather = new _weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    this.unit = 'metric';\r\n    this.lang = 'en';\r\n    this.newLocation = { city: this.location.city, country_code: this.location.country };\r\n    this.map = map;\r\n  }\r\n\r\n  dropDown(elem) {\r\n    const element = elem;\r\n    if (element.style.display === 'flex') {\r\n      element.parentNode.firstElementChild.style.display = 'block';\r\n      element.parentNode.style.width = '3vw';\r\n      element.style.display = 'none';\r\n    } else {\r\n      element.parentNode.firstElementChild.style.display = 'none';\r\n      element.parentNode.style.width = '7vw';\r\n      element.style.display = 'flex';\r\n    }\r\n  }\r\n\r\n  newWeather() {\r\n    const loadWeather = new Promise((resolve) => {\r\n      resolve(this.networkRequests.getWeather(\r\n        this.newLocation.city,\r\n        this.newLocation.country_code,\r\n        this.lang,\r\n        this.unit,\r\n      ));\r\n    });\r\n    loadWeather.then((weather) => {\r\n      this.weather.resetWeather(weather);\r\n    });\r\n  }\r\n\r\n  resetBackground(loc = this.location) {\r\n    const bg = new Promise((resolve) => resolve(this.networkRequests.getBackground(loc.city)));\r\n    bg.then(\r\n      (result) => {\r\n        const img = document.createElement('img');\r\n        img.src = result.urls.regular;\r\n        img.onload = () => {\r\n          document.querySelector('.wrapper').style.backgroundImage = `url(${result.urls.regular})`;\r\n        };\r\n      },\r\n      () => {\r\n        document.querySelector('.wrapper').style.backgroundImage = 'url(src/assets/images/defaultImage.jpg)';\r\n      },\r\n    );\r\n  }\r\n\r\n  searchLocation() {\r\n    const inputSearch = document.querySelector('.control__search__form__input');\r\n    if (inputSearch.value.length < 1) return;\r\n\r\n    const loadLocation = new Promise((resolve) => resolve(this.networkRequests.getNewLocation(inputSearch.value)));\r\n\r\n    loadLocation.then((newLocation) => {\r\n      this.map.resetPosition(newLocation.results[0].geometry);\r\n      this.newLocation.city = newLocation.results[0].components.city;\r\n      this.newLocation.country_code = newLocation.results[0].components.country_code;\r\n      this.resetBackground(this.newLocation.city);\r\n      this.newWeather();\r\n    });\r\n\r\n    inputSearch.blur();\r\n    inputSearch.style.width = '2.7vw';\r\n    inputSearch.value = '';\r\n  }\r\n\r\n  addClouds(btnAddClouds) {\r\n    const wrapper = document.querySelector('.wrapper');\r\n\r\n    if (wrapper.classList.contains('cloud')) {\r\n      btnAddClouds.textContent = 'Add Clouds';\r\n      for (let i = 1; i < 5; i += 1) {\r\n        wrapper.removeChild(document.querySelector(`.cloud${i}.clouds`));\r\n      }\r\n    } else {\r\n      btnAddClouds.textContent = 'Remove Clouds';\r\n      for (let i = 1; i < 5; i += 1) {\r\n        const img = document.createElement('img');\r\n        img.src = `src/assets/images/cloud-0${i}.png`;\r\n        img.className = `cloud${i} clouds`;\r\n        wrapper.appendChild(img);\r\n      }\r\n    }\r\n\r\n    wrapper.classList.toggle('cloud');\r\n  }\r\n\r\n  setCurrentValue(btnSwitchLanguage, btnSwitchUnit) {\r\n    const switchUnit = {\r\n      '°С': 'metric',\r\n      '°F': 'imperial',\r\n    };\r\n\r\n    document.querySelectorAll('.table').forEach((el) => {\r\n      el.addEventListener('click', (event) => {\r\n        const { target } = event;\r\n        target.parentNode.parentNode.firstElementChild.textContent = target.textContent;\r\n        this.unit = switchUnit[btnSwitchUnit.firstElementChild.textContent];\r\n        this.lang = btnSwitchLanguage.firstElementChild.textContent;\r\n        this.newWeather();\r\n      });\r\n    });\r\n  }\r\n\r\n  initBtnsEvent() {\r\n    const btnAddClouds = document.querySelector('.constrol__animationCloudBtn');\r\n    const btnSwitchLanguage = document.querySelector('.control__languages');\r\n    const btnSwitchUnit = document.querySelector('.control__unit');\r\n    const inputSearchForm = document.querySelector('.control__search__form');\r\n    const inputSearch = document.querySelector('.control__search__form__input');\r\n\r\n    this.setCurrentValue(btnSwitchLanguage, btnSwitchUnit);\r\n\r\n    btnSwitchLanguage.addEventListener('click', () => this.dropDown(btnSwitchLanguage.lastElementChild));\r\n    btnSwitchUnit.addEventListener('click', () => this.dropDown(btnSwitchUnit.lastElementChild));\r\n    document.querySelector('.control__background').addEventListener('click', () => this.resetBackground(this.newLocation.city));\r\n    btnAddClouds.addEventListener('click', () => this.addClouds(btnAddClouds));\r\n    inputSearchForm.addEventListener('click', () => { inputSearch.style.width = '15vw'; inputSearch.focus(); });\r\n    inputSearch.addEventListener('blur', () => { inputSearch.style.width = '2.7vw'; });\r\n    inputSearch.addEventListener('keydown', (e) => { if (e.keyCode === 13) this.searchLocation(); });\r\n    document.querySelector('.control__search__form__btn').addEventListener('click', () => this.searchLocation());\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fancy-weather/./src/js/controlBtns.js?");

/***/ }),

/***/ "./src/js/languagesBox.js":
/*!********************************!*\
  !*** ./src/js/languagesBox.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ languageBox)\n/* harmony export */ });\nconst languageBox = {\r\n  week: {\r\n    EN: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],\r\n    RU: ['Пн', 'Вт', 'Ср', 'Чт', 'Пн', 'Сб', 'Вс'],\r\n    BE: ['Пн', 'Аў', 'Ср', 'Чц', 'Пн', 'Сб', 'Нд'],\r\n  },\r\n\r\n  months: {\r\n    EN: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],\r\n    RU: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],\r\n    BE: ['Сту', 'Лют', 'Сак', 'Кра', 'Тра', 'Чэр', 'Ліп', 'Жні', 'Вер', 'Кас', 'Ліс', 'Сне'],\r\n  },\r\n\r\n  dayWeather: {\r\n    EN: {\r\n      0: ['Weather:', ''],\r\n      1: ['Feels like:', ''],\r\n      2: ['Wind:', ''],\r\n      3: ['Humidity:', ''],\r\n    },\r\n    RU: {\r\n      0: ['Погода:', ''],\r\n      1: ['Ощущается:', ''],\r\n      2: ['Ветер:', ''],\r\n      3: ['Влажность:', ''],\r\n    },\r\n    BE: {\r\n      0: ['Надвор\\'е:', ''],\r\n      1: ['Адчувацца:', ''],\r\n      2: ['Вецер:', ''],\r\n      3: ['Вільготнасць:', ''],\r\n    },\r\n  },\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://fancy-weather/./src/js/languagesBox.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var _networkRequests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./networkRequests */ \"./src/js/networkRequests.js\");\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ \"./src/js/weather.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ \"./src/js/map.js\");\n/* harmony import */ var _controlBtns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controlBtns */ \"./src/js/controlBtns.js\");\n\r\n\r\n\r\n\r\n\r\nclass Main {\r\n  constructor() {\r\n    this.networkRequests = new _networkRequests__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    this.location = null;\r\n    this.weather = null;\r\n    this.background = null;\r\n    this.newLocation = null;\r\n  }\r\n\r\n  setMapModule() {\r\n    const map = new _map__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.location);\r\n    map.setMap();\r\n    return map;\r\n  }\r\n\r\n  setControlBtnsModule(map) {\r\n    const controlBtns = new _controlBtns__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.location, map, this.networkRequests);\r\n    controlBtns.initBtnsEvent();\r\n    controlBtns.resetBackground(this.location);\r\n  }\r\n\r\n  setWeatherModule() {\r\n    const weather = new _weather__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.weather);\r\n    weather.initWeather();\r\n  }\r\n\r\n  init() {\r\n    document.querySelector('.wrapper').style.backgroundImage = `url(src/assets/images/defaultImage.jpg)`;\r\n\r\n    const loadLocation = new Promise((resolve) => {\r\n      resolve(this.networkRequests.getLocation());\r\n    });\r\n\r\n    loadLocation.then(\r\n      (location) => {\r\n        this.location = location;\r\n        const loadWeather = new Promise((resolve) => {\r\n          resolve(this.networkRequests.getWeather(this.location.city, this.location.country, 'en', 'metric'));\r\n        });\r\n\r\n        loadWeather.then(\r\n          (weather) => {\r\n            this.weather = weather;\r\n            this.setWeatherModule();\r\n          },\r\n        );\r\n        const map = this.setMapModule();\r\n        this.setControlBtnsModule(map);\r\n      },\r\n    );\r\n  }\r\n}\r\n\r\nnew Main().init();\r\n\n\n//# sourceURL=webpack://fancy-weather/./src/js/main.js?");

/***/ }),

/***/ "./src/js/map.js":
/*!***********************!*\
  !*** ./src/js/map.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Map)\n/* harmony export */ });\nclass Map {\r\n  constructor(location) {\r\n    this.location = location.loc.split(',').map((el) => +el).reverse();\r\n    this.mapSize = 200;\r\n    this.map = null;\r\n  }\r\n\r\n  setMap() {\r\n    mapboxgl.accessToken = 'pk.eyJ1Ijoic2t5bmVyIiwiYSI6ImNrNDBhaDFocTAxb3AzZG9jNWY3Yjd4Z2cifQ.w0IAisX2wnyh_XL-Hx1Fjw';\r\n    this.map = new mapboxgl.Map({\r\n      container: 'map',\r\n      center: this.location,\r\n      zoom: 12,\r\n      style: 'mapbox://styles/mapbox/streets-v9',\r\n    });\r\n  }\r\n\r\n  resetPosition(pos) {\r\n    this.map.setCenter(pos);\r\n  }\r\n}\r\n\r\n// const pulsingDot = {\r\n//   width: this.mapSize,\r\n//   height: this.mapSize,\r\n//   data: new Uint8Array(this.mapSize * this.mapSize * 4),\r\n\r\n//   onAdd() {\r\n//     const canvas = document.createElement('canvas');\r\n//     canvas.width = this.width;\r\n//     canvas.height = this.height;\r\n//     this.context = canvas.getContext('2d');\r\n//   },\r\n\r\n//   render() {\r\n//     const duration = 1000;\r\n//     const t = (performance.now() % duration) / duration;\r\n\r\n//     const radius = (size / 2) * 0.3;\r\n//     const outerRadius = (size / 2) * 0.7 * t + radius;\r\n//     const { context } = this;\r\n\r\n//     context.clearRect(0, 0, this.width, this.height);\r\n//     context.beginPath();\r\n//     context.arc(\r\n//       this.width / 2,\r\n//       this.height / 2,\r\n//       outerRadius,\r\n//       0,\r\n//       Math.PI * 2,\r\n//     );\r\n//     context.fillStyle = `rgba(255, 200, 200,${1 - t})`;\r\n//     context.fill();\r\n\r\n//     context.beginPath();\r\n//     context.arc(\r\n//       this.width / 2,\r\n//       this.height / 2,\r\n//       radius,\r\n//       0,\r\n//       Math.PI * 2,\r\n//     );\r\n//     context.fillStyle = 'rgba(255, 100, 100, 1)';\r\n//     context.strokeStyle = 'white';\r\n//     context.lineWidth = 2 + 4 * (1 - t);\r\n//     context.fill();\r\n//     context.stroke();\r\n\r\n//     this.data = context.getImageData(\r\n//       0,\r\n//       0,\r\n//       this.width,\r\n//       this.height,\r\n//     ).data;\r\n\r\n//     map.triggerRepaint();\r\n\r\n//     return true;\r\n//   },\r\n// };\r\n\n\n//# sourceURL=webpack://fancy-weather/./src/js/map.js?");

/***/ }),

/***/ "./src/js/networkRequests.js":
/*!***********************************!*\
  !*** ./src/js/networkRequests.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NetworkRequests)\n/* harmony export */ });\nclass NetworkRequests {\r\n  request(url) {\r\n    return fetch(url)\r\n      .then((response) => response.json())\r\n      .then((commits) => commits);\r\n  }\r\n\r\n  getLocation() {\r\n    return this.request('https://ipinfo.io/json?token=b146feb3614af8');\r\n  }\r\n\r\n  getWeather(location, state, language, temperature) {\r\n    return this.request(`https://api.openweathermap.org/data/2.5/forecast?q=${location},${state}&lang=${language}&units=${temperature}&APPID=6ebdd0fd3d344c146430ede697227fdf`);\r\n  }\r\n\r\n  getBackground(town) {\r\n    return this.request(`https://api.unsplash.com/photos/random?query=${town}&client_id=07b8adbc371366a8a45043f03b4b409735ce0ad155a68e10c8dfcddeaa261b78`);\r\n  }\r\n\r\n  getNewLocation(town) {\r\n    return this.request(`https://api.opencagedata.com/geocode/v1/json?q=${town}&key=91d04622218a484f922d66360fdd62d0`);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fancy-weather/./src/js/networkRequests.js?");

/***/ }),

/***/ "./src/js/setDom.js":
/*!**************************!*\
  !*** ./src/js/setDom.js ***!
  \**************************/
/***/ (() => {

eval("const body = document.querySelector('.body');\r\n\r\nconst words = ['Add Clouds', 'EN', 'EN', 'RU', 'BE', '°С', '°С', '°F'];\r\nconst numberOfDomWords = [3, 7, 9, 10, 11, 13, 15, 16];\r\n\r\nconst tag = ['div', 'header', 'div', 'div', 'div', 'i', 'div', 'span', 'ul', 'li', 'li', 'li',\r\n  'div', 'span', 'ul', 'li', 'li', 'div', 'input', 'button', 'section', 'div', 'div', 'div',\r\n  'div', 'span', 'div', 'span', 'span', 'div', 'span', 'img', 'div', 'ul', 'li', 'p', 'p', 'li',\r\n  'p', 'p', 'li', 'p', 'p', 'li', 'p', 'p', 'div', 'div', 'span', 'div', 'span', 'img', 'div', 'span',\r\n  'div', 'span', 'img', 'div', 'span', 'div', 'span', 'img', 'div', 'div'];\r\n\r\nconst classes = ['wrapper', 'header', 'control', 'constrol__animationCloudBtn btn_top', 'control__background btn_top',\r\n  'fa fa-undo fa-1x', 'control__languages btn_top', 'control__languages__select', 'control__languages__ul table',\r\n  'control__languages__ul__li row', 'control__languages__ul__li row', 'control__languages__ul__li row', 'control__unit btn_top',\r\n  'control__unit__select', 'control__unit__ul table', 'control__unit__ul__li row', 'control__unit__ul__li row',\r\n  'control__search__form', 'control__search__form__input', 'control__search__form__btn', 'weather', 'info', 'info__now',\r\n  'info__now__block', 'info__now__location', 'info__now__location__name', 'info__now__location__date',\r\n  'info__now__location__date__day', 'info__now__location__date__time', 'info__now__weather', 'info__now__weather__temperature',\r\n  'info__now__weather__img', 'info__now__about', 'info__now__weather__about', 'info__now__weather__about__status', '', '',\r\n  'info__now__weather__about__status', '', '', 'info__now__weather__about__status', '', '', 'info__now__weather__about__status',\r\n  '', '', 'info__days', 'info__days__block', 'info__days__block__name', 'info__days__block__weather',\r\n  'info__days__block__weather__temperature', 'info__days__block__weather__img', 'info__days__block', 'info__days__block__name',\r\n  'info__days__block__weather', 'info__days__block__weather__temperature', 'info__days__block__weather__img', 'info__days__block',\r\n  'info__days__block__name', 'info__days__block__weather', 'info__days__block__weather__temperature',\r\n  'info__days__block__weather__img', 'map', ''];\r\n\r\nconst dom = [];\r\n\r\ntag.forEach((el, i) => {\r\n  dom.push(document.createElement(el));\r\n  dom[i].className = classes[i];\r\n});\r\n\r\nfunction addMore(parent, i) {\r\n  let k = i;\r\n  while (dom[k].className !== parent) k -= 1;\r\n  dom[k].appendChild(dom[i]);\r\n}\r\n\r\nfor (let i = 1; i < dom.length - 1; i += 1) {\r\n  if (dom[i].className === 'header' || dom[i].className === 'weather') {\r\n    dom[0].appendChild(dom[i]);\r\n  } else if (dom[i].className.indexOf('btn_top') !== -1 || dom[i].className === 'control__search__form') {\r\n    dom[2].appendChild(dom[i]);\r\n  } else if (dom[i].className.indexOf('row') !== -1) {\r\n    let k = i;\r\n    while (dom[k].className.indexOf('table') === -1) k -= 1;\r\n    dom[k].appendChild(dom[i]);\r\n  } else if (dom[i].className.indexOf('table') !== -1 || dom[i].className === 'control__search__form__btn'\r\n      || dom[i].className === 'map mapboxgl-map' || dom[i].className === 'info__now__location__date'\r\n      || dom[i].className === 'info__days__block__weather' || dom[i].className === 'info__days__block__weather__img'\r\n      || dom[i].className === 'info__now__location__date__time' || dom[i].className === 'info__now__weather__img') {\r\n    dom[i - 2].appendChild(dom[i]);\r\n  } else if (dom[i].className === 'info__now__weather__about__status') {\r\n    addMore('info__now__weather__about', i);\r\n  } else if (dom[i].className === 'info__days') {\r\n    dom[21].appendChild(dom[i]);\r\n  } else if (dom[i].className === 'map') {\r\n    dom[i].id = 'map';\r\n    dom[20].appendChild(dom[i]);\r\n  } else if (dom[i].className === 'info__now__weather') {\r\n    dom[23].appendChild(dom[i]);\r\n  } else if (dom[i].className === 'info__now__about') {\r\n    dom[22].appendChild(dom[i]);\r\n  } else if (dom[i].className === 'info__days__block') {\r\n    addMore('info__days', i);\r\n  } else if (dom[i].tagName === 'P') {\r\n    addMore('info__now__weather__about__status', i);\r\n  } else {\r\n    dom[i - 1].appendChild(dom[i]);\r\n  }\r\n}\r\n\r\n(function generateWords() {\r\n  for (let i = 0; i < numberOfDomWords.length; i += 1) {\r\n    dom[numberOfDomWords[i]].textContent = words[i];\r\n  }\r\n}());\r\n\r\nbody.appendChild(dom[0]);\r\n\n\n//# sourceURL=webpack://fancy-weather/./src/js/setDom.js?");

/***/ }),

/***/ "./src/js/weather.js":
/*!***************************!*\
  !*** ./src/js/weather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Weather)\n/* harmony export */ });\n/* harmony import */ var _languagesBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./languagesBox */ \"./src/js/languagesBox.js\");\n\r\n\r\nclass Weather {\r\n  constructor(weather) {\r\n    this.weather = weather;\r\n    this.languagesBox = _languagesBox__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n  }\r\n\r\n  setTime() {\r\n    const now = new Date();\r\n    const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;\r\n    document.querySelector('.info__now__location__date__time').textContent = currentTime;\r\n  }\r\n\r\n  getTodayWeather(...args) {\r\n    const [weather, now] = args;\r\n    return {\r\n      lang: document.querySelector('.control__languages__select').textContent,\r\n      today: `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`,\r\n      infoWather: [\r\n        weather.list[0].weather[0].description,\r\n        Math.round(weather.list[0].main.feels_like),\r\n        `${Math.round(weather.list[0].wind.speed)} m/s`,\r\n        `${weather.list[0].main.humidity}%`,\r\n      ],\r\n    };\r\n  }\r\n\r\n  setTodayWeather(...args) {\r\n    const [weather, now, lang] = args;\r\n    document.querySelector('.info__now__location__name').textContent = `${weather.city.name}, ${weather.city.country}`;\r\n    document.querySelector('.info__now__location__date__day').textContent = `${this.languagesBox.week[lang][now.getDay()]} ${now.getDate()} ${this.languagesBox.months[lang][now.getMonth()]} `;\r\n    document.querySelector('.info__now__weather__temperature').textContent = Math.round(weather.list[0].main.temp);\r\n    document.querySelector('.info__now__weather__img').src = `http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`;\r\n  }\r\n\r\n  setFutureWeather(weather, today, lang) {\r\n    const daysTemperature = document.querySelectorAll('.info__days__block__weather__temperature');\r\n    const daysIcon = document.querySelectorAll('.info__days__block__weather__img');\r\n    const dates = document.querySelectorAll('.info__days__block__name');\r\n    let count = 0;\r\n\r\n    Object.values(weather.list).forEach((item) => {\r\n      const [date, time] = item.dt_txt.split(' ');\r\n      if (date !== today && time === '15:00:00' && count < 3) {\r\n        dates[count].textContent = this.languagesBox.week[lang][new Date(item.dt * 1000).getDay()];\r\n        daysTemperature[count].textContent = Math.round(item.main.temp);\r\n        daysIcon[count].src = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;\r\n        count += 1;\r\n      }\r\n    });\r\n  }\r\n\r\n  resetWeather(weather) {\r\n    const status = document.querySelectorAll('.info__now__weather__about__status');\r\n    const now = new Date();\r\n\r\n    const { lang, today, infoWather } = this.getTodayWeather(weather, now);\r\n    this.setTodayWeather(weather, now, lang);\r\n\r\n    Object.keys(this.languagesBox.dayWeather[lang]).forEach((item) => {\r\n      this.languagesBox.dayWeather[lang][item][1] = infoWather[item];\r\n    });\r\n\r\n    for (let i = 0; i < status.length; i += 1) {\r\n      [status[i].firstElementChild.textContent, status[i].lastElementChild.textContent] = this.languagesBox.dayWeather[lang][i];\r\n    }\r\n\r\n    this.setFutureWeather(weather, today, lang);\r\n  }\r\n\r\n  initWeather() {\r\n    this.setTime();\r\n    this.resetWeather(this.weather);\r\n    setInterval(this.setTime, 6000);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fancy-weather/./src/js/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;