// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDjbfEx7spiiFqxKD8Z13o_MJa2JzKsac4",
	authDomain: "chat-service-ce6e8.firebaseapp.com",
	databaseURL: "https://chat-service-ce6e8.firebaseio.com",
	projectId: "chat-service-ce6e8",
	storageBucket: "chat-service-ce6e8.appspot.com",
	messagingSenderId: "16611172445",
	appId: "1:16611172445:web:5451697389774c13b42db4",
	measurementId: "G-CW7KXGYY1Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
