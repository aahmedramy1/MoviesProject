import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

const ErrorScreen = () => {
  return ( 
    <View style= {styles.container}>
        <Text>
            Error fetching data, please try again later.
        </Text>
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

export default ErrorScreen;
