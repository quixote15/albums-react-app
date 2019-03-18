import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class App extends React.Component {
  render() {
    return (
      // <Header headerText="Albums Bitch" />
      <ScrollView style={{flex: 1}}>
        <Header headerText={'Albums'} />
        <AlbumList />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
