export default class HolbertonCourse {
	constructor(name, length, students) {
		this._name = name;
		this._length = length;
		this._students = students;
	}

	get name() {
		return this._name;
	}

	set name(newName) {
		if (typeof newName !== "string") {
			throw TypeError("Name must be a string");
		}

		this._name = newName;
	}

	// length getter and setter

	get length() {
		return this._length;
	}

	set length(newLength) {
		if (typeof newLength !== "number") {
			throw TypeError("Length must be a number");
		}

		this._length = this.length;
	}

	// students getter and setter

	get students() {
		return this._students;
	}

	set students(newStudents) {
		if (newStudents.isArray()) {
			throw TypeError("Students must be an array");
		}

		this._students = this.students;
	}
}
