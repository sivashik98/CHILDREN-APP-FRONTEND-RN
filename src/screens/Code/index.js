import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {makeCode} from '../../helpers/generateCode';

export default class CodeScreen extends React.PureComponent {
  state = {
    generatedCode: '',
  };

  componentDidMount() {
    const generatedCode = makeCode(7);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({generatedCode}),
    };

    this.setState({generatedCode});
    fetch('http://10.0.2.2:3000/generate/send', options).then((e) =>
      console.log(e),
    );
  }

  render() {
    const {generatedCode} = this.state;

    return (
      <View style={styles.code}>
        <View styles={styles.code__wrap}>
          <Text style={styles.text}>Your code is</Text>

          <Text style={[styles.text, styles['text--code']]}>
            {generatedCode}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  code: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,194,0,0.38)',
    padding: 10,
  },

  code__wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },

  text: {
    textAlign: 'center',
    fontSize: 18,
  },

  'text--code': {
    fontSize: 20,
    color: '#b8000f',
  },
});
