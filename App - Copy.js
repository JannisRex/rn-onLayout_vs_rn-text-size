// @flow strict
import React, { Component } from 'react'
import rnTextSize, { TSFontSpecs } from 'react-native-text-size'
import { StyleSheet, Dimensions, Text, View } from 'react-native'

const fontFamily = 'Roboto'
const fontSize = 15
const fontWeight = '600'

const fontSpec: TSFontSpecs = {
  fontFamily,
  fontSize,
  fontWeight
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  redText: {
    fontFamily,
    fontSize,
    fontWeight,
    backgroundColor: 'red'
  }
})

const textText = 'this is a short text'

_getDimensions = () => {}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      width: 0,
      height: 0
    }
  }

  async componentDidMount() {
    const width = Dimensions.get('window').width * 0.8
    const size = await rnTextSize.measure({
      textText,
      width,
      ...fontSpec
    })
    this.setState({
      width: size.width,
      height: size.height
    })
    console.log('a')
  }

  render() {
    const { width, height } = this.state

    return (
      <>
      <View style={styles.container}>
        <Text style={styles.redText}>{textText}</Text>
      </View>

      <View style={styles.container}>
        <Text>Width: {width}</Text>
        <Text>Height: {height}</Text>
      </View>
      </>
    )
  }
}

export default App
