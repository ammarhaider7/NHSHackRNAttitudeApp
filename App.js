/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Attitude from 'react-native-attitude';

class App extends Component {

  componentDidMount() {
    Attitude.watch((payload => {
      console.log('### payload');
      console.log(JSON.stringify(payload));
      this.setState((prevState) => {
        return {
          pitch: payload.pitch.toFixed(2),
          heading: payload.heading.toFixed(2),
          roll: payload.roll.toFixed(2)
        }
      })
    }));
  }

  state = {
    pitch: 0,
    heading: 0,
    roll: 0
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Pitch</Text>
                <Text style={styles.sectionDescription}>
                  {this.state.pitch}
                </Text>
                <Text style={styles.sectionTitle}>Heading</Text>
                <Text style={styles.sectionDescription}>
                  {this.state.heading}
                </Text>
                <Text style={styles.sectionTitle}>Roll</Text>
                <Text style={styles.sectionDescription}>
                  {this.state.roll}
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
