import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'


const Reservation = (props) => {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 10,
        height: 100,
        backgroundColor: 'cornflowerblue'
      },
      text: {
        color: 'blanchedalmond',
        padding: 5
      },
      title: {
        fontSize: 20
      },
      data: {
        fontSize: 12
      },
      name: {
        fontSize: 25,
        fontWeight: 'bold'
      },
      row: {
          flexDirection: 'row',
          alignItems: 'center'
      },
      column: {
          flex: 1
      },
      names: {
          marginLeft: 10
      }
    })

    const data = props.reservation
    return (
      <View style={styles.container}>
        <View style={[styles.column, styles.names]}>
            <View style={styles.row}>
                <Text style={[styles.name, styles.text]}>{data.name}</Text> 
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>{data.hotelName}</Text>
            </View>
        </View>
        <View style={styles.column}>
            <Text style={styles.text}>Arrival: {data.arrivalDate}</Text>
            <Text style={styles.text}>Departure: {data.departureDate}</Text>
        </View>
      </View>
    )
}

export default Reservation