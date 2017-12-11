'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import { clearInterval } from "timers";
console.log('timers');

var Stopwatch = function () {
    function Stopwatch(display) {
        _classCallCheck(this, Stopwatch);

        this.number = 1;
        this.running = false;
        this.display = display;
        this.reset();
        this.print(this.times);
    }

    _createClass(Stopwatch, [{
        key: 'reset',
        value: function reset() {
            console.log('reset');
            if (this.running) return;
            this.times = {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            };
            this.print();
        }
    }, {
        key: 'print',
        value: function print() {
            this.display.innerText = this.format(this.times);
        }
    }, {
        key: 'format',
        value: function format(times) {
            return pad0(times.minutes) + ':' + pad0(times.seconds) + ':' + pad0(Math.floor(times.miliseconds));
        }
    }, {
        key: 'start',
        value: function start() {
            var _this = this;

            console.log('start');
            if (!this.running) {
                this.running = true;
                this.watch = setInterval(function () {
                    return _this.step();
                }, 10);
            }
        }
    }, {
        key: 'step',
        value: function step() {
            console.log('step');
            if (!this.running) return;
            this.calculate();
            this.print();
        }
    }, {
        key: 'stop',
        value: function stop() {
            console.log('stop');
            this.running = false;
            clearInterval(this.watch);
        }
    }, {
        key: 'calculate',
        value: function calculate() {
            this.times.miliseconds += 1;
            if (this.times.miliseconds >= 100) {
                this.times.seconds += 1;
                this.times.miliseconds = 0;
            }
            if (this.times.seconds > 60) {
                this.times.minutes += 1;
                this.times.seconds = 0;
            }
        }
    }, {
        key: 'save',
        value: function save() {
            if (this.running) return;
            console.log('save');
            var time = document.querySelector('.stopwatch').textContent;
            console.log(time);
            var ul = document.querySelector('.results');
            var li = document.createElement('li');
            var text = document.createTextNode(this.number + '. ' + time);
            li.appendChild(text);
            ul.appendChild(li);
            this.number++;
        }
    }, {
        key: 'resetList',
        value: function resetList() {
            console.log('reset list');
            if (this.running) return;
            this.reset();
            this.number = 1;
            document.querySelector('.results').textContent = '';
        }
    }]);

    return Stopwatch;
}();

function pad0(value) {
    var result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

var stopwatch = new Stopwatch(document.querySelector('.stopwatch'));
var startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
    return stopwatch.start();
});

var stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
    return stopwatch.stop();
});

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function () {
    return stopwatch.reset();
});

var saveButton = document.getElementById('save');
saveButton.addEventListener('click', function () {
    return stopwatch.save();
});

var resetListButton = document.getElementById('resetList');
resetListButton.addEventListener('click', function () {
    return stopwatch.resetList();
});
