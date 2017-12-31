import React from 'react';
import styles from './ToDoList.css';
import ToDo from './ToDo';

const ToDoList = props => {
        return(
            <ul className={styles.ToDoListContainer}>
                <ToDo items={props.list} remove={props.remove}/>
            </ul>
        );
};
export default ToDoList;