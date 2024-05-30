export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  value() {
    return this._size;
  }

  convert() {
    return this._location;
  }
}
