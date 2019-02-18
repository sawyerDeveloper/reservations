import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Reservations extends Component {

  render() {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    })

    return (
      <View style={styles.container}>
        <Text>Reservations</Text>
      </View>
    )
  }
}

export default Reservations