import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import BottonNavigation from '../components/BottonNavigation';
import Header from '../components/Header ';

export default function Onboarding({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const actionNext = async function () {
    try {
      await AsyncStorage.setItem('name',name);
      await AsyncStorage.setItem('email',email);
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  }

  return (
      <View style={styles.container}>
        <Header/>
        <View style={styles.container}>
          
          <View style={styles.containerField}>
            <View>
              <Text>Let us get to know you</Text>
            </View>
            <View style={styles.containerLogin}>
              <Text>Fist Name</Text>
              <TextInput
                  style={styles.input}
                  onChangeText={(text) => {setName(text)}}
                  value={name}
              />
              <Text>Email</Text>
              <TextInput
                  style={styles.input}
                  onChangeText={(text) => {setEmail(text)}}
                  value={email}
              />
            </View>
          </View>

          <BottonNavigation action={actionNext}/>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    },
    header: {
      flex: 1
    },
    login: {
      flex: 2
    },
    bottonNavigation: {
      flex: 1
    },
    containerLogin: {
      flex: .9,
      backgroundColor: '#cad2d9',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      gap: 10
    },
    input: {
        width: 300, 
        height: 40, 
        borderColor: '#000', 
        borderWidth: 1, 
        borderRadius: 5, 
        padding: 5
    },
    containerField: {
      flex: .9,
      backgroundColor: '#cad2d9',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      gap: 10
    },
    });
  