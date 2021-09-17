import React, { FC, useState, useEffect } from 'react';
import { registerRootComponent } from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase/app';
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

firebase.initializeApp(firebaseConfig);

const App: FC = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<firebase.User | null>();

  // Handle user state changes
  function onAuthStateChanged(newUser: firebase.User | null) {
    setUser(newUser);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  });

  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Welcome {user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default registerRootComponent(App);
