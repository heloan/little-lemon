import { CheckBox } from '@rneui/themed';
import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import LongButton from '../elements/LongButton';
import PrimaryButton from '../elements/PrimaryButton';
import SecondButton from '../elements/SecondButton';

export default function ProfileScreen() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={{fontSize:18, marginVertical: 10}}>Personal information</Text>
        <Text style={{fontSize:14}}>Avatar</Text>
        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <Image style={styles.picture} source={require('../assets/img/Profile.png')} />
          <PrimaryButton
            action={()=>{}}
            title={"Change"}
            accessibility={"Change button"}
            disabled={false}
          />
          <SecondButton 
            action={()=>{}}
            title={"Remove"}
            accessibility={"Remove"}
            disabled={false}
          />
        </View>
        <Text style={{fontSize:14, marginTop:5}}>Fist Name</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => {setName(text)}}
            value={name}
        />
        <Text style={{fontSize:14, marginTop:5}}>Last Name</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => {setLastName(text)}}
            value={lastName}
        />
        <Text style={{fontSize:14, marginTop:5}}>Email</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => {setEmail(text)}}
            value={email}
        />
        <Text style={{fontSize:14, marginTop:5}}>Phone number</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => {setPhone(text)}}
            value={phone}
        />
        <Text style={{fontSize:18, marginVertical: 10}}>Email notifications</Text>
        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="#3e6056"
          />
          <Text style={{fontSize:14, marginTop:5}}>Order status</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="#3e6056"
          />
          <Text style={{fontSize:14, marginTop:5}}>Password changes</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="#3e6056"
          />
          <Text style={{fontSize:14, marginTop:5}}>Special offers</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="#3e6056"
          />
          <Text style={{fontSize:14, marginTop:5}}>Newsletter</Text>
        </View>
        <LongButton
          action={()=>{}}
          title={"Log out"}
          accessibility={"Log out"}
          disabled={false}
          style={{marginBotton:30}}
        />
        <View style={{
          flexDirection: 'row', 
          gap: 10, 
          flex: 1,
          width: '100%',
          alignItems: 'center', 
          justifyContent: 'space-around',
          marginVertical:20}}>
          <SecondButton 
            action={()=>{}}
            title={"Discard changes"}
            accessibility={"Discard changes"}
            disabled={false}
          />
          <PrimaryButton
            action={()=>{}}
            title={"Save change"}
            accessibility={"Save change"}
            disabled={false}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'flex-start', 
        justifyContent: 'flex-start',
        marginHorizontal: 30 ,
        gap: 10
    },
    picture: {
      //flex: 1,
      backgroundColor: '#dde3e9',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      flexDirection: 'row',
      width: 80,
      height: 80,
      borderRadius: 80
    },
    input: {
      width: '100%', 
      height: 40, 
      borderColor: '#000', 
      borderWidth: 1, 
      borderRadius: 5, 
      padding: 5
  },
});