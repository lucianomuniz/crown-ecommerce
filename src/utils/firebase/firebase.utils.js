import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA0gBEDQxRXdvW8aWSrk5E4wsOHzoKsAWM',
  authDomain: 'crown-ecommerce-db-45b71.firebaseapp.com',
  projectId: 'crown-ecommerce-db-45b71',
  storageBucket: 'crown-ecommerce-db-45b71.appspot.com',
  messagingSenderId: '994020479398',
  appId: '1:994020479398:web:bf2ba7065f6807ad78bf67',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
