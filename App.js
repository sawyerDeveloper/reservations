import React, { Component } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Reservations from './src/containers/Reservations'
import NewReservation from './src/containers/NewReservation'
import Header from './src/components/Header'

const screens = {
  RESERVATIONS: 'Reservations',
  NEW_RESERVATION: 'NewReservation'
}

const client = new ApolloClient({
  uri: 'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev'
})

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentScreen: screens.NEW_RESERVATION
    }
  }

  navEvent = (nav) => {
    this.setState({
      currentScreen: nav
    })
  }

  render() {

    const styles = StyleSheet.create({
      container: {
        flex: 9,
        backgroundColor: 'blanchedalmond',
        alignItems: 'center',
        justifyContent: 'center'
      },
      header: {
        flex: 1
      }
    })

    let container
    switch (this.state.currentScreen) {
      case screens.RESERVATIONS:
        container = <Reservations />
        break
      case screens.NEW_RESERVATION:
        container = <NewReservation />
        break
    }

    return (
      <ApolloProvider client={client}>
        <StatusBar hidden />
        <Header screens={screens} currentScreen={this.state.currentScreen} navEvent={this.navEvent} style={styles.header}/>
        <View style={styles.container}>
          {container}
        </View>
      </ApolloProvider>
    )
  }
}

export default App