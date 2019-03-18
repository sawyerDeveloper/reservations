import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, DatePickerIOS } from 'react-native'
import { graphql } from 'react-apollo'
import { createReservation } from '../queries/queries'

class NewReservation extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      hotelName: '',
      arrivalDate: new Date(),
      departureDate: new Date()
    }
  }

  createReservation = () => {
    this.props.createReservation({
      variables: {
        name: this.state.name,
        hotelName: this.state.hotelName,
        arrivalDate: this.state.arrivalDate,
        departureDate: this.state.departureDate
      }
    })
  }

  render() {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        //alignItems: 'center',
        justifyContent: 'center',
      },
      textInputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      textInput: {
        height: 50
      },
      datePickerContainer: {
        
      }
    })

    return (
      <View style={styles.container}>
        <Text>Reservation</Text>
        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput} placeholder="Name" onChangeText={text => this.setState({ name: text })} />
          <TextInput style={styles.textInput} placeholder="Hotel Name" onChangeText={text => this.setState({ name: text })} />
        </View>
        <View style={styles.datePickerContainer}>
          <DatePickerIOS mode="date" date={this.state.arrivalDate}
            onDateChange={date => this.setState({ arrivalDate: date })} />
          <DatePickerIOS date={this.state.departureDate}
            onDateChange={date => this.setState({ departureDate: date })} />
        </View>
      </View>
    )
  }
}

export default graphql(createReservation)(NewReservation)