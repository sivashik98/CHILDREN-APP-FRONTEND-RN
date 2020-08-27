import * as React from 'react';
import {SafeAreaView} from 'react-navigation';
import PairingChild from '../../../pages/Pairing/PairingChild';

export default class PairingChildScreen extends React.PureComponent {
  // handleOpenSettingsData = (id) => {
  //   this.props.navigation.navigate('SettingsData', {id});
  // };
  //
  // handleOpenPersonalSettings = (id) => {
  //   this.props.navigation.navigate('PersonalSettings', {id});
  // };
  //
  // handleOpenSettingsPassword = (id) => {
  //   this.props.navigation.navigate('SettingsPassword', {id});
  // };
  //
  // handleOpenSettingsInvite = () => {
  //   this.props.navigation.navigate('SettingsInvite');
  // }; // все методы тоже только пример!

  render() {
    const {users, invited, onRestore, onDelete, onDeleteInvite} = this.props; // Это только пример!

    return (
      <SafeAreaView style={{flex: 1}}>
        <PairingChild />
      </SafeAreaView>
    );
  }
}
