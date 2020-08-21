import RoleScreen from './Role';
import CodeScreen from './Code';
import ChildScreen from './Child';
import {createStackNavigator} from 'react-navigation-stack';

export const stackNavigator = createStackNavigator({
  Role: RoleScreen,
  Code: CodeScreen,
  Child: ChildScreen,
});
