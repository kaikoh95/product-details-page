import React, { Component } from 'react';
import {connect} from "react-redux";
import MiniCart from "./MiniCart";
import {Dropdown} from "semantic-ui-react";


class Navbar extends Component{
    render() {
        return (
            <nav className="nav-wrapper">
                <ul className="cart-right">
                    <Dropdown icon={null} style={{color: '#888888'}} text={"My Cart (" + this.props.subTotal + ")"}>
                        <Dropdown.Menu className="dropdown-menu">
                            <MiniCart/>
                        </Dropdown.Menu>
                    </Dropdown>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        subTotal: state.subTotal
    }
};

export default connect(mapStateToProps)(Navbar);