import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import colors from '../constants/colors'
import config from '../config/config';
import MemoryPreview from '../components/MemoryPreview';
/*
TODO: 
  Hämta användardata
  Kunna cascha hämtad data 
  Kunna avgöra om det finns ny data, eller om data blivit ändrad. 

*/
const MEMORIES_PER_ROW = 3;
class MemoriesScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  renderRow(memories) {
    return memories.map((memory, i) => (
      <View style={styles.memoryContainer} key={i}>
        <MemoryPreview 
          style={styles.memory}
          memory={memory}
          width={Dimensions.get('window').width / 3 - 30}
          height={100}
        />
      </View>
    ));
  }

  renderMemoriesInGroupOf(number) {
    const dividedArray = this.getMemoriesInGroupsOf(number-1);
    return dividedArray.map((memoriesForRow, i) => (
      <View key={i} style={styles.memoryRow}>
        {this.renderRow(memoriesForRow)}
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
    console.log('FIXED 3 ARRAY', result);
    return result;
  }

  chunkArray(memories, rowSize){
    var index = 0;
    var arrayLength = memories.length;
    var tempArray = [];
    
    for (index = 0; index < arrayLength; index += rowSize) {
        myChunk = memories.slice(index, index+rowSize);
        tempArray.push(myChunk);
    }
    return tempArray;
}

  render() {
    this.renderMemoriesInGroupOf(MEMORIES_PER_ROW);
    return (
      <View style={styles.container}>
        <Text>Alla dina skickade minnen</Text>
        <View style={styles.content}> 
          { this.props.memories.length ? this.renderMemoriesInGroupOf(MEMORIES_PER_ROW) : <Text>Blaj</Text>}  
      </View>      
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
   user: state.user,
   memories: state.memories.memories,
   //userDetails: state.userDetails.summary,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(MemoriesScreen);

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
