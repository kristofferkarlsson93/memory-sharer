import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MemoryImage from './MemoryImage';
import colors from '../../constants/colors';
import RoundedComponent from '../RoundedComponent';
import Dialog from '../Dialog';
import PersonList from '../PersonList';

class MemoryDetails extends React.Component {
  state = {
    showDialog: false
  }
  render() {
    const memory = this.props.selectedMemory;
    recipients = Object.keys(memory).length ? memory.recipients : false;
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={[styles.imageContainer, styles.contentItem]}>
            <MemoryImage 
              filePath={memory.filePath}
              height={250}
              width={300}
              borderRadius={25}
            />
          </View>
          <TouchableOpacity style={[styles.recipientContainer,]} onPress={() => this.onPressContacts()}>
            <Text style={styles.text}>Skickat till </Text>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>{recipients ? recipients[0].username : ''} </Text>
            <Text style={[styles.text, {fontWeight: 'bold'}]}> 
              { recipients && recipients.length > 1 ? 'och ' + this.getNumberOfHiddenRecipients(recipients) + ' till' : '' }
            </Text>
          </TouchableOpacity>
          <View style={[styles.messageContainer, styles.contentItem]}>
            <Text style={styles.text} >{memory.message}</Text>
          </View>
        </ScrollView>
        <Dialog
          title={'Mottagare'}
          name={'recipientsDialog'}
          showDialog={this.state.showDialog}
          children={<PersonList listItems={memory.recipients} />}
          scrolled={false}
          onOk={() => this.setState({showDialog: false})}
          cancelLabel={''}
          okLabel={'OKEJ'}
        />
      </View>
    );
  }

  onPressContacts() {
    this.setState({showDialog: true})
  }

  getNumberOfHiddenRecipients(recipients) {
    return recipients.length - 1;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  scrollView: {
  },
  contentItem: {
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imageContainer: {
    elevation: 10
  },
  recipientContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center'    
  },
  messageContainer: {
    width: 250,
    height: 250,
    padding: 20,
    backgroundColor: colors.primaryColor,
    borderRadius: 250
  },
  icon: {
  },
  text: {
    fontSize: 15,
    textAlign: 'center'
  },
  image: {
    borderRadius: 100,
  }
});

const mapStateToProps = (state) => {
  return {
    selectedMemory: state.memories.selectedMemory
  };
};
export default connect(mapStateToProps)(MemoryDetails);
