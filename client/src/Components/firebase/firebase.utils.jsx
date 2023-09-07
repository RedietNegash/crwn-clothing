import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDz07SI1g2ZXvHikqrlH0VUY5sTxbkRCO8",
  authDomain: "crwn-clothing-69d58.firebaseapp.com",
  projectId: "crwn-clothing-69d58",
  storageBucket: "crwn-clothing-69d58.appspot.com",
  messagingSenderId: "58040636901",
  appId: "1:58040636901:web:e586b0245c6ad70bbd4b0c",
  measurementId: "G-VCHP4LV66Y",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log("collectionRef");
  const batch = firestore.batch();

  try {
    objectsToAdd.forEach((obj) => {
      const newDocRef = collectionRef.doc();
      // console.log(newDocRef);
      batch.set(newDocRef, obj);
      console.log("objects");
      console.log(obj);
      console.log(objectsToAdd);
    });

    await batch.commit();
    console.log("Batch commit successful");
  } catch (error) {
    console.error("Error adding documents to collection:", error.message);
  }
};

//converting array of snapshot to object
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumlator, collection) => {
    accumlator[collection.title.toLowerCase()] = collection;
    return accumlator;
  }, {});
};

export const getCurrentUser = () => {
  return new promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
export const firebaseApp = firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
