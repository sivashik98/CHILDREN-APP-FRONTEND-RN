import * as React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default class ChildScreen extends React.PureComponent {
  state = {
    code: '',
  };

  handleChangeText = (code) => {
    //Тут я считаю количество символов и как только тут достигает 7 я должен пушить запрос в бд и сравнивать код.
    this.setState({code});
  };

  render() {
    const {code} = this.state;

    return (
      <View style={styles.child}>
        <Text style={styles.child__text}>Enter your parent's code</Text>

        <TextInput
          value={code}
          onChangeText={this.handleChangeText}
          maxLength={7}
          style={styles.child_input}
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
    backgroundColor: 'rgba(181,0,211,0.4)',
    padding: 25,
  },

  child__text: {
    textAlign: 'center',
    fontSize: 20,
  },

  child_input: {
    marginTop: 20,
    borderWidth: 2,
    width: '50%',
    fontSize: 26,
    color: '#fff',
    padding: 15,
    letterSpacing: 2,
    // textTransform: 'uppercase',
  },
});
