// import { clearInterval } from "timers";
/*
console.log('timers');
class Stopwatch {
    constructor(display) {
        this.number = 1;
        this.running = false;
        this.display = display;
        this.reset();
        this.print(this.times);
    }
    reset() {
        console.log('reset');
        if (this.running) return;
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
        this.print();
    }
    print() {
        this.display.innerText = this.format(this.times);
    }
    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }
    start() {
        console.log('start');
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(),10);
        }
    }
    step() {
        console.log('step');
        if (!this.running) return;
        this.calculate();
        this.print();
    }
    stop() {
        console.log('stop');
        this.running = false;
        clearInterval(this.watch);
    }    
    calculate() {
        this.times.miliseconds += 1;
        if (this.times.miliseconds >= 100) {
            this.times.seconds += 1;
            this.times.miliseconds =0 ;
        }
        if (this.times.seconds > 60) {
            this.times.minutes += 1;
            this.times.seconds = 0;
        }
    }
    save() {
        if (this.running) return;
        console.log('save');
        var time = document.querySelector('.stopwatch').textContent;
        console.log(time);
        var ul = document.querySelector('.results');
        var li = document.createElement('li');
        var text = document.createTextNode(`${this.number}. ${time}`);
        li.appendChild(text);
        ul.appendChild(li);
        this.number++;
    }
    resetList() {
        console.log('reset list');
        if (this.running) return;
        this.reset();
        this.number = 1;
        document.querySelector('.results').textContent = '';
    }

}

function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

const stopwatch = new Stopwatch(document.querySelector('.stopwatch'));
var startButton = document.getElementById('start');
startButton.addEventListener('click',() => stopwatch.start());

var stopButton = document.getElementById('stop');
stopButton.addEventListener('click',() => stopwatch.stop());

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click',() => stopwatch.reset());

var saveButton = document.getElementById('save');
saveButton.addEventListener('click',() => stopwatch.save());

var resetListButton = document.getElementById('resetList');
resetListButton.addEventListener('click',() => stopwatch.resetList());
*/

ReactDOM.render(<App />,document.getElementById('app'));
