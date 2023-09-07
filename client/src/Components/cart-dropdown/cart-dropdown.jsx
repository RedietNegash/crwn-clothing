import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


import { selectCartItems } from "../../Redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toogleCartHidden } from "../../Redux/cart/cart.actions";
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./cart-dropdown.styles";

import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate(); // Hook to get navigation function

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          navigate("/checkout"); // Use the navigate function
          dispatch(toogleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

export const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
