import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import FirstScreen  from '../screen/FirstScreen';
import SecondScreen from '../screen/SecondScreen';
import ThirdScreen from '../screen/ThirdScreen';
import LocationScreen from '../screen/LocationScreen';
const Tab = createBottomTabNavigator();
const TabNavigation =()=>{
    return(
        <Tab.Navigator>
          <Tab.Screen
          name="Home"
          component={FirstScreen}
          options={{headerShown: false,
            tabBarIcon: () => (
              <FontAwesome5 name="home" size={40} color="black" />
            ),
            }}
          />
          <Tab.Screen
          name='List'
          component={SecondScreen}
          options={{
            headerShown:true,
            tabBarIcon: () => (
              <FontAwesome5 name="list" size={40} color="black" />
            )
            }}
          />
          <Tab.Screen
            name='Gallery'
            component={ThirdScreen}
            options={{
            headerShown:true,
            tabBarIcon: () => (
              <MaterialCommunityIcons name="view-gallery-outline" size={40} color="black" />
            )
            }}
          />
          <Tab.Screen
            name='Location'
            component={LocationScreen}
            options={{headerShown:false,
            tabBarIcon: ()=>(
              <Entypo name="location" size={40} color="black" />
            )
            }}
          />
        </Tab.Navigator>
    );
  };
export default TabNavigation;