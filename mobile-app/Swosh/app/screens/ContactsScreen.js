import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem } from 'react-native-elements'
import colors from '../constants/colors';
import MemoryDetails from '../components/memory/MemoryDetails';
import Icon from 'react-native-vector-icons/MaterialIcons';

class ContactsScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <List containerStyle={styles.list}>
          {
            this.props.contacts.map((contact, index) => (
              <View style={styles.listItemContainer} key={index}>
                <ListItem
                  style={[styles.listItem]}
                  roundAvatar
                  hideChevron
                  avatar={<Icon size={24} color={colors.primaryColor} name='person' />}
                  key={index}
                  title={contact.username}
                />
              </View>
            ))
          }
        </List>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: Dimensions.get('window').width,
    marginTop: 25, 
    flex: 1,
  },
  listItemContainer: {
  },
  listItem: {
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: colors.primaryBorderColor,
    borderBottomWidth: 2,
  }
});

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.contacts
  }
};

export default connect(mapStateToProps)(ContactsScreen);
