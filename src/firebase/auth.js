import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyAmzxf2gu_mN9G0NWQ7KfJAdtslI3W8YXI",
  authDomain: "coursify-6820f.firebaseapp.com",
  databaseURL: "https://coursify-6820f.firebaseio.com",
  projectId: "coursify-6820f",
  storageBucket: "coursify-6820f.appspot.com",
  messagingSenderId: "778837715805",
  appId: "1:778837715805:web:59325709ec23bd646c56b4",
  measurementId: "G-LTXK85MD9K"
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