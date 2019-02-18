import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Reservations from './src/containers/Reservations'
import NewReservation from './src/containers/NewReservation'

const containers = {
  RESERVATIONS: 'Reservations',
  NEW_RESERVATION: 'NewReservation'
}

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      currentScreen: containers.RESERVATIONS
    }
  }

  render() {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    })

    let container
    switch(this.state.currentScreen){
      case containers.RESERVATIONS :
        container = <Reservations />
      break
      case containers.NEW_RESERVATION :
        container = <NewReservation />
      break
    }

    return (
      <View style={styles.container}>
        {container}
      </View>
    )
  }
}

export default App