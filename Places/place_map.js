import React, { Component } from 'react'
import {
  MapView,
  View,
  StyleSheet
} from 'react-native'

export default class PlaceMap extends Component {
  render() {
    return (
      <MapView
        style={styles.map}
        region={this.region}
        annotations={this.props.annotations}
      />
    )
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
})
