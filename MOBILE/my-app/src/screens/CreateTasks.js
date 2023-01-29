import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";

import styles from "../styles/style";

import ButtonSubmit from "./src/components/ButtonSubmit";

export default function OpenedTasks() {

  // Recebimento dos dados inseridos nos inputs e cadastro de nova tarefa
  const [description, setDescription] = useState([]);
  const [time, setTime] = useState([]);

  const submitTask = (value1, value2) => {
    // console.log(data1, data2)
    const data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
          descricao: value1,
          hora_inicio: value2
        })
    }
    fetch("http://localhost:3000/criartarefa", data)
      .then((response) => response.status)
      .then((resp) => {
        if (resp === 200) {
          console.log("Pedido Cadastrado");
        } else {
          console.log(resp.status)
        }
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Criar Nova Tarefa</Text>
      </View>
      <View>
        <TextInput style={styles.subscribeInput}
          onChangeText={(value) => { setDescription(value) }}
          placeholder="Descrição"
          placeholderTextColor="#E4DDB3">
        </TextInput>
        <TextInput style={styles.subscribeInput}
          onChangeText={(value) => { setTime(value) }}
          placeholder="Horário de Início"
          placeholderTextColor="#E4DDB3">
        </TextInput>
        <ButtonSubmit
          value="Cadastrar Nova Tarefa"
          onPress={() => { submitTask(description, time) }}>
        </ButtonSubmit>
      </View>
    </View>
  );
}