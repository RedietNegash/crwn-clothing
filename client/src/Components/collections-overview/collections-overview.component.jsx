import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Preview from "../preview-collection-component/preview.component";
import { selectCollectionsForPreview } from "../../Redux/shop/shop.selectors";

import './collections-overview.styles.scss';

const CollectionsOverview=({collections})=>(
      <div className="collections-overview">
         {collections.map(({id, ...otherCollectionProps})=>(
            <Preview key={id} {...otherCollectionProps}/>
         ))}
      </div>
);
const mapStateToProps= createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect (mapStateToProps)(CollectionsOverview);

