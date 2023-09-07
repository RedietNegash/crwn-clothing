// import React from 'react';
// import Comp_Tw from './Comp_Tw';


// function Comp_o() {
//   return (
//     <div>
//       <Comp_Tw/>
//     </div>
//   )
// }

// export default Comp_o

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ShopPage from './Pages/homepage/shop/shop.component.jsx';
import HomePage from './Pages/homepage/homepage.component';
import Header from './Components/Header/header.component';
import SignInAndSignUpPage from './Components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { getAuth } from 'firebase/auth';
import { createUserProfileDocument } from './Components/firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = getAuth().onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // Listen for changes
        const unsubscribeFromSnapshot = onSnapshot(userRef, (snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });

        // Clean up the snapshot subscription when the component is unmounted
        return () => unsubscribeFromSnapshot();
      } else {
        setCurrentUser(null); // Clear the currentUser state when the user is logged out
      }
    });

    // Clean up the authentication subscription when the component is unmounted
    return () => unsubscribeFromAuth();
  }, []);

  useEffect(() => {
    // This will log the current value of `currentUser` whenever it changes
    console.log(currentUser);
  }, [currentUser]);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/sign-in' element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;


/////////////////////

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';

const config={ apiKey: "AIzaSyDz07SI1g2ZXvHikqrlH0VUY5sTxbkRCO8",
authDomain: "crwn-clothing-69d58.firebaseapp.com",
projectId: "crwn-clothing-69d58",
storageBucket: "crwn-clothing-69d58.appspot.com",
messagingSenderId: "58040636901",
appId: "1:58040636901:web:e586b0245c6ad70bbd4b0c",
measurementId: "G-VCHP4LV66Y"
}


export const app = initializeApp(config);
export const auth = getAuth(app);
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, 'users', userAuth.uid);

  const snapShot = await getDoc(userRef);
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
};

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};





















// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';


// const config={ apiKey: "AIzaSyDz07SI1g2ZXvHikqrlH0VUY5sTxbkRCO8",
// authDomain: "crwn-clothing-69d58.firebaseapp.com",
// projectId: "crwn-clothing-69d58",
// storageBucket: "crwn-clothing-69d58.appspot.com",
// messagingSenderId: "58040636901",
// appId: "1:58040636901:web:e586b0245c6ad70bbd4b0c",
// measurementId: "G-VCHP4LV66Y"
// }

// firebase.initializeApp(config);

// export const auth= firebase.auth();
// export const firestore=firebase.firestore();

// const provider=new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({prompt: 'select_account'});
// export const signInWithGoogle=()=>auth.signInWithPopup(provider);

// export default firebase;
