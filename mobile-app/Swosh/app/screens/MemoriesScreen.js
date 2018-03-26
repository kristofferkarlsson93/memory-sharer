import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import colors from '../constants/colors'
import config from '../config/config';
import MemoryList from '../components/MemoryList';
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

  render() {
    return (
      <View style={styles.container}>
        <Text>Alla dina skickade minnen</Text>
        <View style={styles.content}> 
          { this.props.memories.length 
            ? <MemoryList memories={this.props.memories} itemsPerRow={3} /> 
            : <Text>Blaj</Text>}  
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
