export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // code setter
  set code(value) { this._code = value; }

  // code getter
  get code() { return this._code; }

  // name setter
  set name(value) { this._name = value; }

  // name getter
  get name() { return this._name; }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
