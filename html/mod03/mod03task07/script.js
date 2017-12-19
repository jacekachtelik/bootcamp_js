class Stopwatch  extends React.Component {
    render() {
        return (
            <div className="stopwatch">{pad0(this.props.times.minutes)}:{pad0(this.props.times.seconds)}:{pad0(Math.floor(this.props.times.miliseconds))}</div>
        );
    }
}

class Results extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('Props',this.props.results);
        // console.log('state',this.state);
        var resultsData = this.props.results;
        if (resultsData.length === 0) return (<ul className="results"></ul>);
        resultsData.sort(compare);
        var counter = 0;
        var results = resultsData.map(function(result){
            counter++;
            return <li key={result.number}>{counter}. {result.time}</li>
        });

        // const 
        return (
            <ul className="results">
                {results}
            </ul>
            
        );
    }
}

class Controls extends React.Component {
    render() {
        return (
            <nav className="controls">
                <a href="#" className="button" onClick = {this.props.onStart} >Start</a>
                <a href="#" className="button" onClick = {this.props.onStop}>Stop</a>
                <a href="#" className="button" onClick = {this.props.onSave}>Save</a>
                <a href="#" className="button" onClick = {this.props.onReset}>Reset</a>
                <a href="#" className="button" onClick = {this.props.onClear}>Reset list</a>
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
            },
            results: []            
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
    onSave() {
        console.log('save');
        if (this.running) return;
        var time = document.querySelector('.stopwatch').textContent;
        console.log(time);
        var result = this.state.results;
        var number = this.state.number++;
        result[number] = {
            number: number,
            time: time
        }
        this.setState({results: result});       
    } 
    onClear() {
        console.log('clear');
        if (this.running) return;
        var result = [];
        this.setState({results:result});
        // document.querySelector('.results').innerHTML = '';
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
                    onSave = {this.onSave.bind(this)}
                    onReset = {this.onReset.bind(this)}
                    onClear = {this.onClear.bind(this)}
                />
                <Stopwatch times = {this.state.times} />
                <Results results = {this.state.results}/>
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

function compare(time1,time2) {
    if (time1.time > time2.time) return 1;
    if (time2.time > time1.time) return -1;
    return 0;
}