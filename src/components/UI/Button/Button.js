import React from 'react';
import classes from './Button.css';
import Aux from './../../../hoc/Aux/Aux';
const Button = (props) => {
    return (
        <Aux>
            <button onClick={props.click} className={[classes.Button, classes[props.class]].join(' ')}>
                {props.children}
            </button>
        </Aux>
    )
}

export default Button;