// Import the functions you need from the SDKs you need
import firebase from "firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence} from 'firebase/auth/react-native';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxwIMV2g4U5HO3waMSdVQSNplLEJ0tfT8",
  authDomain: "e-library-540f0.firebaseapp.com",
  projectId: "e-library-540f0",
  storageBucket: "e-library-540f0.appspot.com",
  messagingSenderId: "780422006528",
  appId: "1:780422006528:web:578b9327f0aa0a76eb55e5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
  });
  
  export { auth };
export default firebase.firestore()