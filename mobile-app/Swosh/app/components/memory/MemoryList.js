import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, FlatList, TouchableHighlight, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import MemoryPreview from './MemoryPreview';
import { memorySelected } from '../../actions';
import Dialog from '../Dialog';

//{this.renderMemoriesInGroupOf(this.props.itemsPerRow)}

class MemoryList extends Component {

  render() {
    const imageSize = Dimensions.get('window').width / this.props.itemsPerRow - 10;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <FlatList 
            data={this.props.memories}
            numColumns={this.props.itemsPerRow}
            keyExtractor={(item, index) => index}
            initialNumToRender={3}
            renderItem={({item}, index) => (
              <TouchableHighlight
                onPress={() => this.onMemoryClicked(item)}  
              >
                <MemoryPreview 
                  style={styles.memory}
                  memory={item}
                  width={imageSize}
                  height={imageSize}
                  borderRadius={100}
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
    this.props.onSelectMemory();
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
    navigation: state.navigation
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(MemoryList);

//https://stackoverflow.com/questions/41540279/react-native-how-to-build-an-image-grid-like-facebook