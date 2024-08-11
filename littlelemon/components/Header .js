import { Image, StyleSheet, View } from 'react-native';

export default function Header() {
    return (
      <View style={styles.container}>
          <Image source={require('../assets/img/Logo.png')} />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      flexDirection: 'row',
      marginRight: 150
    },
  });
  