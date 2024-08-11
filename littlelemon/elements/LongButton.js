import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function LongButton({
    action, 
    title, 
    accessibility="", 
    disabled=false,
    style={},
  }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={action}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 0,
      alignItems: 'center',
      justifyContent: 'center',
      height:37,
      width: '100%',
      backgroundColor: '#f4ce14'
    },
    text: {
      color: '#000',
      fontSize: 16,
      fontWeight: 'bold',
    },
});
