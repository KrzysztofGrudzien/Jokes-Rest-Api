import React from 'react';
import styles from '../sass/components/main.module.scss';

const Jokes = (props) => {
    const jokes = props.jokes.map(joke => (
        <li key={joke.id} className={styles.app__DataItem}>{joke.joke}</li>
    ));

    return (
        <ul className={!props.active ? styles.app__DataList : styles.app__DataList2}>
            {jokes}
        </ul>
    )
}

export default Jokes;