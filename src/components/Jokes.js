import React from 'react';
import styles from '../sass/components/main.module.scss';
const Jokes = (props) => {

    const jokes = props.jokes.map(joke => (
        <li key={joke.id} className={styles.app__DataItem}>{joke.joke}</li>
    ));
    return (
        <ul className={styles.app__DataList}>
            {jokes}
        </ul>
    )
}

export default Jokes;