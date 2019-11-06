import React from 'react';
import styles from '../sass/components/header.module.scss';
const Header = () => {

    const getData = () => {
        let today = new Date().toISOString().slice(0, 10);
        return today;
    }

    return (
        <header className={styles.header}>
            <div className={styles.header__box}>
                <a className={styles.header__link}
                    href="https://api.chucknorris.io"
                    target="_blank">https://api.chucknorris.io
                </a>
                <a className={styles.header__link}
                    href="http://www.icndb.com/api/"
                    target="_blank">http://www.icndb.com/api/
                </a>
                <span>{getData()}</span>
            </div>
            <h1 className={styles.header__title}>jokes news</h1>
            <h2 className={styles.header__titleDescription}>chuck norris jokes api</h2>
        </header>
    )
}

export default Header; 