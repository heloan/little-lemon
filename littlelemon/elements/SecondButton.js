import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function SecondButton({
        action, 
        title, 
        accessibility="", 
        disabled=false,
        style={},
    }) {
    return (
        <TouchableOpacity style={styles.button} onPress={action}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderColor: '#3e6056',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 0,
        alignItems: 'center',
        justifyContent: 'center',
        height:37
      },
      text: {
        color: '#3e6056',
        fontSize: 16,
        fontWeight: 'bold',
      },
  });
