// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/
 
import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  useNavigation,
} from 'react-native';
 
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
 import { Icon } from 'react-native-elements';

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';
 
  return (
    <SafeAreaView style={{flex: 1, width: '100%', backgroundColor: '#101010'}}>
      {/*Top Large Image */}
      <Image
        source={{uri: BASE_PATH + proileImage}}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem style={{color: 'white'}}
          label="Home"
          onPress={() => navigation.navigate('Home')}
            icon={() => ( 
                <Icon name="home" type="feather" color="#fff" size={30} />
            )}/>
        {/* <View style={styles.customItem}>
          <Text style={styles.customItemText}
            onPress={() => { Linking.openURL('https://aboutreact.com/');
            }}>
                Acount
          </Text>
          <Image
            source={{uri: BASE_PATH + 'star_filled.png'}}
            style={styles.iconStyle}
          />
        </View> */}
      </DrawerContentScrollView>
      <Text 
        style={{
          fontSize: 30,
          textAlign: 'center',
          color: '#fff',
          paddingTop: 30,
          paddingBottom: 30,
        }}>
       Custom Sidebar
      </Text>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    marginTop: 50,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  customItemText:{
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#fff',
  }
});
 
export default CustomSidebarMenu;