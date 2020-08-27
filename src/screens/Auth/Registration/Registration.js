import * as React from 'react';
import {SafeAreaView} from 'react-navigation';
import Registration from '../../../pages/Registration';

export default class RegistrationScreen extends React.PureComponent {
  handleOpenPairingChild = () => {
    this.props.navigation.navigate('PairingChild');
  };

  handleOpenPairingParent = () => {
    this.props.navigation.navigate('PairingParent');
  };

  render() {
    const {users, invited, onRestore, onDelete, onDeleteInvite} = this.props; // Это только пример!

    return (
      <SafeAreaView style={{flex: 1}}>
        <Registration
          onOpenPairingChild={this.handleOpenPairingChild}
          onOpenPairingParent={this.handleOpenPairingParent}
        />
      </SafeAreaView>
    );
  }
}
