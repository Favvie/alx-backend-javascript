export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    }
  }

  get name() {
    return this._name;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    }
  }

  get length() {
    return this._length;
  }

  set students(value) {
    if (value instanceof Array) {
      this._students = value;
    }
  }

  get students() {
    return this._students;
  }
}
