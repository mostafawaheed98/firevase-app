import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCic5y-k91xnb6KcbHhTSwLxKGAsKIuOt0",
  authDomain: "mostafa-firebase-app.firebaseapp.com",
  projectId: "mostafa-firebase-app",
  storageBucket: "mostafa-firebase-app.appspot.com",
  messagingSenderId: "201242032803",
  appId: "1:201242032803:web:23afef593ca8c5cc625d16"
};

const app = initializeApp(firebaseConfig);

export default app;