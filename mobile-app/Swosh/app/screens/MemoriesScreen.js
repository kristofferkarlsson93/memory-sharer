import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import colors from '../constants/colors'
import config from '../config/config';
import MemoryList from '../components/memory/MemoryList';
import NumberSummary from '../components/summarys/NumberSummary';

/**
 * TODO: Lägg till funktionalitet för att visa mottagna minnen också.
 */

const MEMORIES_PER_ROW = 3;

class MemoriesScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <NumberSummary number={this.props.memories.length} title={'Skickat'}/>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <NumberSummary number={0} title={'Mottaget'} />
          </View>
        </View>
        <View style={styles.content}> 
          { this.props.memories.length 
            ? <MemoryList 
                memories={this.props.memories} 
                itemsPerRow={MEMORIES_PER_ROW}
                onSelectMemory={() => this.props.navigation.navigate('MemoryDetailsScreen')}
              /> 
            : <Text>Du har inte skapat några minnen ännu.</Text>}  
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
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',    
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: colors.background,
  },
  content: {
    flex: 5,
    marginTop: 10
  }
});
