import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem active>Burger Builder</NavigationItem>
            <NavigationItem>Check out</NavigationItem>
        </ul>
    )
}

export default NavigationItems;