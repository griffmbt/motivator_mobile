import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { THEME } from "../theme";

export const Habit = ({ habit, onOpen }) => {
  return (
    
      <TouchableOpacity 
      activeOpacity={0.3}
      onPress={() => onOpen(habit.id)}
      >
        <View style={styles.habit}>
          <Text style={styles.title}>{habit.title}</Text>
        </View>
      </TouchableOpacity>
 
  );
};

const styles = StyleSheet.create({
  habit: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    backgroundColor: THEME.LIGHT_MUSTARD_COLOR,
  },
  title: {
      fontSize: 20,
  }
});
