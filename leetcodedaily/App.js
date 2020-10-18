import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


// password = password123
/*Webview import does most of the work*/
const App = () => {
  return (
    <WebView
      source={{
        uri: 'https://leetcode.com/problems/random-one-question/all'//on app opening opens webview of random leetcode
      }}
      style={{ marginTop: 20 }}
    />
  );
}


export default App;