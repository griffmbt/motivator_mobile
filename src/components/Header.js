import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>MOTIVATOR</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
      height: 70,
      paddingBottom: 10,
      backgroundColor: '#444c5c',

      alignItems: 'center',
      justifyContent: 'flex-end',
  },

  text: {
      color: 'white',
      fontSize: 20,
  },
});
