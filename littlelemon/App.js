import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Header from './components/Header ';
import ProfilePicture from './elements/ProfilePicture';
import HomeScreen from './screens/HomeScreen';
import Onboarding from './screens/Onboarding';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const options = {
  headerTitle: (props) => <Header {...props} />,
  headerRight: () => <ProfilePicture />
}

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [email, setEmail] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        let name = await AsyncStorage.getItem('name');
        console.log(name);
        if (name !== null) {
          setEmail(name);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    // Optionally render a loading indicator while data is being fetched
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={email == null? "Onboarding" : "Home"}>
        <Stack.Screen name="Onboarding" component={Onboarding} options={options} />
        <Stack.Screen name="Home" component={HomeScreen} options={options} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={options}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
