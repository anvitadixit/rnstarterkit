/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import NavigationFlowSet from './src/navigation/NavigationFlowSet';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationFlowSet />
    </>
  );
};

export default App;
