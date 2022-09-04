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

// const pulsingDot = {
//   width: this.mapSize,
//   height: this.mapSize,
//   data: new Uint8Array(this.mapSize * this.mapSize * 4),

//   onAdd() {
//     const canvas = document.createElement('canvas');
//     canvas.width = this.width;
//     canvas.height = this.height;
//     this.context = canvas.getContext('2d');
//   },

//   render() {
//     const duration = 1000;
//     const t = (performance.now() % duration) / duration;

//     const radius = (size / 2) * 0.3;
//     const outerRadius = (size / 2) * 0.7 * t + radius;
//     const { context } = this;

//     context.clearRect(0, 0, this.width, this.height);
//     context.beginPath();
//     context.arc(
//       this.width / 2,
//       this.height / 2,
//       outerRadius,
//       0,
//       Math.PI * 2,
//     );
//     context.fillStyle = `rgba(255, 200, 200,${1 - t})`;
//     context.fill();

//     context.beginPath();
//     context.arc(
//       this.width / 2,
//       this.height / 2,
//       radius,
//       0,
//       Math.PI * 2,
//     );
//     context.fillStyle = 'rgba(255, 100, 100, 1)';
//     context.strokeStyle = 'white';
//     context.lineWidth = 2 + 4 * (1 - t);
//     context.fill();
//     context.stroke();

//     this.data = context.getImageData(
//       0,
//       0,
//       this.width,
//       this.height,
//     ).data;

//     map.triggerRepaint();

//     return true;
//   },
// };
