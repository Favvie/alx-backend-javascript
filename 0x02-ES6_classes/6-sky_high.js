import Building from './5-building';

export default class SkyHigh extends Building {
  constructor(sqft, floors) {
    super(sqft);
    // this.sqft = sqft;
    this.floors = floors;
  }

  //   set sqft(value) {
  //     if (typeof value !== 'number') throw TypeError('Sqft must be a number');
  //     this._sqft = value;
  //   }

  //   get sqft() {
  //     return this._sqft;
  //   }

  set floors(value) {
    if (typeof value !== 'number') throw TypeError('Floors must be a number');
    this._floors = value;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
