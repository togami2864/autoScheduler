import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/performance';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  appId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
  if (typeof window !== 'undefined') {
    if ('measurementId' in firebaseConfig) {
      firebase.analytics();
      firebase.performance();
    }
  }
}
