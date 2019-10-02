import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item1 from '../images/classic-tee.jpg';

class MiniCart extends Component{
    constructor(props) {
        super(props);
        this.state = {
            addedItems: this.props.addedItems
        };
    }
    componentDidUpdate(prevProps) {
        if(prevProps.addedItems !== this.props.addedItems) {
            this.setState({addedItems: this.props.addedItems});
        }
    }

    render(){
        let product = this.state.addedItems.map(item=>{
            return(
                <div className="small-mini-cart">
                    <div className="small-mini-cart-image">
                        <img src={Item1} alt={item.title} style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div className="small-mini-cart-right">
                        <p style={{color: "#222222"}}>{item.title}</p>
                        <p style={{color: "#222222"}}>{item.quantity} x <b>${item.price}.00</b></p>
                        <p style={{color: "#222222"}}>Size:  <span className="black-text">{item.size}</span></p>
                    </div>
                </div>
            )
        });

        return(
            <div className="container">
                <div className="box">
                    {product}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        addedItems: state.addedItems
    }
};

export default connect(mapStateToProps)(MiniCart);