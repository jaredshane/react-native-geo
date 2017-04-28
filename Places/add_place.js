import React, { Component } from 'react'
import { Text, TextInput, TouchableHighlight, View, StyleSheet } from 'react-native'

export default class AddPlace extends Component {
  constructor() {
    super()
    this.state = {
        title: '',
        latitude: '',
        longitude: '',
        titleError: '',
        latitudeError: '',
        longitudeError: ''
    }
  }

  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>Title</Text>
        <TextInput style={styles.textInput} value={this.state.title} onChangeText={(title) => this.setState({ title })}></TextInput>
        <Text style={styles.text}>Latitude</Text>
        <TextInput keyboardType='numbers-and-punctuation' style={styles.textInput}></TextInput>
        <Text style={styles.text}>longitude</Text>
        <TextInput style={styles.textInput} keyboardType='numbers-and-punctuation'></TextInput>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>Add Place</Text>
        </TouchableHighlight>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    paddingTop: 50,
    paddingleft: 30,
    paddingRight: 30,
    backgroundColor: '#fed',
    flex: 1
  },
  text: {
    color: '#333333',
    marginBotton: 5
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBotton: 5
  },
  button: {
    backgroundColor: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
