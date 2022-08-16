import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyDcS7dWgE_TbdLX3YLZMA5nMoRE0farPuo",
	authDomain: "quiz-b0712.firebaseapp.com",
	projectId: "quiz-b0712",
	storageBucket: "quiz-b0712.appspot.com",
	messagingSenderId: "827665813575",
	appId: "1:827665813575:web:63e7646d18307e71e56162",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

//export all modules
export { app, auth, db };
