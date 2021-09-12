import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

import dbActions from "./dbActions";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_WDS_AUTH_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_WDS_AUTH_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_WDS_AUTH_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_WDS_AUTH_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:
    process.env.REACT_APP_WDS_AUTH_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_WDS_AUTH_FIREBASE_APP_ID,
  databaseURL: process.env.REACT_APP_WDS_AUTH_FIREBASE_DATABASE_URL,
});
export const auth = app.auth();
export default app;
export const db = {
  feedbacks: dbActions(app.database().ref("/feedbacks")),
};
