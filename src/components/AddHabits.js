import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
//import { AntDesign } from '@expo/vector-icons'; 

export const AddHabits = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
     Alert.alert('заполните поле')
    }
    
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="название привычки"
      />
     
      <Button title="добавить" color="#444c5c" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  input: {
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#444c5c",
  },
});
