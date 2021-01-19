//#region MODULES
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator  } from '@react-navigation/material-bottom-tabs';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useTheme, Text } from 'react-native-paper';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
//#endregion MODULES

//#region COMPONENTS
import { DrawerContent } from './drawerContent';
import About from './about';
//#endregion COMPONENTS

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator ();

const TabLabel = ({ focused, color, name }) => {
  if (focused) {
    return (
      <Text style={{ color: color, fontSize: 13 }}>{name}</Text>
    )
  } return null
}

 
function TabOptions(label, icon){
  var options = {
    tabBarLabel: label,
    tabBarIcon: ({ }) => (
      <MatIcon name={icon} color={'#fff'} size={26} />
    ),
  }
  return options
}

function Tabs() {
  return (
    <Tab.Navigator
      backBehavior='history'
      initialRouteName="About"
      activeColor="white"
      inactiveColor="white"
    >
      <Tab.Screen name="About" component={About} options={TabOptions('About Us', 'home')} />
      <Tab.Screen name="Contact" component={About} options={TabOptions('Contact', 'info')} />
      <Tab.Screen name="Videos" component={About} options={TabOptions('Videos', 'info')} />
      <Tab.Screen name="Youth" component={About} options={TabOptions('Youth', 'info')} />
      <Tab.Screen name="News" component={About} options={TabOptions('News', 'info')} />
    </Tab.Navigator>
  )
}

export const RootNavigator = () => {
  const theme = useTheme();
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={navigationTheme}>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Tabs} options={{ drawerLabel: null }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
