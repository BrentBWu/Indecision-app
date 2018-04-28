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
    // method
    getGretting() {
        // return this.name;
        return 'Hi, I am ' + this.name;
        // return 'Hi I am ${this.name}';
    }
    getDescription() {
        return this.name + ' is ' + this.age + ' year(s) old';
    }
}

// sub class
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);// run father's constructor
        this.major = major;
    }
    hasMajor() {
        return !!this.major; // flip it twice to get boolean outcome, like major is string, !'major' is boolean
    }
    // Override
    getDescription() {
        let description = super.getDescription();
        
        if(this.hasMajor()) {
            description += ' Major is ' + this.major;
        }
        return description;
    }
}

// Traveler -> Person
// Add support for homeLocation
// Override getGreating
// 1. Hi, I am Andrew Mead. I'm visiting from Philadelphia
// 2. Hi, I am Andrew Mead.

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getGretting() {
        let gretting = super.getGretting();

        if(this.hasHomeLocation()) {
            return gretting += " I'm visiting from " + this.homeLocation;
        }
        return gretting;
    }
}

const me = new Traveler('Andrew Mead','26','China');
console.log(me);
console.log(me.hasHomeLocation());
console.log(me.getGretting());
// console.log(me);
// console.log(me.hasMajor());
// console.log(me.getGretting());
// console.log(me.getDescription());

const other = new Traveler();
console.log(other);
console.log(other.hasHomeLocation());
console.log(other.getGretting());
// console.log(other.hasMajor());
// console.log(other.getDescription());
// console.log(other.getGretting());