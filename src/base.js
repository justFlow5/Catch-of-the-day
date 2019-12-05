import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAkKqQykaoLeiz5xg2XFuXkNERFgppNY0g",
    authDomain: "catch-of-the-day-just-flow.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-just-flow.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;
