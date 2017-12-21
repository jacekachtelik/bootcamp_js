import React from 'react';
import styles from './Title.css';

const Title = props => {
    return(
        <div className = {styles.TitleContainer}>
            <h1 className = {styles.HeaderStyle}>Lista ToDo</h1>
            <p className = {styles.CounterStyle}>Ilość zadań do wykonania: {props.title}</p>
        </div>

    );
};
export default Title;