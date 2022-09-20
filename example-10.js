"use strict";
// Here I have defined a class with type script. 
// Take a look at how the properties are typed. 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Student = exports.Course = void 0;
// https://www.typescriptlang.org/docs/handbook/2/classes.html#handbook-content
// Complete the Course class below. 
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.describe = function () {
        return "".concat(this.name, " is ").concat(this.age);
    };
    return Person;
}());
var joe = new Person('Joe', 33);
// Define a Course. A Course a title: string and a units: number
var Course = /** @class */ (function () {
    function Course(title, units) {
        this.title = title;
        this.units = units;
    }
    Course.prototype.describe = function () {
        return "".concat(this.title, " : ").concat(this.units, " units");
    };
    return Course;
}());
exports.Course = Course;
// Define a Student class. Student extends Person. A Student 
// has an array of Courses and a cohort which is: junior or senior
// Add enroll method that takes a Course as parameter and adds 
// this to the course array
var Cohort;
(function (Cohort) {
    Cohort[Cohort["junior"] = 0] = "junior";
    Cohort[Cohort["senior"] = 1] = "senior";
})(Cohort || (Cohort = {}));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, cohort, courses) {
        var _this = _super.call(this, name, age) || this;
        _this.cohort = cohort,
            _this.courses = courses;
        return _this;
    }
    Student.prototype.enroll = function (course) {
        this.courses.push(course);
    };
    return Student;
}(Person));
exports.Student = Student;
exports["default"] = Person;
