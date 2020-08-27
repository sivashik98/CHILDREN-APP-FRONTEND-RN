import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
} from 'react-native';

import {when} from './../../helpers/stylecompose';

export default class Registration extends React.PureComponent {
  state = {
    name: '',
    email: '',
    role: null,
  };

  handleChangeName = (name) => {
    this.setState({name});
  };

  handleChangeEmail = (email) => {
    this.setState({email});
  };

  handleChangeRole = (role) => () => {
    this.setState({role});
  };

  handlePressContinue = () => {
    const {name, email, role} = this.state;
    const {onOpenPairingChild, onOpenPairingParent} = this.props;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, role}),
    };
    const path = role === 0 ? 'child' : 'parent';

    fetch(`http://10.0.2.2:3000/auth/register/${path}`, options).then((res) =>
      console.log(res),
    );

    role === 0 ? onOpenPairingChild() : onOpenPairingParent();
  };

  render() {
    const {name, email, role} = this.state;

    return (
      <View style={styles.registration}>
        <Text style={styles.registration__text}>Fill in following fields</Text>

        <TextInput
          value={name}
          placeholder={'Введите имя'}
          onChangeText={this.handleChangeName}
          maxLength={25}
          style={styles.registration__input}
        />

        <TextInput
          value={email}
          placeholder={'Введите email'}
          onChangeText={this.handleChangeEmail}
          maxLength={45}
          style={styles.registration__input}
        />

        <View style={styles.registration__wrapSelection}>
          <View
            style={[
              styles.registration__button,
              styles['registration__button--selection'],
              when(role !== 0, styles['registration__button--inactive']),
            ]}>
            <TouchableNativeFeedback
              onPress={this.handleChangeRole(0)}
              accessibilityRole="button">
              <Text
                style={[
                  styles.registration__buttonText,
                  when(
                    role !== 0,
                    styles['registration__buttonText--inactive'],
                  ),
                ]}>
                Я ребенок
              </Text>
            </TouchableNativeFeedback>
          </View>

          <View
            style={[
              styles.registration__button,
              styles['registration__button--selection'],
              when(role !== 1, styles['registration__button--inactive']),
            ]}>
            <TouchableNativeFeedback
              onPress={this.handleChangeRole(1)}
              accessibilityRole="button">
              <Text
                style={[
                  styles.registration__buttonText,
                  when(
                    role !== 1,
                    styles['registration__buttonText--inactive'],
                  ),
                ]}>
                Я родитель
              </Text>
            </TouchableNativeFeedback>
          </View>
        </View>

        <View style={styles.registration__button}>
          <TouchableNativeFeedback
            onPress={this.handlePressContinue}
            accessibilityRole="button">
            <Text style={styles.registration__buttonText}>Продолжить</Text>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  registration: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(106,211,161,0.4)',
    padding: 10,
  },

  registration__text: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
  },

  registration__input: {
    width: '75%',
    margin: 20,
    marginBottom: 0,
    borderBottomWidth: 2,
    borderColor: '#00b46d',
    fontSize: 18,
    color: '#000',
    padding: 15,
    letterSpacing: 1.5,
  },

  registration__wrapSelection: {
    width: '75%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  registration__button: {
    height: 44,
    width: '75%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#008201',
  },

  'registration__button--selection': {
    width: '45%',
    marginTop: 0,
  },

  'registration__button--inactive': {
    borderColor: '#a7a9b1',
  },

  registration__buttonText: {
    color: '#576989',
    fontFamily: 'Roboto-Medium',
    lineHeight: 20,
    letterSpacing: 0.75,
    fontSize: 18,
    textAlign: 'center',
  },

  'registration__buttonText--inactive': {
    color: '#a7a9b1',
  },
});
