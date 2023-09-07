import React from "react";
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import { selectCollection } from "../../Redux/shop/shop.selectors";
import './collection.styles.scss';
import CollectionItem from "../../Components/Collection-item/collection-item.component";

import { CollectionPageContainer, CollectionTitle, CollectionItemsContainer } from './collection.styles';

const CollectionPage = ({ collection }) => {
  
  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {
          items.map(item => (<CollectionItem key={item.id} item={item} />))
        }
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
}

const mapStateToProps = (state) => ({
  collection: selectCollection(useParams().collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
