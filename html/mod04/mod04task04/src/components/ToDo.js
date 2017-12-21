import React from 'react';
import styles from './ToDo.css';

const ToDo = props => {
    let counter = 0;
    let items = props.items.map(item => {
        counter++;
        return (
            <div className = {styles.ToDoItem} key={counter}>
                <div className={styles.ToDoItemHeader}>Zadanie nr.: {item.id} <span className={styles.ToDoItemName}>{item.title}</span></div>
                <div className={styles.ToDoItemDescription}>{item.description}</div>
                <a href="#" className={styles.RemoveButton} onClick={item.removeToDo} >Remove</a>
            </div>
        );
    });
    return(
        <div className = {styles.ToDoItemsContainer} key={counter}>
            {items}
        </div>
    );
};
export default ToDo;