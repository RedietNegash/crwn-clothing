import {takeEvery, call, put} from 'redux-saga/effects';

import { firestore } from '../../Components/firebase/firebase.utils';
import ShopActionTypes from './shop.types';
import { convertCollectionsSnapshotToMap } from '../../Components/firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

export function* fetchCollectionsAsync(){
    yield console.log('i am fired');
     try{
    const collectionRef=firestore.collection('collections');
    console.log(collectionRef)
    const snapshot=yield collectionRef.get();
    const collectionsMap= yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap));

     } catch(error){
        yield put(fetchCollectionsFailure(error.messsage))
     }

    


    // collectionRef.get().then( snapshot =>{
    //      const collectionsMap=  convertCollectionsSnapshotToMap(snapshot);
    //     dispatch(fetchCollectionsSuccess((collectionsMap)));
    //     //   console.log(collectionsMap)
    //  } ).catch(error=> dispatch(fetchCollectionsFailure(error.message)))
}

export function* fetchCollectionsStart(){
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START,  /* it was listing FETCH_COLLECTIONS_START Action */
        fetchCollectionsAsync
    );
}