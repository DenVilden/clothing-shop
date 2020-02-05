import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATA_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const getCurrentUser = () =>
  new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    const cartItems = [];

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        cartItems,
        ...additionalData,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // eslint-disable-next-line consistent-return
  return { id: snapshot.id, ...snapshot.data() };
};

export const updateFirebaseCart = async cartItems => {
  if (!auth.currentUser) return;

  const { uid } = auth.currentUser;

  const userRef = firestore.doc(`users/${uid}`);

  try {
    await userRef.update({ cartItems });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const convertCollectionsSnapshotToMap = collections => {
  if (!collections.docs.length) {
    throw new Error('Cannot reach collections');
  }

  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const convertSectionsSnapshotToMap = sections => {
  if (!sections.docs.length) {
    throw new Error('Cannot reach sections');
  }
  return sections.docs.map(doc => doc.data());
};

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  const resolvedBatch = await batch.commit();

  return resolvedBatch;
};
