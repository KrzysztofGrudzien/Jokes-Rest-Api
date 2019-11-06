import React from 'react';
import styles from '../sass/components/footer.module.scss';
import logo from '../assets/images/criscode.svg';
import iconGitHub from '../assets/images/iconGitHub.svg';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.footer__copyrights}>
                <a className={styles.footer__link}
                    href="http://criscode.pl" target="_blank">
                    <img src={logo} alt="logo of author" />
                </a>
                <a className={styles.footer__link}
                    href="https://github.com/KrzysztofGrudzien/Jokes-Rest-Api"
                    target="_blank">
                    <img src={iconGitHub} />
                </a>
            </p>
        </footer>
    )
}

export default Footer; 