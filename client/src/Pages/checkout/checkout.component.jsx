import React from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect'
import StripeCheckoutButton from "../../Components/stripe-button/stripe-button.component";
import CheckoutItem from "../../Components/checkout-item/checkout-item.component";
import { selectCartItems, selectCartTotal } from "../../Redux/cart/cart.selectors";
// import { mapStateToProps } from "react-redux";
import './checkout.styles.scss';

const CheckoutPage=({cartItems, total})=>(
    <div className="checkout-page">
      <div className="checkout-header">
         <div className='header-block'>
            <span>Product</span>
         </div>
         <div className='header-block'>
            <span>Description</span>
         </div>
         <div className='header-block'>
            <span>Quantity</span>
         </div>
         <div className='header-block'>
            <span>Price</span>
         </div>
         <div className='header-block'>
            <span>Remove</span>
         </div>
      </div>
      {
        cartItems.map(cartItem => (
           <CheckoutItem  key={cartItem.id} cartItem={cartItem}/>
        ))
      }

      <div className="total">
        <span>TOTAL: ${total} </span>
        <StripeCheckoutButton price={total}/>
        <div className="test-warning">
         *please use the following test credit card for payments*
         <br/>
         4242 4242 4242 4242 - Exp:01/25 - CVV:123
        </div>
      </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect (mapStateToProps)(CheckoutPage);
