import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class RoleScreen extends React.PureComponent {
  handleNavigateToCode = () => {
    const {navigation} = this.props;

    navigation.navigate('Code');
  };

  handleNavigateToChild = () => {
    const {navigation} = this.props;

    navigation.navigate('Child');
  };

  render() {
    return (
      <View style={styles.role}>
        <Text style={styles.title}>
          Welcome to the Children App! Choose your role
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={this.handleNavigateToCode}>
          <Text style={styles.text}>Я Родитель</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={this.handleNavigateToChild}>
          <Text style={styles.text}>Я Ребенок</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  role: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    padding: 10,
  },

  button: {
    padding: 20,
    paddingTop: 12,
    paddingBottom: 12,
    margin: 10,
    borderWidth: 2,
    borderRadius: 4,
  },

  text: {
    textAlign: 'center',
    fontSize: 18,
  },

  title: {
    marginBottom: 10,
  },
});
