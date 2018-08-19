import React, { Component } from 'react';
import Aux from './../../hoc/Aux/Aux';
import Burger from './../../components/Burger/Burger';
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary';
import Modal from './../../components/UI/Modal/Modal';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import Button from './../../components/UI/Button/Button';
class BurgerBuilder extends Component {

    price = {
        salad: 0.3,
        meat: 2,
        bacon: 0.5,
        cheese: 0.2
    }

    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            bacon: 0,
            cheese: 0
        },
        total: 0,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState(ingredients) {
        let keys = Object.keys(ingredients);
        let sum = 0;
        for(let key of keys) {
            sum += ingredients[key];
        }
        this.setState({purchasable: sum > 0});
    }

    addNewIngredient = (type) => {
        let ingredients = {...this.state.ingredients};
        let oldCount = ingredients[type];
        let newCount = oldCount + 1;
        ingredients[type] = newCount;

        let oldPrice = this.state.total;
        let newPrice =  oldPrice + this.price[type];
        this.setState({
            ingredients: {...ingredients},
            total: newPrice 
        });
        this.updatePurchaseState(ingredients);
    }

    removeIngredient = (type) => {
        let ingredients = {...this.state.ingredients};
        let oldCount = ingredients[type];
        if (oldCount <= 0) {
            return ;
        }
        let newCount = oldCount - 1;
        ingredients[type] = newCount;

        let oldPrice =  this.state.total;
        let newPrice =  oldPrice - this.price[type];
        this.setState({
            ingredients: {...ingredients},
            total: newPrice 
        });
        this.updatePurchaseState(ingredients);
    }

    purchase = () => {
        this.setState({purchasing: true});
    }

    handleCloseModal = () => {
        this.setState({purchasing: false});
    }

    handlePurchaseCancel = () => {
        this.handleCloseModal();
    }

    handlePurchaseContinue = () => {
        alert('continue');
    }

    render() {
        const disabledIngredients = {...this.state.ingredients};
        for(let key in disabledIngredients){
            disabledIngredients[key] = disabledIngredients[key] <= 0;
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <Modal show={this.state.purchasing} modalClosed={this.handleCloseModal}>
                    <OrderSummary price={this.state.total} ingredients={this.state.ingredients} />
                    <Button click={this.handlePurchaseCancel} class={'Danger'}>CANCEL</Button>
                    <Button click={this.handlePurchaseContinue} class={'Success'}>OK</Button>
                </Modal>
                <BuildControls 
                    addNewIngredient={this.addNewIngredient}
                    removeIngredient={this.removeIngredient}
                    disabledIngredients={disabledIngredients}
                    purchasable={this.state.purchasable}
                    price={this.state.total}
                    ordered={this.purchase} />
            </Aux>
        );
    }
}

export default BurgerBuilder;