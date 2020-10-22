// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/firestore'

const loadFirebase = () => {
  try {
    const config = {
      apiKey: 'AIzaSyAV5I9INvd6yMx8paW7rhykKelIyJoo2V0',
      authDomain: 'homepizzacol.firebaseapp.com',
      databaseURL: 'https://homepizzacol.firebaseio.com',
      projectId: 'homepizzacol',
      storageBucket: 'homepizzacol.appspot.com',
      messagingSenderId: '129448394768',
      appId: '1:129448394768:web:2fd0fb7071983bb2c50a95',
      measurementId: 'G-V1E4GJ93CQ',
    }
    firebase.initializeApp(config)
  } catch (error) {
    if (!/already exist/.test(error.message)) {
      console.error('Firebase initialization error', error.stack)
    }
  }
  return firebase
}

export default loadFirebase
