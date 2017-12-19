class Stopwatch  extends React.Component {
    render() {
        return (
            <div className="stopwatch">{pad0(this.props.times.minutes)}:{pad0(this.props.times.seconds)}:{pad0(Math.floor(this.props.times.miliseconds))}</div>
        );
    }
}

class Results extends React.Component {
    render() {
        return (
            <ul className="results"></ul>
        );
    }
}

class Controls extends React.Component {
    render() {
        return (
            <nav className="controls">
                <a href="#" className="button" onClick = {this.props.onStart} >Start</a>
                <a href="#" className="button" onClick = {this.props.onStop}>Stop</a>
                <a href="#" className="button" onCLick = {this.props.onReset}>Reset</a>
                <a href="#" className="button" >Save</a>
                <a href="#" className="button" >Reset list</a>
            </nav>
        );
    }
}

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            running: false,
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        }
    }
    onStart() {
        console.log('start');
        if (!this.state.running) {
            this.setState({running: true});
            this.watch = setInterval(() => this.onStep(),10);
        }
    }
    onStep() {
        console.log('step');
        if (!this.state.running) return;
        this.calculate();
    }
    onStop() {
        console.log('stop');
        this.setState({running: false});
        clearInterval(this.watch);
    }
    onReset() {
        console.log('reset');
        if (this.running) return;
        var time = this.state.times;
        time = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        }
        this.setState({times: time});
    } 
    calculate() {
        var time = this.state.times;
        time.miliseconds += 1;
        if (time.miliseconds >= 100) {
            time.seconds += 1;
            time.miliseconds = 0 ;
        }
        if (time.seconds > 60) {
            time.minutes += 1;
            time.seconds = 0;
        }
        this.setState({times: time});
    }
    render() {
        return (
            <div>
                <Controls 
                    onStart = {this.onStart.bind(this)} 
                    onStop = {this.onStop.bind(this)}
                    onReset = {this.onReset.bind(this)}
                />
                <Stopwatch times = {this.state.times} />
                <Results />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}