import React from 'react';
import stylesBtn from '../sass/components/buttons.module.scss';
const Button = (props) => {
    return <button onClick={props.click} className={stylesBtn.btn}>{props.number}</button>
}

export default Button;