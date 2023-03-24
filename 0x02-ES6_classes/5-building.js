export default class Building {
    constructor(sqft) {
        this.sqft = sqft
    }

    set sqft(value) {
        if (typeof value !== 'number') throw TypeError('Sqft must be a number')
        this._sqft = value
    }
}