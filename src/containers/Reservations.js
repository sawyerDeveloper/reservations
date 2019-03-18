import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { graphql } from 'react-apollo'
import { getReservations } from '../queries/queries'
import Reservation from '../components/reservations/Reservation';

class Reservations extends Component {

  _keyExtractor = (item) => item.id
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        width: '100%',
        //alignItems: 'center',
        justifyContent: 'space-around',
      },
    })
    if(this.props.data.reservations){
      console.log(this.props.data.reservations.length)
    }
    
    return (
      <View style={styles.container}>
      <FlatList keyExtractor={this._keyExtractor} data={this.props.data.reservations} renderItem={({item}) => { 
      return <Reservation reservation={item} /> }}/>
      </View>
    )
  }
}

export default graphql(getReservations)(Reservations)