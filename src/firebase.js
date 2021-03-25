import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyARr7cHpTw-HaUEM_xVlxulfJv4WGDFs1Q",
    authDomain: "naturalhairpedia-appointments.firebaseapp.com",
    projectId: "naturalhairpedia-appointments",
    storageBucket: "naturalhairpedia-appointments.appspot.com",
    messagingSenderId: "784162438238",
    appId: "1:784162438238:web:227a8dc986ff1294d608cf"
  };

firebase.initializeApp(firebaseConfig)

export default firebase;