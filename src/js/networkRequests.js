export default class NetworkRequests {
  request(url) {
    return fetch(url)
      .then((response) => response.json())
      .then((commits) => commits);
  }

  getLocation() {
    return this.request('https://ipinfo.io/json?token=b146feb3614af8');
  }

  getWeather(location, state, language, temperature) {
    return this.request(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${location},${state}&lang=${language}&units=${temperature}&APPID=6ebdd0fd3d344c146430ede697227fdf`);
  }

  getBackground(town) {
    return this.request(`https://api.unsplash.com/photos/random?query=town,${town}&client_id=07b8adbc371366a8a45043f03b4b409735ce0ad155a68e10c8dfcddeaa261b78`);
  }

  getNewLocation(town) {
    return this.request(`https://api.opencagedata.com/geocode/v1/json?q=${town}&key=a7f2d1bad2c34af5ae3327dbcc36bd1b`);
  }
}
