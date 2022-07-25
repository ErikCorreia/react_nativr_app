import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from 'react-native-elements'
import { screenOptions, sceneContainerStyle, tabBarOptions } from "../styles";

import StackNavigation from '../Stack';

import Home  from '../../screens/Home';
import Movies from '../../screens/Movies';
import Acount from '../../screens/Acount';
import Detail from '../../screens/Home/Detail';

const Tab = createBottomTabNavigator();

const Tabs = () => {

  return(
    <Tab.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={screenOptions}
      sceneContainerStyle={sceneContainerStyle}
    >
        <Tab.Screen name="Home" component={Home} 
          options = {{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" type="Entypo" color={color} size={40} />
            ),
            title: 'Home',
          }}
          />
          <Tab.Screen name="Movies" component={Movies}
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Icon name="film" type="font-awesome" color={color} size={30} />
            ),
          }}
          />
          <Tab.Screen name="Acount" component={Acount}
            options={{ 
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" type="font-awesome" color={color} size={30} />
            ),
          }}
          />
          <Tab.Screen 
          options={{
          tabBarButton: () => null,
          tabBarVisible:false
        }} name="Detail" component={ Detail } />
        <Tab.Screen name="Login" component={ StackNavigation} options={{tabBarButton: () => null, tabBarVisible:false}}/>
    </Tab.Navigator>
  );
}
export default Tabs ;