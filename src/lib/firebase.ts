import { initializeApp } from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAYTs3VKXzrkiKb28t94o4DfBkrDEI57A8',
  authDomain: 'japp-f0f6c.firebaseapp.com',
  projectId: 'japp-f0f6c',
  storageBucket: 'japp-f0f6c.appspot.com',
  messagingSenderId: '857205036087',
  appId: '1:857205036087:web:6537188a9c48ce17af9bb2',
  measurementId: 'G-XW15W0R33J',
};

export const firebaseApp = initializeApp(firebaseConfig);
