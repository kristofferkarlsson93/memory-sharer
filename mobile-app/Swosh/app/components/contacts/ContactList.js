import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import ContactSummary from './ContactSummary';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors';

class ContactList extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.contacts}
          keyExtractor={(item, index) => index}
          renderItem={({item}, index) => (
            <ContactSummary
              avatar={<Icon size={28} name={'person'} />}
              username={item.username}
              selected={this.props.pickedContacts && this.props.pickedContacts.contains(item.guid) ? true : false }
              pickedColor={colors.primaryColor}
              onPress={() => this.props.onContactPicked(item)}
            />
          )} 
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  }
});


export default ContactList

/**
 * 
 *  {
          this.props.contacts.map((contact, index)=> (
            <ContactSummary
              key={index}
              avatar={<Icon size={24} name={'person'} />}
              username={contact.username}
            />
          ))
        }
 */
