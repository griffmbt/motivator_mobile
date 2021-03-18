import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../theme";

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
      backgroundColor: THEME.BACKGROUND_COLOR,

      alignItems: 'center',
      justifyContent: 'flex-end',
  },

  text: {
      color: 'white',
      fontSize: 20,
  },
});
