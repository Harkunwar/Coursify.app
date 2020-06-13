import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyAzWicm0iFHGwHdMyQvfgN82YalbcJqjLc",
  authDomain: "languagetransfer-28752.firebaseapp.com",
  databaseURL: "https://languagetransfer-28752.firebaseio.com",
  projectId: "languagetransfer-28752",
  storageBucket: "languagetransfer-28752.appspot.com",
  messagingSenderId: "918781090345",
  appId: "1:918781090345:web:197ad5d956bdecf6f11a38",
  measurementId: "G-BHNT246V1Y"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {
      displayName,
      email
    } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;