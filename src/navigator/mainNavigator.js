import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile92692Navigator from '../features/UserProfile92692/navigator';
import Maps92673Navigator from '../features/Maps92673/navigator';
import Settings92651Navigator from '../features/Settings92651/navigator';
import Settings92636Navigator from '../features/Settings92636/navigator';
import NotificationList92635Navigator from '../features/NotificationList92635/navigator';
import Maps92634Navigator from '../features/Maps92634/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile92692: { screen: UserProfile92692Navigator },
Maps92673: { screen: Maps92673Navigator },
Settings92651: { screen: Settings92651Navigator },
Settings92636: { screen: Settings92636Navigator },
NotificationList92635: { screen: NotificationList92635Navigator },
Maps92634: { screen: Maps92634Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
