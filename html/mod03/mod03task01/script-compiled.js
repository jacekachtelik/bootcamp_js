'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Zadanie 1.
function printText(hello, world) {
    console.log(hello + ' ' + world);
}
printText('Witaj', 'Świecie');

// Zadanie 2.
var multiply = function multiply(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return x * y;
};
console.log(multiply(2, 5));
console.log(multiply(6, 6));
console.log(multiply(5));

// Zadanie 3.
var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var n = args.length === 0 ? 1 : args.length;
    var a = 0;
    args.forEach(function (arg) {
        return a += arg;
    });
    console.log(a / n);
};
average(1);
average();
average(1, 1);
average(1, 1, 2);
average(1, 1, 2, 3);
average(1, 1, 2, 3, 5);
average(1, 1, 2, 3, 5, 8);
average(1, 1, 2, 3, 5, 8, 13);

// Zadanie 4. 
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
var rest = grades.slice(0);

average.apply(undefined, _toConsumableArray(rest));

// Zadanie 5.
var data = [1, 4, 'Iwona', false, 'Nowak'];
var first = data[0],
    second = data[1],
    fourth = data[3];

console.log(first, second, fourth);

/*
const sayHello = () => alert('Hello World!');
sayHello();


var greeting = 'Hello User!';
function greetWorld(isGreeting) {
    if (isGreeting) { // kod wykona się jeśli flaga isGreeting = true
        var greeting = 'Hello World!'; // (A) zasięg: cała funkcja
        return greeting;
    }
    return greeting; // zadziała hoisting i greeting nie będzie tym czym się spodziewamy
}
console.log(greetWorld(false)); // undefined

function greetWorld2(isGreeting) {
    if (isGreeting) {
        let greeting = 'Hello World!';
        return greeting;
    }
    return greeting;
}
console.log(greetWorld2(false));  

function sayHelloTo(person) {
    console.log(`Hello, ${person}, nice to meet you!`);
}
sayHelloTo('Jacek');

const numbers = [1, 2, 3];
const numbersPlusOne = numbers.map( x => x + 1 );
console.log(numbers);
console.log(numbersPlusOne);

function getCoords() {
    return {
        x: 2,
        y: 5
    };
}

const coords = getCoords();
const x = coords.x;
const y = coords.y;
console.log(x, y);

function getCoords2() {
    return {
        a: 2,
        b: 5
    };
}


const {a, b} = getCoords2();
console.log(a, b);

const names = ['Jan', 'Zosia', 'Zbyszek', 'Kacper', 'Tomek', 'Magda'];
const [first, second, , fourth] = names; // puste miejsce pomiędzy second a fourth
console.log(first,second, fourth);*/
