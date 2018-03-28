import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MemoryImage from './MemoryImage';

class MemoryDetails extends React.Component {
  render() {
    const memory = this.props.selectedMemory;
    return (
      <View style={styles.container}>
        <MemoryImage 
          filePath={memory.filePath}
          height={200}
          width={200}
        />
        <Text style={styles.header}>Meddelande</Text>
        <Text>{memory.message}</Text>
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
    selectedMemory: state.memories.selectedMemory
  };
};
export default connect(mapStateToProps)(MemoryDetails);
