import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen4178148Navigator from '../features/BlankScreen4178148/navigator';
import SignIn21178147Navigator from '../features/SignIn21178147/navigator';
import SignIn22178146Navigator from '../features/SignIn22178146/navigator';
import SignIn23178145Navigator from '../features/SignIn23178145/navigator';
import BlankScreen0178144Navigator from '../features/BlankScreen0178144/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen4178148: { screen: BlankScreen4178148Navigator },
SignIn21178147: { screen: SignIn21178147Navigator },
SignIn22178146: { screen: SignIn22178146Navigator },
SignIn23178145: { screen: SignIn23178145Navigator },
BlankScreen0178144: { screen: BlankScreen0178144Navigator },

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
