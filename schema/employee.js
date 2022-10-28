export class Employee {
    constructor(firstName, department, designation, salary, raiseEligible) {
        this._firstName = firstName;
        this._department = department;
        this._designation = designation;
        this._salary = salary;
        this._raiseEligible = raiseEligible;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get department() {
        return this._department;
    }

    set department(value) {
        this._department = value;
    }

    get designation() {
        return this._designation;
    }

    set designation(value) {
        this._designation = value;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        this._salary = value;
    }

    get raiseEligible() {
        return this._raiseEligible;
    }

    set raiseEligible(value) {
        this._raiseEligible = value;
    }


}
