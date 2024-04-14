import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  // getters
  get amount() { return this._amount; }

  get currency() { return this._currency; }

  // setters
  set amount(value) { this._amount = value; }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }
}
