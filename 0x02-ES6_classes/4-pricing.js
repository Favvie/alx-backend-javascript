import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amountValue) {
    if (typeof amountValue !== 'number') {
      throw TypeError('Amount must be a number');
    }
    this._amount = amountValue;
  }

  set currency(currencyValue) {
    if (currencyValue instanceof Currency) {
      this._currency = currencyValue;
    }
    throw TypeError('wRnog currency type');
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} ${this._currency._code}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' && typeof conversionRate !== 'number') {
      throw TypeError('Amoung or conversionrate must be number');
    }
    return amount * conversionRate;
  }
}
