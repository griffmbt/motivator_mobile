import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { Card } from "../components/Card";
import { EditModal } from "../components/EditModal";

export const MainScr = ({ goBack, habit, onRemove, onSave }) => {
  const [modal, setModal] = useState(false);
  const [days, setDays] = useState('0');
  const [chain, setChain] = useState('0');

  const onSaveHandler = (title, award1, award2, award3) => {
    onSave(habit.id, title, award1, award2, award3);
    setModal(false);
  };

  return (
    <View>
      <EditModal
        value={habit.title}
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={onSaveHandler}
      />

      <Card>
        <Text style={styles.title}>{habit.title}</Text>

        <View style={styles.run}>
          <View style={styles.days}>
            <Text style={styles.text}>количество</Text>
            <Text style={styles.text}>выполнений:</Text>
            <Text style={styles.text}>{days}</Text>
          </View>
          <View style={styles.days}>
            <Text style={styles.text}>количество</Text>
            <Text style={styles.text}>без перерыва:</Text>
            <Text style={styles.text}>{chain}</Text>
          </View>
        </View>

      </Card>

      <Card>
      <View style={styles.award}>
          <Text>Твоя награда:</Text>
          <Text>{habit.award1}</Text>
          <Text>{habit.award2}</Text>
          <Text>{habit.award3}</Text>
        </View>
        <Button title="редактировать" onPress={() => setModal(true)} />
      </Card>

      <View style={styles.mainButton}>
        <View style={styles.button}>
          <Button title="назад" onPress={goBack} />
        </View>
        <View style={styles.button}>
          <Button
            title="удалить"
            color="red"
            onPress={() => onRemove(habit.id)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainButton: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  run: {
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
   
  },
  days: {
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
  },

  button: {
    width: "40%",
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 15,
  },

  award: {
    flexDirection: "column",
    alignItems: "center",
  },
});
