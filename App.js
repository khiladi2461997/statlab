import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RoundedButton from './RoundedButton';

export default function App() {

  const [color, setColor] = useState('#161616');
  return (
      <View style={[styles.container, { backgroundColor: color }]}>
        <RoundedButton
            text="Next"
            textColor="#161616"
            onPress={() => setColor(randomRgb())}
        />
      </View>
  );
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});