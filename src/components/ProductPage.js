import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';

class ProductPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            size: "",
            title: "",
            price: 0
        }
    }
    handleAdd = (size, title, price)=> {
        this.props.addToCart(size, title, price);
    };

    handleSelection = (size, title, price)=> {
        this.setState(
            {
                size: size,
                title: title,
                price: price
            });
    };

    render(){
        let product = this.props.items.map(item=>{
            return(
                <div className="container">
                    <div className="card-image">
                        <img src={item.img} alt={item.title} style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div className="card-right">
                        <h5 className="item-title">{item.title}</h5>
                        <p className="item-price"><b>${item.price}.00</b></p>
                        <p className="item-desc">{item.desc}</p>
                        <br></br>
                        <div>
                            <p className="item-size-text">SIZE</p>
                            <p className="item-size-star">*</p>
                            <p className="item-size-selected">{this.state.size}</p>
                        </div>
                        <button className="btn-size" onClick={() => this.handleSelection("S", item.title, item.price)}>S</button>
                        <button className="btn-size btn-middle" onClick={() => this.handleSelection("M", item.title, item.price)}>M</button>
                        <button className="btn-size" onClick={() => this.handleSelection("L", item.title, item.price)}>L</button>
                        <br></br>
                        <button className="btn-add" onClick={() => this.handleAdd(this.state.size, this.state.title, this.state.price)}><b>ADD TO CART</b></button>
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
        items: state.items
    }
};

const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (size, title, price)=>{dispatch(addToCart(size, title, price))}
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductPage);