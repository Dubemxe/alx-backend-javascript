export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  convert() {
    return `[object ${this._code}]`;
  }
}
