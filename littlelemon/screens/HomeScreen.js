import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottonNavigation from '../components/BottonNavigation';

export default function HomeScreen({ navigation }) {

    const actionNext = async function () {
        navigation.navigate('Profile');
    }

    return (
      <View style={styles.container}>
        <View style={{flex: .9, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
        </View>
        <BottonNavigation action={actionNext}/>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
});