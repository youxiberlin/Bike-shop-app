import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, Button, TextInput } from 'react-native';
// import fb from '../firebase';
import firebase from 'firebase';


export default function LogIn() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onSignIn = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => conosle.log(res))
      .catch(err => console.log(err))
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='name'
        onChangeText={(v) => setName(v)}
      />
      <TextInput
        placeholder='Email'
        onChangeText={(v) => setEmail(v)}
      />
      <TextInput
        placeholder='password'
        onChangeText={(v) => setPassword(v)}
      />
      <Button
        title="Sign In"
        onPress={onSignIn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 100
    // flexDirection: 'row',
  }
});
