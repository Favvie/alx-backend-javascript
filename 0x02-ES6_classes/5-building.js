export default class Building {
  constructor(sqft) {
    this.sqft = sqft;

    if (new.target !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  set sqft(value) {
    if (typeof value !== 'number') throw TypeError('Sqft must be a number');
    this._sqft = value;
  }

  get sqft() {
    return this._sqft;
  }
}
