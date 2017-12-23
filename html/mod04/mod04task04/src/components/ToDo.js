import React from 'react';
import styles from './ToDo.css';

const ToDo = props => {
    let counter = 0;
    let items = props.items.map(item => {
        counter++;
        return (
            <div className={styles.ToDoItem} key={counter}>
                <div className={styles.ToDoItemHeader} >Zadanie nr.: {counter} <span className={styles.ToDoItemName}>{item.title}</span></div>
                <div className={styles.ToDoItemDescription} >{item.description}</div>
                <a href="#" className={styles.RemoveButton} onClick={props.alert(item.id)} >Usuń</a>
            </div>
        );
    });
    return(
        <div className={styles.ToDoItemsContainer} key={counter}>
            {items}
        </div>
    );
};

export default ToDo;