
import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';


class OrderSummary extends Component {

    componentWillUpdate() {
        console.log('will update');
    }

    render() {
        const orderKeys = Object.keys(this.props.ingredients);
        const OrderSummary = orderKeys.map((item, index) => {
            return <li key={index}>
                <span style={{ textTransform: 'capitalize' }}>{item}: </span>
                {this.props.ingredients[item]}
            </li>
        })

        return (<Aux>
            <h3>Your Order</h3>
            <p>A delicious hamburger with following ingredients</p>
            <ul>
                {OrderSummary}
            </ul>
            <p>Total price: {this.props.price}</p>
            <h4>Continue to checkout</h4>
        </Aux>)
    }
} 

export default OrderSummary;