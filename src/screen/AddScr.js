import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { AddHabits } from "../components/AddHabits";
import { Habit } from "../components/Habit";

export const AddScr = ({ addHabit, habits, openHabit }) => {
  return (
    <View>
      <AddHabits onSubmit={addHabit} />

      <ScrollView>
        {habits.map((habit) => (
          <Habit key={habit.id} habit={habit} onOpen={openHabit} />
        ))}
      </ScrollView>
    </View>
  );
}

