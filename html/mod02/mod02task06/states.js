var Counter = React.createClass({
    getDefaultProps: function () {
        console.log('1. getDefaultProps - Pobranie domyślnych właściwości');
    },
    getInitialState: function () {
        console.log('2. getInitialState - Pobranie domyślnego stanu');
        return {
            counter: 0
        };
    },
    componentWillMount: function () {
        console.log('3. componentWillMount - Zanim zostanie wyrenderowany');
    },
    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        })
    },
    render: function () {
        console.log('4. render - Renderowanie komponentów');
        return (
            React.createElement('div',{},
                React.createElement('p',{},'Licznik: ' + this.state.counter),
                React.createElement('button',{onClick: this.decrement},"-"),
                React.createElement('button',{onClick: this.increment},"+")

            )
        );
    },
    componentDidMount: function () {
        console.log('5. componentDidMount - Renderowanie komponentów');
    },
    componentWillReceiveProps: function () {
        console.log('6. componentWillReceiveProps - Kolejne otrzymywanie propsów. Ale tego już nie widać');
        console.log('Propsy',this.props);
    },
    componentWillUnmount: function () {
        console.log('7. componentWillUnmount - Usuwanie komponentu');
    }
});

var counter = React.createElement('div',{},
	React.createElement(Counter),
	React.createElement(Counter),
);
ReactDOM.render(counter,document.getElementById('app'));