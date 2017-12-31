import React from 'react';
import styles from './ToDo.css';

const ToDo = props => {
    let counter = 0;
    console.log(props);
    let items = props.items.map(item => {
        counter++;
        return (
            <li className={styles.ToDoItem} key={item.id}>
                <div className={styles.ToDoItemHeader} >Zadanie nr.: {counter} <span className={styles.ToDoItemName}>{item.title}</span></div>
                <div className={styles.ToDoItemDescription} >{item.description}</div>
                <input type="button" className={styles.RemoveButton} onClick={e => props.remove(item.id)} value="Usuń" />
            </li>
        );
    });
    return(
        <div className={styles.ToDoItemsContainer} key={counter}>
            {items}
        </div>
    );
};

export default ToDo;