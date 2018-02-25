import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
/*
TODO: 
  Hämta användardata
  Kunna cascha hämtad data 
  Kunna avgöra om det finns ny data, eller om data blivit ändrad. 

*/



class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>

        </View>
        <View style={styles.content}></View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
   user: state.user,
   userDetails: state.userDetails.summary,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 2,
    elevation: 8, 
    alignSelf: 'stretch',
    backgroundColor: '#ddd'
  },
  content: {
    flex: 3
  }
});
