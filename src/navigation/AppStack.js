import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from '../screens/home/Home';

const AppStack = createDrawerNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    gesturesEnabled: true,
  },
);

export default AppStack;
