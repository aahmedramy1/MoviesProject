import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import MovieList from '../components/MovieList';

export default function LoadingScreen() {
  return ( 
    <View style= {styles.container}>
        <ActivityIndicator size={"large"} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
