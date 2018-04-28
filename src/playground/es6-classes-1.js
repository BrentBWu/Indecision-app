// constructor to take name and age (default to 0)
// getDescription - Andrew Mead is 26 year(s) old

// Car
// make
// model
// vin
// getDescription

class Person {
    constructor(name = 'Anonymous', age = '0') {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        // return this.name;
        return 'Hi, I am ' + this.name;
        // return 'Hi I am ${this.name}';
    }
    getDescription() {
        return this.name + ' is ' + this.age + ' year(s) old';
    }
}

const me = new Person('Andrew Mead','26');

console.log(me.getGretting());
console.log(me.getDescription());

const other = new Person();
console.log(other.getGretting());
console.log(other.getDescription());