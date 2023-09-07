import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Routes, useParams } from "react-router-dom";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../../Redux/shop/shop.selectors";
import { fetchCollectionsStart } from "../../../Redux/shop/shop.actions";

import CollectionPage from "../../collection/collection.component";
import CollectionsOverview from "../../../Components/collections-overview/collections-overview.component";
import WithSpinner from "../../../Components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({
  fetchCollectionsStart,
  isCollectionFetching,
  isCollectionsLoaded,
}) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  const { collectionId } = useParams();

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
            <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} />
          }
        />
      </Routes>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isCollectionFetching: selectIsCollectionFetching(state),
  isCollectionsLoaded: selectIsCollectionsLoaded(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
