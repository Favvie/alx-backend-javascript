export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }

  set maxStudentsSize(value) {
    if (typeof value === 'number') {
      this._maxStudentsSize = value;
    }
  }

  get maxStudentsSize() {
    return this._maxStudentsSize;
  }
}
