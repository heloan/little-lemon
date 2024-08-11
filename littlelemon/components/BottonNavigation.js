import { StyleSheet, View } from 'react-native';
import PrimaryButton from '../elements/PrimaryButton';

export default function BottonNavigation({action}) {
    return (
      <View style={styles.container}>
        <PrimaryButton
            action={action}
            title={"Next"}
            accessibility={"Next button"}
            disabled={false}
            style={styles.nextButton}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: .1,
        backgroundColor: '#f1f4f7',
        //alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        //flexDirection: 'row'
    },
    nextButton: {
        alignSelf: 'flex-end',
        marginRight: 30
    }
  });
  