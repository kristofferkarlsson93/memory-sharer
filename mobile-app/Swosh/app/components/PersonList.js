import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors'

export default class PersonList extends React.Component {
  render() {
    console.log(this.props.listItems);
    const listItems = this.props.listItems;
    let contactString = ''
    listItems.forEach(recipient => contactString += recipient.username + '\n');
    console.log(contactString);
    return (
      
        <Text>{contactString}</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

