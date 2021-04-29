import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDAj7sBoIYIYvv5p7EOghre_4JZ05ojvYU",
    authDomain: "discord-clone-bac9a.firebaseapp.com",
    projectId: "discord-clone-bac9a",
    storageBucket: "discord-clone-bac9a.appspot.com",
    messagingSenderId: "1032110303724",
    appId: "1:1032110303724:web:644c4d5442fd751b6278c9",
    measurementId: "G-NXDPGX1R7Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db