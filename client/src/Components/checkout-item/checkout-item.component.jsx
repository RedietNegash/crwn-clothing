import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart, addItem, removeItem} from "../../Redux/cart/cart.actions";

import './checkout.styles.scss'

const CheckoutItem=( {cartItem, clearItem, addItem, removeItem})=>{
const {name, imageUrl, price, quantity}=cartItem;
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img  src={imageUrl} alt="item"/>

        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={()=>removeItem(cartItem)}>
            <i className="fa-solid fa-chevron-left"></i>
            </div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={()=>addItem(cartItem)}>
            <i className="fa-solid fa-chevron-right"></i>
                </div>
            </span>
        <span className="price">{price}</span>
       <div className="remove-button" onClick={()=> clearItem(cartItem)}> X </div>
    </div>
);
    }

const mapDispatchToProps= dispatch =>({
    clearItem: item=> dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect (null, mapDispatchToProps)(CheckoutItem);