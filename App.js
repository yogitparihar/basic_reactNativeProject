import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigation from './src/navigation/StackNavigation'
import SplashScreen from './src/screen/SplashScreen';
const Stack = createNativeStackNavigator();
const MyApp = () => {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Splashscreen'>
        <Stack.Screen
          name='Splashscreen'
          component={SplashScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='StackNavigation'
          component={StackNavigation}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
      </NavigationContainer>
    )
};
export default MyApp;