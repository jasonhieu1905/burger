import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <label className={classes.Label}>{props.value}</label>
            <button disabled={props.disabled} className={classes.Less} onClick={props.removeIngredient}>Less</button>
            <button className={classes.More} onClick={props.addNewIngredient}>More</button>
        </div>
    )
}

export default buildControl;