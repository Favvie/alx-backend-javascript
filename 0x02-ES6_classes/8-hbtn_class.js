export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(Value) {
    if (typeof Value !== 'number') {
      throw TypeError('Size must be a number');
    }
    this._size = Value;
  }

  get location() {
    return this._location;
  }

  set location(Value) {
    if (typeof Value !== 'string') {
      throw TypeError('Location must be a string');
    }
    this._location = Value;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return null;
  }
}
