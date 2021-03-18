import React, { useState }from "react";
import { StyleSheet, Text, View, Modal, TextInput, Button } from "react-native";

export const EditModal = ({ visible, onCancel, value, onSave, }) => {
    const [title, setTitle] = useState(value)
    const [award1, setAward1] = useState('')
    const [award2, setAward2] = useState('')
    const [award3, setAward3] = useState('')

    const saveHandler = () => {
        onSave(title, award1, award2, award3)
    }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.wrap}>
        <TextInput
          style={styles.textInput}
          placeholder="введите новое название привычки"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.textInput}
          placeholder="введите вознаграждение 1"
          value={award1}
          onChangeText={setAward1}
        />
        <TextInput
          style={styles.textInput}
          placeholder="введите вознаграждение 2"
          value={award2}
          onChangeText={setAward2}
        />
        <TextInput
          style={styles.textInput}
          placeholder="введите вознаграждение 3"
          value={award3}
          onChangeText={setAward3}
        />

        <View style={styles.buttons}>
          <Button title="отменить" onPress={onCancel} color="red" />
          <Button title="сохранить" onPress={saveHandler} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    marginBottom: 10,
    padding: 10,
    borderBottomColor: "#444c5c",
    borderBottomWidth: 2,
    width: "80%",
  },
  buttons: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
