// Zadanie 1.
function printText(hello, world) {
	console.log(`${hello} ${world}`);
}
printText('Witaj', 'Świecie');

// Zadanie 2.
const multiply = (x, y=1) => x * y;
console.log(multiply(2,5));
console.log(multiply(6,6));
console.log(multiply(5));

// Zadanie 3.
const average = (...args) => {
	let n = args.length === 0 ? 1 : args.length;
	var a = 0;
	args.forEach(arg => a += arg);
	console.log(a/n);
}
average(1);
average();
average(1,1);
average(1,1,2);
average(1,1,2,3);
average(1,1,2,3,5);
average(1,1,2,3,5,8);
average(1,1,2,3,5,8,13);

// Zadanie 4. 
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const [...rest] = grades;
average(...rest);

// Zadanie 5.
const data = [1, 4, 'Iwona', false, 'Nowak'];
const [first, second,,fourth] = data;
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


