import React from 'react';
import styles from './ToDoList.css';
import ToDo from './ToDo';

const ToDoList = props => {
        console.log(props.list);
        return(
            <div className={styles.ToDoListContainer}>
                <ToDo items={props.list} alert={props.alert}/>
            </div>
        );
};
export default ToDoList;