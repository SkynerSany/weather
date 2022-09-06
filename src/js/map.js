export default class Map {
  constructor(location) {
    this.location = location.loc.split(',').map((el) => +el).reverse();
    this.mapSize = 200;
    this.map = null;
  }

  setMap() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2t5bmVyIiwiYSI6ImNrNDBhaDFocTAxb3AzZG9jNWY3Yjd4Z2cifQ.w0IAisX2wnyh_XL-Hx1Fjw';
    this.map = new mapboxgl.Map({
      container: 'map',
      center: this.location,
      zoom: 12,
      style: 'mapbox://styles/mapbox/streets-v9',
    });
  }

  resetPosition(pos) {
    this.map.setCenter(pos);
  }
}
