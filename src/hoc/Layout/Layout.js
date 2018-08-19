import React, { Component } from 'react';
import Aux from './../Aux/Aux';
import classes from './Layout.css';
import Toolbar from './../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        isOpenSideDrawer : false
    }

    isClosedSideDrawer = () => {
        this.setState({isOpenSideDrawer: false})
    }

    toggleDrawer = () => {
        this.setState((prevState) => {
            return {isOpenSideDrawer: !prevState.isOpenSideDrawer}
        })
    }

    render() {
        return (<Aux>
            <Toolbar toggleDrawer={this.toggleDrawer} />
            <SideDrawer open={this.state.isOpenSideDrawer} closed={this.isClosedSideDrawer} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>)
    }
}


export default Layout;