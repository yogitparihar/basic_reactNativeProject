import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/Login';
import Reset from '../screen/Reset';
import Otp from '../screen/Otp';
import TabNavigation from './TabNavigation';
import Signup from '../screen/Signup';
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen 
           name="Signup" 
           component={Signup}
          options ={{headerShown: false}}
          />
          <Stack.Screen
            name="Reset"
            component={Reset}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='Otp'
            component={Otp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='TabNavigation'
            component={TabNavigation}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
    );
};
export default StackNavigation;