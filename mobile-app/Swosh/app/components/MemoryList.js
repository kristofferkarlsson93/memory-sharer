import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, FlatList, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux'
import MemoryPreview from './MemoryPreview';
import { memorySelected } from '../actions';

//{this.renderMemoriesInGroupOf(this.props.itemsPerRow)}

class MemoryList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
        <FlatList 
          data={this.props.memories}
          numColumns={this.props.itemsPerRow}
          keyExtractor={(item, index) => index}
          renderItem={({item}, index) => (
            <TouchableHighlight
              onPress={() => this.onMemoryClicked(item)}  
            >
              <MemoryPreview 
                style={styles.memory}
                memory={item}
                width={Dimensions.get('window').width / this.props.itemsPerRow}
                height={100}
              />
            </TouchableHighlight>
          )}
        />
        </View>
      </View>
    )
  }

  onMemoryClicked(memory) {
    this.props.selectMemory(memory);
  }


  renderMemoriesInGroupOf(number) {
    const dividedArray = this.getMemoriesInGroupsOf(number-1);
    return dividedArray.map((memoriesForRow, i) => (
      <View key={i} style={styles.memoryRow}>
        {this.renderRow(memoriesForRow)}
      </View>
    ));
  }

  renderRow(memories) {
    return memories.map((memory, i) => (
      <View style={styles.memoryContainer} key={i}>
        <MemoryPreview 
          style={styles.memory}
          memory={memory}
          width={Dimensions.get('window').width / this.props.itemsPerRow - 20}
          height={100}
        />
      </View>
    ));
  }

  getMemoriesInGroupsOf(number) {
    const result = [];
    let temp = [];
    this.props.memories.forEach((memory, i) => {
      temp.push(memory);
      if (i % number === 0 && i !== 0) {
        result.push(temp);
        temp = [];
      } 
    });
    return result;
  }
  
  chunkArray(memories, rowSize) {
    var index = 0;
    var arrayLength = memories.length;
    var tempArray = [];
    
    for (index = 0; index < arrayLength; index += rowSize) {
        myChunk = memories.slice(index, index+rowSize);
        tempArray.push(myChunk);
    }
    return tempArray;
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
  },
  menuItem: {
    flex: 1,
    elevation: 8, 
    alignSelf: 'stretch',
  },
  memoryRow: {
  },
  memoryContainer: {
   
  },
  memory: {
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    selectMemory: (memory) => dispatch(memorySelected(memory))
  }
}

const mapStateToProps = (state) => {
  return {
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(MemoryList);

//https://stackoverflow.com/questions/41540279/react-native-how-to-build-an-image-grid-like-facebook