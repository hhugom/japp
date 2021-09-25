import React, { FC, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

const Home: FC = () => {
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
    <View>
      <Text>Init</Text>
    </View>;
  }

  if (!user) {
    return (
      <View testID="login-container">
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

export default Home;
