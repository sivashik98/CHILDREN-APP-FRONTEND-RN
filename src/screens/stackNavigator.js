import RegistrationScreen from './Auth/Registration/Registration';
import PairingChildScreen from './Auth/Pairing/PairingChild';
import PairingParentScreen from './Auth/Pairing/PairingParent';
import {createStackNavigator} from 'react-navigation-stack';

export const stackNavigator = createStackNavigator({
  Registration: RegistrationScreen,
  PairingChild: PairingChildScreen,
  PairingParent: PairingParentScreen,
});
