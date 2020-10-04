import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  Avatar,
  Caption,
  Drawer,
  Paragraph,
  Switch,
  Text,
  Title,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';

import { PreferencesContext } from './context/preferencesContext';

const Profile = props => (
  <TouchableOpacity
    style={{ marginLeft: 10 }}
    onPress={() => {
      props.navigation.toggleDrawer();
    }}
  >
    <Avatar.Text size={160} label={props.initials} color='#fff' style={{ backgroundColor: '#FF9800', borderColor: '#FF9800', borderWidth: 5 }} />
    <Title style={styles.title}>{props.name ? props.name : null}</Title>
    <Caption style={styles.caption}>{props.handle ? props.handle : null}</Caption>
  </TouchableOpacity>
)

const UserInfo = props => (
  <View style={styles.userInfoSection}>
    <Profile {...props} />
    {/* <View style={styles.row}>
      <View style={styles.section}>
        <Paragraph style={[styles.paragraph, styles.caption]}>
          202
              </Paragraph>
        <Caption style={styles.caption}>Obserwuje</Caption>
      </View>
      <View style={styles.section}>
        <Paragraph style={[styles.paragraph, styles.caption]}>
          159
              </Paragraph>
        <Caption style={styles.caption}>Obserwujący</Caption>
      </View>
    </View> */}
  </View>
)

export function DrawerContent(props) {
  //const paperTheme = useTheme();
  const { rtl, theme, toggleRTL, toggleTheme } = React.useContext(
    PreferencesContext
  );

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} style={{ flex: 1 }}>
        <View style={styles.drawerContent} >
          <UserInfo />
          {/* <Drawer.Section style={styles.drawerSection}>
            <DrawerItemList {...props} />
          </Drawer.Section> */}
        </View>
      </DrawerContentScrollView>
      <Drawer.Section title="Preferences">
        <TouchableRipple onPress={toggleTheme}>
          <View style={styles.preference}>
            <Text>Dark Theme</Text>
            <View pointerEvents="none">
              <Switch value={theme === 'dark'} />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={toggleRTL}>
          <View style={styles.preference}>
            <Text>RTL</Text>
            <View pointerEvents="none">
              <Switch value={rtl === 'right'} />
            </View>
          </View>
        </TouchableRipple>
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    flex: 1,
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    flex: 1,
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
