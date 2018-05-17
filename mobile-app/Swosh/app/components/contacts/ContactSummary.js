import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableHighlight} from 'react-native';

class ContactList extends React.Component {

  render() {
    return (
      <TouchableHighlight onPress={() => this.props.onPress()} >
        <View style={[styles.container, {backgroundColor: this.props.selected ? this.props.pickedColor : '#fff'}]}>
          <View style={styles.contactItem}>
            {this.props.avatar}
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.username}>{this.props.username}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: 75,
    borderBottomColor: '#eee',
    borderBottomWidth: 2,
  },
  contactItem: {
    justifyContent: 'flex-start',
    marginLeft: 10,
    marginRight: 10,
  },
  username: {
    fontSize: 20
  }
});


export default ContactList