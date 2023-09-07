import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Component } from "react";
import { createStructuredSelector } from "reselect";

import { fetchCollectionsStartAsync } from "../../../Redux/shop/shop.actions";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../../Redux/shop/shop.selectors";
import { fetchCollectionsStart } from "../../../Redux/shop/shop.actions";

import CollectionPage from "../../collection/collection.component";
import CollectionsOverview from "../../../Components/collections-overview/collections-overview.component";

import WithSpinner from "../../../Components/with-spinner/with-spinner.component";

import "firebase/compat/firestore";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

//Shop page before envoking shopdata from firestore(when storing data in shop reducer)
/*const ShopPage = () => (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionsOverview />} />
        <Route path="/:collectionId" element={<CollectionPage/>} />
      </Routes>
    </div>
  );*/

//shop page using shopdata's we store in firestore
const ShopPage = ({
  fetchCollectionsStart,
  isCollectionFetching
}) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Routes>
        <Route
          path="/"
          element={
            <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} />
          }
        />
        <Route
          path="/:collectionId"
          element={
            <CollectionPageWithSpinner isLoading={!selectIsCollectionsLoaded} />
          }
        />
      </Routes>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  selectIsCollectionsLoaded: selectIsCollectionsLoaded,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
