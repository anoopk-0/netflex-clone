// import { seedDatabase } from '../seed';
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBNj2AoqjTE1gGZn0hLgRLsfjg8sTzOdt4",
    authDomain: "netflix-clone-e148f.firebaseapp.com",
    projectId: "netflix-clone-e148f",
    storageBucket: "netflix-clone-e148f.appspot.com",
    messagingSenderId: "267281221125",
    appId: "1:267281221125:web:15a67f87101e15de127e6c"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data
// seedDatabase(firebase)


export { firebase };