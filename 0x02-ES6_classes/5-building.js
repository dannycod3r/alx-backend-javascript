export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building
        && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }

  // setter
  set sqft(value) {
    if (typeof value !== 'number') {
      throw new Error('sqft must be a number');
    }
    this._sqft = value;
  }

  // getter
  get sqft() { return this._sqft; }
}
