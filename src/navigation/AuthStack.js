import {createStackNavigator} from 'react-navigation-stack';
import SignIn from '../screens/auth/SignIn';
import Verify from '../screens/auth/Verify';
const AuthStack = createStackNavigator({
  SignIn: SignIn,
  Verify: Verify,
});

export default AuthStack;
