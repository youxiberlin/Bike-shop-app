import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, Button, TextInput } from 'react-native';
import firebase from 'firebase';

export default function Register() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onSignup = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        firebase.firestore().collection("users").doc(user.uid).set({
          uid: user.uid,
          email: user.email
        })
      })
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
        title="SignUp"
        onPress={onSignup}
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
