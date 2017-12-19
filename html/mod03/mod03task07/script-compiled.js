"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stopwatch = function (_React$Component) {
    _inherits(Stopwatch, _React$Component);

    function Stopwatch() {
        _classCallCheck(this, Stopwatch);

        return _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).apply(this, arguments));
    }

    _createClass(Stopwatch, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "stopwatch" },
                pad0(this.props.times.minutes),
                ":",
                pad0(this.props.times.seconds),
                ":",
                pad0(Math.floor(this.props.times.miliseconds))
            );
        }
    }]);

    return Stopwatch;
}(React.Component);

var Results = function (_React$Component2) {
    _inherits(Results, _React$Component2);

    function Results(props) {
        _classCallCheck(this, Results);

        return _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this, props));
    }

    _createClass(Results, [{
        key: "render",
        value: function render() {
            console.log('Props', this.props.results);
            // console.log('state',this.state);
            var resultsData = this.props.results;
            if (resultsData.length === 0) return React.createElement("ul", { className: "results" });
            resultsData.sort(compare);
            var counter = 0;
            var results = resultsData.map(function (result) {
                counter++;
                return React.createElement(
                    "li",
                    { key: result.number },
                    counter,
                    ". ",
                    result.time
                );
            });

            // const 
            return React.createElement(
                "ul",
                { className: "results" },
                results
            );
        }
    }]);

    return Results;
}(React.Component);

var Controls = function (_React$Component3) {
    _inherits(Controls, _React$Component3);

    function Controls() {
        _classCallCheck(this, Controls);

        return _possibleConstructorReturn(this, (Controls.__proto__ || Object.getPrototypeOf(Controls)).apply(this, arguments));
    }

    _createClass(Controls, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "nav",
                { className: "controls" },
                React.createElement(
                    "a",
                    { href: "#", className: "button", onClick: this.props.onStart },
                    "Start"
                ),
                React.createElement(
                    "a",
                    { href: "#", className: "button", onClick: this.props.onStop },
                    "Stop"
                ),
                React.createElement(
                    "a",
                    { href: "#", className: "button", onClick: this.props.onSave },
                    "Save"
                ),
                React.createElement(
                    "a",
                    { href: "#", className: "button", onClick: this.props.onReset },
                    "Reset"
                ),
                React.createElement(
                    "a",
                    { href: "#", className: "button", onClick: this.props.onClear },
                    "Reset list"
                )
            );
        }
    }]);

    return Controls;
}(React.Component);

var App = function (_React$Component4) {
    _inherits(App, _React$Component4);

    function App(props) {
        _classCallCheck(this, App);

        var _this4 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this4.state = {
            number: 1,
            running: false,
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            },
            results: []
        };
        return _this4;
    }

    _createClass(App, [{
        key: "onStart",
        value: function onStart() {
            var _this5 = this;

            console.log('start');
            if (!this.state.running) {
                this.setState({ running: true });
                this.watch = setInterval(function () {
                    return _this5.onStep();
                }, 10);
            }
        }
    }, {
        key: "onStep",
        value: function onStep() {
            console.log('step');
            if (!this.state.running) return;
            this.calculate();
        }
    }, {
        key: "onStop",
        value: function onStop() {
            console.log('stop');
            this.setState({ running: false });
            clearInterval(this.watch);
        }
    }, {
        key: "onReset",
        value: function onReset() {
            console.log('reset');
            if (this.running) return;
            var time = this.state.times;
            time = {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            };
            this.setState({ times: time });
        }
    }, {
        key: "onSave",
        value: function onSave() {
            console.log('save');
            if (this.running) return;
            var time = document.querySelector('.stopwatch').textContent;
            console.log(time);
            var result = this.state.results;
            var number = this.state.number++;
            result[number] = {
                number: number,
                time: time
            };
            this.setState({ results: result });
        }
    }, {
        key: "onClear",
        value: function onClear() {
            console.log('clear');
            if (this.running) return;
            var result = [];
            this.setState({ results: result });
            // document.querySelector('.results').innerHTML = '';
        }
    }, {
        key: "calculate",
        value: function calculate() {
            var time = this.state.times;
            time.miliseconds += 1;
            if (time.miliseconds >= 100) {
                time.seconds += 1;
                time.miliseconds = 0;
            }
            if (time.seconds > 60) {
                time.minutes += 1;
                time.seconds = 0;
            }
            this.setState({ times: time });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Controls, {
                    onStart: this.onStart.bind(this),
                    onStop: this.onStop.bind(this),
                    onSave: this.onSave.bind(this),
                    onReset: this.onReset.bind(this),
                    onClear: this.onClear.bind(this)
                }),
                React.createElement(Stopwatch, { times: this.state.times }),
                React.createElement(Results, { results: this.state.results })
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

function pad0(value) {
    var result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

function compare(time1, time2) {
    if (time1.time > time2.time) return 1;
    if (time2.time > time1.time) return -1;
    return 0;
}
