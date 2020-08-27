import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {makeCode} from '../../helpers/generateCode';

export default class PairingParent extends React.PureComponent {
  state = {
    code: '',
  };
  //TODO тут остановился на планировании как сделать спраивание двух телефонов
  async componentDidMount() {
    fetch('http://10.0.2.2:3000/act/generate/code').then((res) =>
      console.log(res),
    );

    const code = makeCode(8);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({code}),
    };

    this.setState({code});
    await fetch('http://10.0.2.2:3000/act/generate/code', options).then((res) =>
      console.log(res),
    );
  }

  render() {
    const {code} = this.state;

    return (
      <View style={styles.parent}>
        <Text style={styles.parent__text}>Your code is</Text>

        <Text style={[styles.parent__text, styles['parent__text--code']]}>
          {code}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(211,211,0,0.4)',
    padding: 10,
  },

  parent__text: {
    textAlign: 'center',
    fontSize: 18,
  },

  'parent__text--code': {
    fontSize: 20,
    color: '#b8000f',
  },
});
