var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var num = 24;
var FullName = "Mounika";
var student = true;
var arr = [1, 2, 3, 4, 5];
var tup = ["CSE", 52];
var week;
(function (week) {
    week[week["Sunday"] = 1] = "Sunday";
    week[week["Monday"] = 2] = "Monday";
    week[week["Tuesday"] = 3] = "Tuesday";
    week[week["Wednesday"] = 4] = "Wednesday";
    week[week["Thursday"] = 5] = "Thursday";
    week[week["Friday"] = 6] = "Friday";
    week[week["Saturday"] = 7] = "Saturday";
})(week || (week = {}));
console.log(num);
console.log(FullName);
console.log(student);
console.log(arr);
console.log(tup);
console.log(week);
function addition(a, b) {
    return a + b;
}
console.log("Addition is:" + addition(2, 4));
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize("mounika"));
var user = {
    name: "Mounika",
    age: 21,
    email: "20981a0552@raghuenggcollege.in"
};
console.log("Name: " + user.name + " Age: " + user.age + " Email: " + user.email);
var car = /** @class */ (function () {
    function car() {
        this.make = "";
        this.model = "";
        this.year = 0;
    }
    car.prototype.displayInfo = function () {
        console.log("Car Details are: ");
        console.log("Make: " + this.make);
        console.log("Model: " + this.model);
        console.log("Year: " + this.year);
    };
    return car;
}());
var c = new car();
c.make = "Corolla";
c.model = "Toyota";
c.year = 2001;
c.displayInfo();
var array = [1, 2, 3, 4];
function reversedArray(array) {
    console.log("Hello");
    var r = __spreadArray([], array, true);
    return r.reverse();
}
console.log("Reveresed Array is : " + reversedArray(array));
