import { Image, StyleSheet } from 'react-native';

export default function ProfilePicture() {
    return (
      <Image style={styles.picture} source={require('../assets/img/Profile.png')} />
    );
}

const styles = StyleSheet.create({
    picture: {
      //flex: 1,
      backgroundColor: '#dde3e9',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      flexDirection: 'row',
      width: 50,
      height: 50
    },
  });
  