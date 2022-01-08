import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCnD0uOahFlyWZUfR32AvN0ZbgRVo52tJU",
    authDomain: "chat-app-5ccb1.firebaseapp.com",
    projectId: "chat-app-5ccb1",
    storageBucket: "chat-app-5ccb1.appspot.com",
    messagingSenderId: "465385129552",
    appId: "1:465385129552:web:73bdbcf1f94e82e61eb355"

}

firebase.initializeApp(firebaseConfig)

export default firebase

