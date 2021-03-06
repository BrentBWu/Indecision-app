'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// constructor to take name and age (default to 0)
// getDescription - Andrew Mead is 26 year(s) old

// Car
// make
// model
// vin
// getDescription

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }
    // method


    _createClass(Person, [{
        key: 'getGretting',
        value: function getGretting() {
            // return this.name;
            return 'Hi, I am ' + this.name;
            // return 'Hi I am ${this.name}';
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            return this.name + ' is ' + this.age + ' year(s) old';
        }
    }]);

    return Person;
}();

// sub class


var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age, major) {
        _classCallCheck(this, Student);

        // run father's constructor
        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

        _this.major = major;
        return _this;
    }

    _createClass(Student, [{
        key: 'hasMajor',
        value: function hasMajor() {
            return !!this.major; // flip it twice to get boolean outcome, like major is string, !'major' is boolean
        }
        // Override

    }, {
        key: 'getDescription',
        value: function getDescription() {
            var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescription', this).call(this);

            if (this.hasMajor()) {
                description += ' Major is ' + this.major;
            }
            return description;
        }
    }]);

    return Student;
}(Person);

// Traveler -> Person
// Add support for homeLocation
// Override getGreating
// 1. Hi, I am Andrew Mead. I'm visiting from Philadelphia
// 2. Hi, I am Andrew Mead.

var Traveler = function (_Person2) {
    _inherits(Traveler, _Person2);

    function Traveler(name, age, homeLocation) {
        _classCallCheck(this, Traveler);

        var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age));

        _this2.homeLocation = homeLocation;
        return _this2;
    }

    _createClass(Traveler, [{
        key: 'hasHomeLocation',
        value: function hasHomeLocation() {
            return !!this.homeLocation;
        }
    }, {
        key: 'getGretting',
        value: function getGretting() {
            var gretting = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), 'getGretting', this).call(this);

            if (this.hasHomeLocation()) {
                return gretting += " I'm visiting from " + this.homeLocation;
            }
            return gretting;
        }
    }]);

    return Traveler;
}(Person);

var me = new Traveler('Andrew Mead', '26', 'China');
console.log(me);
console.log(me.hasHomeLocation());
console.log(me.getGretting());
// console.log(me);
// console.log(me.hasMajor());
// console.log(me.getGretting());
// console.log(me.getDescription());

var other = new Traveler();
console.log(other);
console.log(other.hasHomeLocation());
console.log(other.getGretting());
// console.log(other.hasMajor());
// console.log(other.getDescription());
// console.log(other.getGretting());
