import * as React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default class PairingChild extends React.PureComponent {
  state = {
    code: '',
  };

  handleChangeCode = (code) => {
    this.setState({code});

    if (code.length === 8) {
    }
  };

  render() {
    const {code} = this.state;

    return (
      <View style={styles.child}>
        <Text style={styles.child__text}>Enter your parent's code</Text>

        <TextInput
          value={code}
          onChangeText={this.handleChangeCode}
          autoCapitalize="characters"
          maxLength={8}
          style={styles.child__input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  child: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(211,0,59,0.4)',
    padding: 10,
  },

  child__text: {
    textAlign: 'center',
    fontSize: 20,
  },

  child__input: {
    marginTop: 20,
    borderWidth: 2,
    width: '50%',
    fontSize: 26,
    color: '#fff',
    padding: 15,
    letterSpacing: 2.5,
  },
});
