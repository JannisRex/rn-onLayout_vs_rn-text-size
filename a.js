// @flow strict
import React, { Component } from 'react'
import rnTextSize, { TSFontSpecs } from 'react-native-text-size'
import { StyleSheet, Dimensions, Text, View } from 'react-native'

type Props = { texts: string[] }
type State = { heights: number[] }

// On iOS 9+ will show 'San Francisco' and 'Roboto' on Android
const fontSpecs: TSFontSpecs = {
  fontFamily: undefined,
  fontSize: 24,
  fontStyle: 'italic',
  fontWeight: 'bold'
}

const text = 'I ❤️ rnTextSize'
const text2 = 'I ❤️ rnTextSize using flatHeights'
const text3 = 'Thx for flatHeights'

class Test extends Component<Props, State> {
  state = {
    dimensions: {},
    isLoading: true
  }

  async componentDidMount() {
    const width = Dimensions.get('window').width * 0.8
    const dimensions = await rnTextSize.flatHeights({
      text, // text to measure, can include symbols
      width, // max-width of the "virtual" container
      ...fontSpecs // RN font specification
    })
    this.setState({
      dimensions,
      isLoading: false
    })
  }

  render() {
    const { dimensions, isLoading } = this.state

    return isLoading ? (
      <View style={{ justifyContent: 'center', alignItems: 'center', padding: 12 }}>
        <Text style={{ fontSpecs }}>
          {JSON.stringify(dimensions)}
        </Text>
      </View>
    ) : <View><Text>LOADING</Text></View>
  }
}

export default Test
