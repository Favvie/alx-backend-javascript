export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(codeValue) {
    this._code = codeValue;
  }

  // name setter

  get name() {
    return this._name;
  }

  set name(nameValue) {
    this._name = nameValue;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
