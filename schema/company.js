export class Company {
    constructor(name, employees) {
        this._name = name;
        this._employees = employees;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get employees() {
        return this._employees;
    }

    set employees(value) {
        this._employees = value;
    }
}
