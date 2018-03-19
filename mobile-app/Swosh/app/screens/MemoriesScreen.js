import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import MenuCard from '../components/MenuCard';
import colors from '../constants/colors'
/*
TODO: 
  Hämta användardata
  Kunna cascha hämtad data 
  Kunna avgöra om det finns ny data, eller om data blivit ändrad. 

*/

class MemoriesScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menuItem}>
          <MenuCard 
            text={'Jag'}
            backgroundColor={colors.primaryColor}
          />
          <MenuCard 
            text={'Kontakter'}
            backgroundColor={colors.primaryBorderColor}
          />
          <MenuCard 
            text={'Skickade minnen'}
            backgroundColor={colors.bottomMenu}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
   user: state.user,
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
  menuItem: {
    flex: 1,
    elevation: 8, 
    alignSelf: 'stretch',
  }
});
