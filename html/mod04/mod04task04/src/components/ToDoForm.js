import React from 'react';
import styles from './ToDoForm.css';


class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            descritpion: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        console.log('Formularz został wysłany.',this.state);
        event.preventDefault();
        this.props.addToDo(this.state.name, this.state.descritpion);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className={styles.FormName}>
                <label>
                    <span className={styles.Label}>Tytuł:</span> <input type="text" className={styles.Title} name="name" onChange={this.handleChange} value={this.state.title} placeholder="Tutaj wpisz tytuł zadania"/>
                </label><br />
                <label>
                    <span className={styles.Label}>Opis:</span> <textarea cols="40" rows="5" className={styles.Description} name="descritpion" onChange={this.handleChange} value={this.state.dscription} placeholder="Tutaj wpisz treść zadania"/>
                </label><br />
                <input type="submit" value="Submit" className={styles.Submit} />
            </form>
        );
    }
}



/*
const ToDoForm = props => {
    return (
        <form>
            <label>
                Tytuł: <input type="text" className={styles.Title} name="name" />
                Opis: <input type="text" className={styles.Description} name="descitpion" />
            </label>
            <input type="submit" value="Submit" onSubmit={props.onSubmit} />
        </form>
    );
};
*/
export default ToDoForm;