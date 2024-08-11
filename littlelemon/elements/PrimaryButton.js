import { Button, StyleSheet, View } from 'react-native';

export default function PrimaryButton({
        action, 
        title, 
        accessibility, 
        disabled=false,
        style={},
    }) {
    return (
      <View style={[style, styles.button]}>
          <Button 
            onPress={action}
            title={title}
            color="#3e6056"
            accessibilityLabel={accessibility}
            disabled={disabled}
            style={styles.button}
          />
      </View>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 20
    }
  });
