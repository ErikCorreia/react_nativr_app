import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import StackNavigation from '../Stack';
import Tabs from '../Tabs';

import { tabBarOptions, screenOptions, sceneContainerStyle } from '../styles';
import CustomSidebarMenu from './CustomSidebarMenu';

import Categories from '../../screens/Categories';

const Drawer = createDrawerNavigator();

const Sidebar = () => {
    return (
        <Drawer.Navigator
        drawerContentOptions={{
            activeTintColor: '#e91e63',
            itemStyle: {marginVertical: 5},
          }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}
        
        sceneContainerStyle={sceneContainerStyle}
        screenOptions={{
            headerStyle: {
                backgroundColor: '#101001',
                shadowColor: '#000',
                height: 130,
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                elevation: 10,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },

            headerLeftContainerStyle: {
                marginLeft: 10,
                marginTop: 10,
                marginBottom: 10,
            },
            headerRightContainerStyle: {
                marginRight: 10,
            },

            headerRight: () => ( 
                <Icon name="user" type="feather" color="#fff" size={30} />
                ),

            headerLeftStyle: {
                marginLeft: 30,
                marginTop: 30,
                marginBottom: 30,
            },
            
        }}>
            <Drawer.Screen name="Home" component={Tabs}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: ({ color, size }) => (
                        <Icon name="home" type="Entypo" color={color} size={40} />
                    ),
                }}
            />
            <Drawer.Screen name="Categories" component={Categories} />
        </Drawer.Navigator>
    );
}
export default Sidebar;