import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import ToDoList from '../Components/ToDolist'

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: props.todo,
            counter: props.todo.length
        };
    }
    addToDo(val) {
        const todo = {
            text: val,
            id: uuid.v4()
        };
        const data = [...this.state.data,todo];
        let counter = data.length;
        this.setState({data,counter});
    }
    removeToDo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return(
            <div className={style.TodoApp}>
                <Title title = {this.state.counter} />
                <ToDoList list = {this.state.data} removeToDo={this.removeToDo.bind(this)} />
            </div>
        );
    }
}
export default App;