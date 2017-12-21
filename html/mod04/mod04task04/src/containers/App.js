import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            counter: 0
        };
        ;

    }
    addToDo(val) {
        const todo = {
            text: val,
            id: uuid.v4()
        };
        const data = [...this.state.data,todo];
        let counter = data.length;
        this.setState({data});
        this.setState({counter});
    }
    removeToDo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return(
            <div className={style.TodoApp}>
                <Title title = {this.state.counter} />
            </div>
        );
    }
}

export default App;