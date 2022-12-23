export default class Currency {
	constructor(code, name) {
		this._code = code;
		this._name = name;
	}

	get code() {
		return this._code;
	}

	set code(codeValue) {
		if (typeof codeValue !== "string") {
			throw TypeError("Code must be a string");
		}
		this._code = codeValue;
	}

	// name setter

	get name() {
		return this._name;
	}

	set name(nameValue) {
		if (typeof nameValue !== "string") {
			throw TypeError("Name must be a string");
		}
		this._name = nameValue;
	}

	displayFullCurrency() {
		return `${this._name} (${this._code})`;
	}
}
