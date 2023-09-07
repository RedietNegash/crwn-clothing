import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import ShopPage from "./Pages/homepage/shop/shop.component.jsx";
import HomePage from "./Pages/homepage/homepage.component";
import Header from "./Components/Header/header.component";
import SignInAndSignUpPage from "./Components/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./Pages/checkout/checkout.component";
import {
  auth,
  createUserProfileDocument,
  // addCollectionAndDocuments
} from "./Components/firebase/firebase.utils";

// import { setCurrentUser } from "./Redux/user/user.action";
import { selectCurrentUser } from "./Redux/user/user.selector";
import firebase from "./Components/firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "./Redux/shop/shop.selectors";
import { checkUserSession } from "./Redux/user/user.action";

// import { GlobalStyle } from "./global.styles.jsx";
import './App.css'
const App = ({ checkUserSession, currentUser }) => {
  // unsubscribeFromAuth = null;

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  //Previous code before using Redux-Sagas
  // const {setCurrentUser, /*collectionsArray*/}=this.props;
  // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //   if (userAuth) {
  //     const userRef = await createUserProfileDocument(userAuth);

  //     userRef.onSnapshot(snapShot => {
  //       setCurrentUser({

  //           id: snapShot.id,
  //           ...snapShot.data()

  //       });
  //     });

  //   }
  //   setCurrentUser(userAuth);
  // addCollectionAndDocuments('collections', collectionsArray.map(({title, items})=>({
  //   title, items
  // })));

  // });

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/shop"> to  */}
        <Route path="/shop/*" element={<ShopPage />} />
        //Route automatically passes 3 objects to shoppage
        <Route exact path="/checkout" element={<CheckoutPage />} />
        <Route
          exact
          path="/signin"
          element={
            currentUser ? <Navigate to="/" replace /> : <SignInAndSignUpPage />
          }
        />
      </Routes>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview
});
const mapDispatchToProps = (dispatch) => ({
  //dispatch: is a way for redux to know that wherever object you passing me  is going to be an action object i am gonne pass to every reducer
  //  setCurrentUser: user => dispatch(setCurrentUser(user))
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
