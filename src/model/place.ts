export class Place {
  text = '';
  zone = '';
  city = '';
  lat = 0;
  lng = 0;
  constructor(o?) {
    Object.assign(this, o);
  }
}
