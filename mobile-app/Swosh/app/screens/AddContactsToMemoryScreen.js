import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
import ContactList from '../components/contacts/ContactList';
import { contactPicked } from '../actions/';

class AddContactsToMemoryScreen extends React.Component {

  render() {
    console.log('selected c', this.props.selectedContacts);
    return (
      <View style={styles.container}>
        <ContactList 
          pickedContacts={this.props.selectedContacts}
          contacts={this.props.contacts}
          onContactPicked={(contact) => this.props.contactSelected(contact.guid)}
        />
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
  }
});

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.contacts,
    selectedContacts: state.postMemory.contactGuids
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    contactSelected: (contactGuid) => dispatch(contactPicked(contactGuid))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(AddContactsToMemoryScreen)