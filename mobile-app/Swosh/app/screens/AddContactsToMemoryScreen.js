import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
import ContactList from '../components/contacts/ContactList';
import { contactPicked } from '../actions/';
import RoundedButton from '../components/RoundedButton';
import colors from '../constants/colors';
import { sendMemory } from '../actions';

class AddContactsToMemoryScreen extends React.Component {

  render() {
    console.log('selected c', this.props.selectedContacts);
    return (
      <View style={styles.container}>
        <View style={styles.contactContainer}>
          <ContactList 
            pickedContacts={this.props.selectedContacts}
            contacts={this.props.contacts}
            onContactPicked={(contact) => this.props.contactSelected(contact.guid)}
          />
        </View>
        <View style={styles.continueContainer}>
        <RoundedButton 
            size={100}
            backgroundColor={colors.primaryColor}
            icon={'arrow-forward'}
            onPress={() => this.props.postMemory()}
          />
          <Text style={styles.buttonText}>Skicka!</Text>
        </View>
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
  continueContainer: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center'
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
    contactSelected: (contactGuid) => dispatch(contactPicked(contactGuid)),
    postMemory: () => dispatch(sendMemory())
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(AddContactsToMemoryScreen)