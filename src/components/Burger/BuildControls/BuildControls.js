import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Total Price : {props.price.toFixed(2)}</p>
            {controls.map((item, index) => {
                return <BuildControl
                    addNewIngredient={() => props.addNewIngredient(item.type)}
                    removeIngredient={() => props.removeIngredient(item.type)}
                    disabled={props.disabledIngredients[item.type]}
                    key={index}
                    type={item.type}
                    value={item.label} />
            })}
            <button disabled={!props.purchasable} 
                className={classes.OrderButton}
                onClick={props.ordered}>ORDER NOW</button>
        </div>
    )
}

export default buildControls;