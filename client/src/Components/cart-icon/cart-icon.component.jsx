import React from "react";
import { connect } from "react-redux";

// import {ReactComponent as ShoppingIcon} from '../../assets/11.2 shopping-bag.svg.svg';
import { toogleCartHidden } from "../../Redux/cart/cart.actions";
import { selectCartItemsCount } from "../../Redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    {/* <i className="fa-thin fa-cart-shopping shopping-icon"></i> */}
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toogleCartHidden()),
});

//mapstatetoprops always called whenever any state is changed and it always returns a new object
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
