import firebase from 'firebase/compat/app';
import {
  getFunctions,
  connectFunctionsEmulator,
  httpsCallable,
} from 'firebase/functions';


const app = firebase.initializeApp({
apiKey: "AIzaSyBj3NA8qOH00mVNDF4J2_AkwrTF3dGVsiM",
authDomain: "portfolio-56e4e.firebaseapp.com",
projectId: "portfolio-56e4e",
storageBucket: "portfolio-56e4e.appspot.com",
messagingSenderId: "371581501766",
appId: "1:371581501766:web:ac656066673ac76aed6547",
measurementId: "G-YJGZVSS621"
});

const functions = getFunctions(app);
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  connectFunctionsEmulator(functions, 'localhost', 5001);
}

const callFunction = (functionName) => httpsCallable(functions, functionName);

export { callFunction };
