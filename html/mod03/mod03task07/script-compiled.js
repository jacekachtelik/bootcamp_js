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

    function Results() {
        _classCallCheck(this, Results);

        return _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).apply(this, arguments));
    }

    _createClass(Results, [{
        key: "render",
        value: function render() {
            return React.createElement("ul", { className: "results" });
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
                    { href: "#", className: "button", onCLick: this.props.onReset },
                    "Reset"
                ),
                React.createElement(
                    "a",
                    { href: "#", className: "button" },
                    "Save"
                ),
                React.createElement(
                    "a",
                    { href: "#", className: "button" },
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
            }
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
                    onReset: this.onReset.bind(this)
                }),
                React.createElement(Stopwatch, { times: this.state.times }),
                React.createElement(Results, null)
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
