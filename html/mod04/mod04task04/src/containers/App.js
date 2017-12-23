import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import ToDoList from '../components/ToDoList';
import ToDoForm from "../components/ToDoForm";

class App extends React.Component{
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            data: props.todo,
            counter: props.todo.length
        };
    }
    addToDo(name, description) {
        const todo = {
            title: name,
            description:description,
            id: uuid.v4()
        };
        const data = [...this.state.data,todo];
        let counter = data.length;
        this.setState({data,counter});
        console.log(this.state.data);
    }
    removeToDo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    alert(id) {
        console.log('Metoda alert z id: ' + id);
    }
    render() {
        return(
            <div className={style.TodoApp}>
                <Title title = {this.state.counter} />
                <ToDoForm addToDo={this.addToDo.bind(this)}/>
                <ToDoList list = {this.state.data} alert={this.alert.bind(this)} />
            </div>
        );
    }
}
export default App;