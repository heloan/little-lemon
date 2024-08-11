import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Login() {
    return (
      <View style={styles.container}>
          <View>
            <Text>Let us get to know you</Text>
          </View>
          <View style={styles.containerLogin}>
            <Text>Fist Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={() => {}}
                value={""}
            />
            <Text>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={() => {}}
                value={""}
            />
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: .9,
      backgroundColor: '#cad2d9',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      gap: 10
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
    }
  });
  