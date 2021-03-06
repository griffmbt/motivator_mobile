import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Header } from "./src/components/Header";
import { AddScr } from "./src/screen/AddScr";
import { MainScr } from "./src/screen/MainScr";
import { THEME } from "./src/theme";


export default function App() {
  const [habitId, setHabitId] = useState("1");
  const [habits, setHabits] = useState([]);

  const updateHabit = (id, title, award1, award2, award3, days, chain) => {
    setHabits(old => old.map(habit => {
      if (habit.id === id) {
        habit.title = title;
        habit.award1 = award1;
        habit.award2 = award2;
        habit.award3 = award3;
        habit.days = days; 
        habit.chain = chain;
      }

      return habit
    }))
  }

  let habitTitle = habits.find(habit => habitId === habit.id)

  const addHabit = (title) => {
    const newHabit = {
      id: Date.now().toString(),
      title,
    };

    return setHabits((prev) => [...prev, newHabit]);
  };

  const removeHabit = (id) => {
    const habit = habits.find(hab => hab.id === id);

    Alert.alert(
      "Удаление элемента",
    `Вы точно хотите удалить "${habit.title}"?`,
      [
        {
          text: "отмена",
          style: "cancel"
        },
        { text: "удалить", style: "destructive", onPress: () => {
          setHabitId("1"); 
          setHabits(prev => prev.filter(habit => habit.id !== id))
        } }
      ]
    );
  }

  return (
    <View style={styles.appContainer}>
      <Header />
      <View style={styles.container}>
        {habitId === "1" ? (
          <AddScr addHabit={addHabit} habits={habits} openHabit={setHabitId} />
        ) : (
          <MainScr goBack={() => setHabitId("1")} habit={habitTitle} onRemove={removeHabit} onSave={updateHabit} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: THEME.BACKGROUND_COLOR,
    height: "100%"
  },
  container: {
    padding: 20,
  },
});
