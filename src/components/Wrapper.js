import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import styles from '../sass/components/wrapper.module.scss';
const Wrapper = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__pageOne}></div>
            <div className={styles.wrapper__pageTwo}></div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Wrapper; 