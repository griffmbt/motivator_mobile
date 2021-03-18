import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { Card } from "../components/Card";
import { EditModal } from "../components/EditModal";
import { THEME } from "../theme";
import { AntDesign } from "@expo/vector-icons";

export const MainScr = ({ goBack, habit, onRemove, onSave }) => {
  const [modal, setModal] = useState(false);
  const [days, setDays] = useState(0);
  const [chain, setChain] = useState(0);
  const [isValid, setIsValid] = useState(true)

  const onSaveHandler = (title, award1, award2, award3) => {
    onSave(habit.id, title, award1, award2, award3);
    setModal(false);
  };

  const addDay = () => {
    setDays(days + 1);
    setChain(chain + 1);
    setIsValid(false)
  }

  const removeDay = () => {
    setChain(0)
  }

  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  const onPressAward = () => {
    let number = randomInteger(1, 3)
    let award = ''
    if(number === 1) {
      award = habit.award1
    } else if(number === 2) {
      award = habit.award2
    } else if(number === 3) {
      award = habit.award3
    }
    Alert.alert(
      "За движение в правильном направлении наградите себя:",
      `${award}`,
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
    setIsValid(true)
  }
  

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
            <Text style={styles.text2}>выполнений:</Text>
            <Text style={styles.text3}>{days}</Text>
          </View>
          <View style={styles.days}>
            <Text style={styles.text}>количество</Text>
            <Text style={styles.text2}>без перерыва:</Text>
            <Text style={styles.text3}>{chain}</Text>
          </View>
        </View>

        <View style={styles.buttonsPlusMinus}>
          <AntDesign.Button
            style={styles.buttonPlus}
            name="pluscircleo"
            size={40}
            color="green"
            onPress={addDay}
          />
          <AntDesign.Button
            style={styles.buttonPlus}
            name="minuscircleo"
            size={40}
            color="red"
            onPress={removeDay}
          />
        </View>
      </Card>

      <Card>
        <View style={styles.award}>
          <Text style={styles.textAward}>Твои награды:</Text>

          <View style={styles.textAward}>
            <Text>-{habit.award1}</Text>
            <Text>-{habit.award2}</Text>
            <Text>-{habit.award3}</Text>
          </View>
        </View>

        <View style={styles.buttonEdit}>

        {isValid ? (<Button
            color={THEME.BACKGROUND_COLOR}
            title="редактировать"
            onPress={() => setModal(true)}
          />):(<Button
            color="red"
            title="получить награду!"
            onPress={onPressAward}
          />)}
          

         
        </View>
      </Card>

      <View style={styles.mainButton}>
        <View style={styles.button}>
          <Button color={THEME.MUSTARD_COLOR} title="назад" onPress={goBack} />
        </View>
        <View style={styles.button}>
          <Button
            title="удалить"
            color={THEME.LIGHT_MUSTARD_COLOR}
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

  text2: {
    fontSize: 15,
    marginBottom: 10,
  },

  text3: {
    fontSize: 20,
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
  textAward: {
    marginBottom: 10,
  },

  buttonEdit: {
    justifyContent: "space-around",
  },
  buttonsPlusMinus:{
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonPlus: {
    backgroundColor: THEME.LIGHT_MUSTARD_COLOR,
  },
});
