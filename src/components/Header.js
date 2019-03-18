import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'

const Header = (props) => {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 100,
        backgroundColor: 'coral'
      },
      text: {
        color: 'blanchedalmond',
        fontSize: 40
      },
      cancel: {
        color: 'crimson',
        fontSize: 40
      },
      save: {
        color: 'seagreen',
        fontSize: 40
      },
      row: {
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around'
      }
    })

    navEvent = () => {
        const nav = props.currentScreen == props.screens.NEW_RESERVATION ? props.screens.RESERVATIONS : props.screens.NEW_RESERVATION
        props.navEvent(nav)
    } 

    setButtons = () => {
        let view
        switch(props.currentScreen){
            case props.screens.RESERVATIONS: 
                view = (<TouchableHighlight onPress={navEvent}>
                            <Text style={styles.text}>New</Text>
                        </TouchableHighlight>)
            break
            case props.screens.NEW_RESERVATION: 
                view = (<View style={styles.row}>
                    <TouchableHighlight onPress={navEvent}>
                            <Text style={styles.save}>Save</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={navEvent}>
                            <Text style={styles.cancel}>Cancel</Text>
                        </TouchableHighlight>
                    </View>)
            break
        }
        return view
    }

    return (
      <View style={styles.container}>
        {this.setButtons()}
      </View>
    )
}

export default Header